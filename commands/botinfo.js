const { EmbedBuilder, SlashCommandBuilder } = require (`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Displays information about the bot!"),

    async execute (interaction, client) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
    
        let uptime = `${days} days, ${hours} hours, and ${minutes} minutes`;

        let infoEmbed = new EmbedBuilder();
        infoEmbed.setColor(`LuminousVividPink`);
        infoEmbed.setDescription(`Hello, I'm Una! I am a bot that can do lots of different types of role management.\nI have something that every server can use! You can find all of my commands in \`/help\` and you can join my [support server](https://discord.gg/ReBB9fU8ZQ) if you have any questions about me!`);
        infoEmbed.addFields(
            { name: `**Creation Date:**`, value: `I was born on\nAugust 6th, 2021!`, inline: true},
            { name: `**Creators:**`, value: `My parents are \nxiuhcoatlslayer and faithie`, inline: true},
            { name: `**Uptime:**`, value: `I've been awake for ${uptime}!`, inline: false},
            { name: `**Current Servers:**`, value: `I have friends in ${client.guilds.cache.size} servers!`, inline: true},
            { name: `**Privacy Policy and Terms of Service:**`, value: `Read my Privacy Policy and TOS on my [super cool totally awesome website](https://unabot.xyz)!`, inline: false}
        )

        return interaction.reply({ embeds: [infoEmbed]});
    }
}