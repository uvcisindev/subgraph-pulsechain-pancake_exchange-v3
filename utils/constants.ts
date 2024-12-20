/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts";
import { Factory as FactoryContract } from "../generated/templates/Pool/Factory";
import { FACTORY_ADDRESS_PULSE } from "../Constants";


export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";
// prettier-ignore
export const FACTORY_ADDRESS = FACTORY_ADDRESS_PULSE;//"0x50C3b0c0A572f8D0Bc5a8b415dB3135b22f39a0A"//"0x1bb72e0cbbea93c08f535fc7856e0338d7f7a8ab";

export let ZERO_BI = BigInt.fromI32(0);
export let ONE_BI = BigInt.fromI32(1);
export let ZERO_BD = BigDecimal.fromString("0");
export let ONE_BD = BigDecimal.fromString("1");
export let BI_18 = BigInt.fromI32(18);

export let TWO_BD = BigDecimal.fromString("2");

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS));
