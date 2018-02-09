'use strict'

const logger = require('./logger')
const octokit = require('./octokit')
const cache = require('./cache')

module.exports = {
  rootPages: {
    org: 'tldr-pages',
    repo: 'tldr'
  },
  downloadPage: function (page, platform, next) {
    octokit.repos.getContent({
      owner: this.rootPages.org,
      repo: this.rootPages.repo,
      path: `pages/${platform}/${page}.md`
    }).then(response => {
      const pageContents = Buffer.from(response.data.content, response.data.encoding).toString()
      next('', pageContents)
    }).catch(error => {
      next(error)
    })
  },
  fetchPage: function (page, platform, next) {
    cache.getPage(page, platform, (error, cachedPage) => {
      if (!cachedPage) {
        // This page has not yet been cached
        this.downloadPage(page, platform, (downloadError, downloadResponse) => {
          if (downloadResponse) {
            cache.cachePage(page, platform, downloadResponse, () => {})
          }
          next(downloadError, downloadResponse)
        })
      } else {
        next('', cachedPage) // Cached page has been found in Redis, deliver it
      }
      if (error) {
        logger.log('error', error)
      }
    })
  }
}
