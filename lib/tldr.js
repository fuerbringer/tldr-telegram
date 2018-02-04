'use strict'

const octokit = require('./octokit')

module.exports = {
  rootPages: {
    org: 'tldr-pages',
    repo: 'tldr'
  },
  fetchPage: function (page, platform, next) {
    // TODO implement the following measures to accelerate the bot and avoid
    // being rate limited by the GitHub API:
    //  - implement github authorization
    //  - implement caching (maybe with redis?)
    octokit.repos.getContent({
      owner: this.rootPages.org,
      repo: this.rootPages.repo,
      path: `pages/${platform}/${page}.md`
    }).then(response => {
      next('', response)
    }).catch(error => {
      next(error)
    })
  }
}
