import { BigNumber, ethers } from "ethers";
import 'dotenv/config';

//const infuraURL = 'https://mainnet.infura.io/v3/9e2857e74189474bb2b52e01c6608031';

//const provider = new ethers.providers.JsonRpcProvider(infuraURL);

const provider = new ethers.providers.JsonRpcProvider("http://10.0.0.38:8545");

const myAddress = await provider.resolveName("connnor.eth")

console.log("connnor.eth is", myAddress);

console.log(myAddress, "balance is", ethers.utils.formatEther(await provider.getBalance(myAddress)), "ETH");