// 関数の抽出

function PrintOwing(invoice) {

    printBanner();

    //未払金の計算（calculate outstanding）
    const outstanding = calculateOutstanding(invoice)

    //締め日の記録（record due date）
    recordDueDate(invoice)

    //明細の印字（print details）
    printDetails(invoice, outstanding);

    function printBanner() {
        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");
    }

    function printDetails(invoice, outstanding) {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outstanding}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
    }

    function recordDueDate(invoice) {
        const today = Clock.today;
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    }

    function calculateOutstanding(invoice) {
        let result = 0;
        for (const o of invoice.orders) {
            result += o.amount;
        }
        return result;
    }
}