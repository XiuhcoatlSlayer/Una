const { EmbedBuilder, SlashCommandBuilder } = require (`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Need help? Join our support server!"),

    async execute (interaction, client) {

        let supportEmbed = new EmbedBuilder();
        supportEmbed.setDescription(`**Need some help?**\n[You can click here to join my support server!](${client.config.supportServerLink})`);
        supportEmbed.setColor(`LuminousVividPink`);
        supportEmbed.setFooter({ text: `Feel free to stick around afterwords and be a part of my community!`});

        return interaction.reply({ embeds: [supportEmbed]});
    }
}