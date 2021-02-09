// 関数群のクラスへの集約
import {acquireReading, baseRate, Reading} from "./CombineFunctionsIntoClass";

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;