import { ethers, BigNumber } from "ethers";
import { generateNewWallet, getProvider, getSigner } from "./utils.js";
import 'dotenv/config';

const mainnetProvider = getProvider(true);
const goerliSigner = getSigner();

const myBalance = await goerliSigner.getBalance();

console.log("goerli Balance", ethers.utils.formatEther((myBalance)));

const connorsBalance = await mainnetProvider.resolveName("connnor.eth");

const tx = await goerliSigner.sendTransaction({
    to: connorsBalance,
    value: myBalance.div(BigNumber.from(10)),
});

console.log("TX Sent", tx.hash);

await tx.wait;

console.log("TX confirmed");