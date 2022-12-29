import { BigNumber, ethers } from "ethers";

const infuraURL = 'https://goerli.infura.io/v3/9e2857e74189474bb2b52e01c6608031';

const provider = new ethers.providers.JsonRpcProvider(infuraURL);

const privateKey_ = "0x0a7152eabedbe9cd7188749d2ec29f30b1e3cc9000542794cc993b646aa59ad8";

const signer = new ethers.Wallet(privateKey_, provider);
await signer.connect(provider);
console.log("address:", signer.address);

const myBalance = await provider.getBalance(signer.address);

console.log("goerli Balance", ethers.utils.formatEther((myBalance)));

const tx = await signer.sendTransaction({
    to: "0x0fa55F7DdAF3e1B6D6e902E65A133f49fA254948",
    value: myBalance.div(BigNumber.from(3)),
});

console.log("TX Sent", tx);

await tx.wait;

console.log("TX confirmed");