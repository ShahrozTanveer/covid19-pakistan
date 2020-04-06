const download = require('download-git-repo')
const csv = require('csvtojson')
const fs = require("fs")
const csvFilePath = __dirname + '/data/covid-19-pakistan-data.csv'
const dataDir = __dirname + '/data'
const gitRepo = 'ShahrozTanveer/covid-19-pakistan'
let updated=0
async function csvToJson(){ 
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray
}



function downloadData(){
    download(gitRepo, dataDir, (err) => {
        if (err) {
            console.log(err)
          
        } 


    })

}
async function getData(){
    const data=await csvToJson();
    
    return data
}
downloadData()

getData()


module.exports={
    about : "this is covid19-pakistan package",
    getData:getData,
    updateData:downloadData
}
