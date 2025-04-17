const fs = require("fs")
const pathDb = "../database/blockchain.json"
const saveBlockchain = (blockchain)=>{
    const {name, difficulty, miningInterval, 
        blockReward, denom, head} = blockchain

        if(head!=null){
            head = head.hash
        }
        fs.promises.writeFile(pathDb,JSON.stringify(
            {
                name, difficulty, miningInterval, blockReward, denom, head
            }
        ))
}