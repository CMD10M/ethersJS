import { ethers } from "ethers";
import { getProvider } from "./utils.js";
import ABI from "./abi/BAYCABI.js"

const contractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
const mainnetProvider = getProvider(true);


const gethContract = new ethers.Contract( contractAddress , ABI , mainnetProvider );

const apePrice = await gethContract.apePrice();

console.log("BAYC Original Mint Price ", ethers.utils.formatEther(apePrice), "ETH");