import { EmbedBuilder, WebhookClient } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

const webhookClient = new WebhookClient({
  id: process.env.webhookId,
  token: process.env.webhookToken,
});

const embed = new EmbedBuilder().setTitle('Hello Weston').setColor(0x00ffff);

export default function DiscordMessager(number) {
  webhookClient.send({
    content: `Block: ${number}`,
    username: 'BlockChain',
    embeds: [embed],
  });
}
