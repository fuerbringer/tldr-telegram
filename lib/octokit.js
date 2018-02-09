const octokit = require('@octokit/rest')({
  debug: process.env.NODE_ENV !== 'production'
})

if (process.env.GITHUB_TOKEN) {
  octokit.authenticate({
    type: 'token',
    token: process.env.GITHUB_TOKEN
  })
}

module.exports = octokit
