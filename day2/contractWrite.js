import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";
import ABI from "./abi/randomABI.js"

const contractAddress = "0x17be210F99c0f2fA4DD6544f3EDa5b2f03FB61D5";
const goerliSigner = getSigner();

const randomContract = new ethers.Contract( contractAddress , ABI , goerliSigner );

//console.log("BAYC Original Mint Price was", ethers.utils.formatEther(apePrice), "ETH");

const deposit = await randomContract.deposit(
    "test@gmail.com",
    2,
    {value: ethers.utils.parseEther("0.001"),
});

console.log(deposit)