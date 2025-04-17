const Blockchain = require("./models/blockchain");
const { saveBlockchain } = require("./persistence/blockchainPersitence");

const blockchain = new Blockchain("Uemf",6,300,50,"uemfCoin")
saveBlockchain(blockchain)
.then(()=>console.log("blockchain saved with success"))
.catch(e=>
    console.log("error on saving blockchain")
)
