import { Network, Alchemy } from "alchemy-sdk"

const settings = {
    apiKey: import.meta.env.VITE_ALCHEMY_KEY,
    network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(settings)

export const getEnsAddress = async (ens) => {
    const address = await alchemy.core.resolveName(ens)
    return address
}

export const getEnsInfo = async (ens) => {
    const ensContractAddress = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
    const nfts = await alchemy.nft.getNftsForOwner(await getEnsAddress(ens), {
        contractAddresses: [ensContractAddress],
    });
    return nfts
}