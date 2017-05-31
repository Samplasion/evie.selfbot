exports.run = (bot, msg, args) => {
  let name = args[0];
  let contents = args.slice(1).join(" ");
  bot.slashes.add(bot, name, contents)
  .then(msg.edit("Shortcut was added: "+name).then(msg.delete(2000)))
  .catch(e=> msg.edit(e).then(msg.delete(2000)));
};