// 関数群のクラスへの集約
import {acquireReading, baseRate, taxThreshold} from "./CombineFunctionsIntoClass";

const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));