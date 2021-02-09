// 関数群のクラスへの集約
import {acquireReading, baseRate} from "./CombineFunctionsIntoClass";

const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading)

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity
}