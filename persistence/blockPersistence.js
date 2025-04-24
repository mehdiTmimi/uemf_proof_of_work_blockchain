const pathFolder = "database/blocks"
const fs = require("fs")
const loadBlocks = async ()=>{

    try {
        let listFiles = await fs.promises.readdir(pathFolder)
        console.log(listFiles)
    } catch (error) {
        
    }
}
loadBlocks()
const saveBlocks = (blocks)=>{
    
}

const saveBlock  = (block)=>{
    
}

const getBlock = (hash)=>{
    
}

const getBlockByHeight = (height)=>{

}