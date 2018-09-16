# samplasion.selfbot

This is a selfbot, based on [https://github.io/eslachance/evie.selfbot](Evie.Selfbot) by eslachance.

CThis is here for [insert something here] purposes, but remember that:
> USING SELFBOTS IS [AGAINST THE DISCORD TERMS OF SERVICE](https://discordapp.com/developers/docs/topics/oauth2). I AM NOT RESPONSIBLE AND CANNOT BE HELD LIABLE IF YOU LOSE PRIVILEGES, GET KICKED OR BANNED FROM ANY SERVER OR FROM DISCORD.
> So why does this still exist? Because we're all rebels and we like taking risks in order to get cool stuff.

## How to use

- Create a webhook in a channel where you want logs to appear (Channel Settings, Webhooks) and grab its ID and token.
- In the folder from where you ran the git command, run `cd evie.selfbot` and then run `npm install`
- Rename `config.json.example` to `config.json`
- Edit `config.json` and enter your token and other details as indicated. It should look like this afterwards: 

```json
{
  "botToken": "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0",
  "webhook": {
    "id": "123456789123456789",
    "token": "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0"
  },
  "prefix": "/"
}
```

## Getting your login token

1. From either the web application, or the installed Discord app, use the **CTRL+SHIFT+I** keyboard shortcut.
2. This brings up the **Developer Tools**. Go to the **Application** tab
3. On the left, expand **Local Storage**, then click on the discordapp.com entry (it should be the only one).
4. Locate the entry called `token`, and copy it.

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Starting the selfbot

To start the selfbot, in the command prompt, run the following command:
`node app.js`

> If at any point it says "cannot find module X" just run `npm install X` and try again.

<!-- For support join [〈evie.codes〉](https://discord.gg/PhT8scR) and talk to me, 〈evie.codes〉!-->

## Making your own stuff

Please see the [wiki on github](https://github.com/eslachance/evie.selfbot/wiki) for details on
adding your own commands, events, etc.

