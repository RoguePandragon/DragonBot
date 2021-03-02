module.exports = {
    name: 'server',
    description: 'Server!',
    execute(message, args) {
        message.channel.send(`This is ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};