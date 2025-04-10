class Transaction {
    constructor(signature, feesAmount) {
        this.signature = signature
        this.feesAmount = feesAmount
        this.mempool = null;
        this.block = null
    }
}