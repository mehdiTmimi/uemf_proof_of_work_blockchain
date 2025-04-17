const fs = require("fs")
const pathDb = "../database/blockchain.json"
const saveBlockchain = async (blockchain) => {
    const { name, difficulty, miningInterval,
        blockReward, denom, head } = blockchain

    if (head != null) {
        head = head.hash
    }
    try {
        await fs.promises.writeFile(pathDb, JSON.stringify(
            {
                name, difficulty, miningInterval, blockReward, denom, head
            }
        ))
        return true;
    }
    catch (e) {
        console.error(e)
        return false
    }
}