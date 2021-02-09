// 関数のインライン化

function beforeGetRating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1
}

function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5
}