module.exports = {
    name: `guildCreate`,
    async execute(guild, client) {

        let channel = await client.channels.fetch(client.config.guildLogsChannelID);
        let webhooks = await channel.fetchWebhooks();
        let webhook = webhooks.first();

        await webhook.send(`[${client.guilds.cache.size}] | :white_check_mark: **New Guild** | ${guild.id}`);
    }
};