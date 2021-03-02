module.exports = {
    name: 'avatar',
    description: 'Get the avatar URL of the tagged user(s) or your own avatar.',
    execute(message) {
        console.log(message.mentions.users.size)
        if (!message.mentions.users.size) {
            return message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
        });
        return message.channel.send(avatarList);
    },
};