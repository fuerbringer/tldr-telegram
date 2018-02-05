<img src="./icon/tldr-tg.png" alt="Bot Icon" width="256px" height="256px">

# TLDR-Telegram
> A TL;DR Client for Telegram

This repo contains the source for [@tldr_pages_bot](https://t.me/tldr_pages_bot) on [Telegram](https://telegram.org/).

## Installing / Getting started

This bot can be run with Docker or simply `npm start`. In both cases `.env` needs to be populated with the following environment variables:

```
NODE_ENV=production
BOT_TOKEN=<TELEGRAMBOTFATHERTOKEN>
BOT_USERNAME=<TELEGRAMBOTUSERNAME>
GITHUB_TOKEN=<GITHUBTOKEN>
REDIS_HOST=<REDISIP>
REDIS_PORT=<REDISPORT>
```

Note that `REDIS_HOST` and `REDIS_PORT` are optional if you're using `docker-compose` to start the bot.

### Useful links

- [Telegram BotFather](https://core.telegram.org/bots#6-botfather)
- [GitHub Token Settings](https://github.com/settings/tokens)

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
