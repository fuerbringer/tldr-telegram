<img src="./icon/tldr-tg.png" alt="Bot Icon" width="256px" height="256px">

# TLDR-Telegram
> A TL;DR Client for Telegram

This repo contains the source for [@tldr_pages_bot](https://t.me/tldr_pages_bot) on [Telegram](https://telegram.org/).

## Installing / Getting started

Follow these steps to run this bot:

1. Clone this repository: `git clone git@github.com:fuerbringer/tldr-telegram.git` and enter it: `cd tldr-telegram`
2. Create the `.env` file needed for various tokens: `touch .env`
3. Add @BotFather to your telegram and create a bot. You will get a bot token. Add that token to the `.env` file in this format: `BOT_TOKEN=<YOURTOKENHERE>`. [More instructions here](https://core.telegram.org/bots#6-botfather).
4. Generate a GitHub access token [here](https://github.com/settings/tokens). It is needed to avoid getting API rate limited early on. You can leave all the checkboxes empty/unchecked. Add the resulting hash to the `.env` file like this: `GITHUB_TOKEN=<YOURGHTOKEN>`
5. Go ahead and add `NODE_ENV=production` to `.env` if you're intending to run this in prod.
6. Execute `npm start`

<!--
TODO: This stuff below, see https://github.com/wearehive/project-guidelines/blob/master/README.sample.md for a vague idea of what would be good to add

## Developing
-->

## Licensing
### Code
[The source code](./icon) is licensed under the
[GNU Affero General Public License v3.0](./LICENSE)

### Icon
[The icon files](./icon) are licensed under the
[Creative Commons Attribution-ShareAlike 4.0 International License](./icon/LICENSE).
