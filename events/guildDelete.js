module.exports = {
    name: `guildDelete`,
    async execute(guild, client) {

        let channel = await client.channels.fetch(client.config.guildLogsChannelID);
        let webhooks = await channel.fetchWebhooks();
        let webhook = webhooks.first();

        await webhook.send(`[${client.guilds.cache.size}] | :no_entry_sign: **Lost Guild** | ${guild.id}`);
    }
};