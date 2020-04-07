const download = require('download-git-repo')
const csv = require('csvtojson')
const csvFilePath = __dirname + '/data/covid-19-pakistan-data.csv'
const dataDir = __dirname + '/data'
const gitRepo = 'ShahrozTanveer/covid-19-pakistan'
async function csvToJson(){ 
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray
}
function downloadData(){
     download(gitRepo, dataDir, (err) => {
        if (err) {
            console.log(err)
          
        } 
        else{
            console.log("updated");
        }


    })
   


}
async function getData(){
    const data=await csvToJson();
    // console.log(data);
    return data
}


module.exports={
    about : "this is covid19-pakistan package",
    getData:getData,
    downloadData:downloadData
   
}
