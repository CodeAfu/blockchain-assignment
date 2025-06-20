import MediaRights from "@/contracts/MediaRights.json";
import contractAddress from "@/contracts/contract-address.json";

export const MEDIA_CONTRACT_ADDRESS = contractAddress.mediaRights;
export const MEDIA_CONTRACT_ABI = MediaRights.abi;
export const MEDIA_CONTRACT_BYTECODE = MediaRights.bytecode;
