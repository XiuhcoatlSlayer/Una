const { EmbedBuilder, SlashCommandBuilder } = require (`discord.js`);

module.exports = {
    data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite Una to your server!"),

    async execute (interaction, client) {

        let inviteEmbed = new EmbedBuilder();
        inviteEmbed.setDescription(`**Thank you so much!**\n[You can click here to invite me to your server!](${client.config.inviteLink})`);
        inviteEmbed.setColor(`LuminousVividPink`);
        inviteEmbed.setFooter({ text: `Make sure that people in your server have permissions to use slash commands so they can use me!`});

        return interaction.reply({ embeds: [inviteEmbed]});
    }
}