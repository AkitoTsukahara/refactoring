// 関数群のクラスへの集約
import {acquireReading, baseRate} from "./CombineFunctionsIntoClass";

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;