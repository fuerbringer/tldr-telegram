<img src="./icon/tldr-tg.png" alt="Bot Icon" width="128px" height="128px">

# tldr-telegram
> The tldr pages client for Telegram Messenger. 

This free/libre code is currently running at [@tldr_pages_bot](https://t.me/tldr_pages_bot). Try it out and share it in your group chats!

## Screenshot

![tldr pages bot](https://raw.githubusercontent.com/fuerbringer/tldr-telegram/master/screenshot.png)

## Installing / Getting started

This bot can be run with Docker or simply `npm start`. In both cases `.env` needs to be populated with the following environment variables:

```
NODE_ENV=production
BOT_TOKEN=<TELEGRAMBOTFATHERTOKEN>
BOT_USERNAME=<TELEGRAMBOTUSERNAME>
GITHUB_TOKEN=<GITHUBTOKEN>
REDIS_HOST=<REDISIP>
REDIS_PORT=<REDISPORT>
LOG_FILE=<LOGFILENAME>
```

Note that `REDIS_HOST` and `REDIS_PORT` are optional if you're using `docker-compose` to start the bot.

### Docker installation

With the `.env` file done you're ready to launch your selfhosted `tldr-telegram` bot.
Use `docker run -d fuerbringer/tldr-telegram` to get up and running quickly. Alternatively you can clone this repository and execute `docker-compose up -d` for a more unified solution with both the bot and redis containerized.

### Useful links

- [Telegram BotFather](https://core.telegram.org/bots#6-botfather)
- [GitHub Token Settings](https://github.com/settings/tokens)
- [fuerbringer/tldr-telegram Docker image](https://hub.docker.com/r/fuerbringer/tldr-telegram/)

<!--
TODO: This stuff below, see https://github.com/wearehive/project-guidelines/blob/master/README.sample.md for a vague idea of what would be good to add
## Developing
-->

## Licensing
### Code
The executable source code is freely available under the [GNU Affero General Public License v3.0](./LICENSE).

### Icon
[The icon files](./icon) are licensed under the [Creative Commons Attribution-ShareAlike 4.0 International License](./icon/LICENSE).

## Privacy
The development of this bot attempts to follow the [Telegram API Terms of Service](https://core.telegram.org/api/terms) as closely as possible to guard the users' privacy. Logger code only retains information necessary to find bugs and keep a high uptime.
