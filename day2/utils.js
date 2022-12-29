import {ethers} from "ethers";
import 'dotenv/config';

const getProvider = (mainnet = false) => {
    const providerURL = mainnet ? "http://10.0.0.38:8545" 
    : 'https://goerli.infura.io/v3/9e2857e74189474bb2b52e01c6608031';

    return new ethers.providers.JsonRpcProvider(providerURL);
}

//const provider = getProvider(true);
//console.log("Provider", await provider.getNetwork());

const generateNewWallet = () => {
    //Wallet Address = 0x4d97845a7071C6138fA2C07dFd66111d618a1ba3
    const wallet = ethers.Wallet.createRandom();

    console.log("address", wallet.address);
    console.log("mnenomic", wallet.mnemonic.phrase);
    console.log("private Key", wallet.privateKey);
};

const getSigner = (mainnet = false) => {
    const provider = getProvider(mainnet);
    return new ethers.Wallet (
        process.env.MY_WALLET_PRIVATE_KEY,
        provider
    );
};

// const provider = getProvider();
// const signer = getSigner();
// console.log("signer", await signer.getAddress());
// console.log("Provider", await provider.getNetwork());

//generateNewWallet();

export {getSigner, getProvider, generateNewWallet};