import Web3 from 'web3';
import * as dotenv from 'dotenv';
import DiscordMessager from './webhook.js';

dotenv.config();

class LatestBlocksPuller {
  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.endpoint));
  }

  async checkBlock() {
    let block = await this.web3.eth.getBlock('latest');
    let number = block.number;
    DiscordMessager(number);
  }
}

let blockPuller = new LatestBlocksPuller();
setInterval(() => {
  blockPuller.checkBlock();
}, 10 * 1000);
