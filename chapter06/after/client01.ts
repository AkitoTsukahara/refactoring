// 関数群のクラスへの集約
import {acquireReading, Reading} from "./CombineFunctionsIntoClass";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);


export const baseCharge = aReading.baseCharge;