const download = require('download-git-repo')
const csv = require('csvtojson')
const csvFilePath = __dirname + '/data/covid-19-pakistan-data.csv'
const dataDir = __dirname + '/data'
const gitRepo = 'ShahrozTanveer/covid-19-pakistan'

async function csvToJson() {
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray
}

function downloadData() {
    download(gitRepo, dataDir, (err) => {
        if (err) {
            console.log(err)

        } else {
            console.log("updated");
        }

    })



}
downloadData()
async function getData() {
    const data = await csvToJson();
    return data
}

async function getLatestData(data) {

    const size = data.length
    return [
        data[size - 7], data[size - 6], data[size - 5], data[size - 4], data[size - 3], data[size - 2], data[size - 1]
    ]
}

async function getTotalStats() {
    const data = await csvToJson()
    const latestData = await getLatestData(data)
    const date = latestData[0]['date']
    let totalCases = 0
    let totalActiveCases = 0
    let totalRecovered = 0
    let totalDeaths = 0


    latestData.forEach(element => {
        
        totalCases += parseInt(element['total_cases'])
        totalActiveCases += parseInt(element['active'])
        totalRecovered += parseInt(element['recovered'])
        totalDeaths += parseInt(element['deaths'])
    })

    return {
        "date": date,
        "cases": totalCases,
        "active": totalActiveCases,
        "recovered": totalRecovered,
        "deaths": totalDeaths
    }


}
async function getStatsByState(state){
    const data=await getData()
    const latestData = await getLatestData(data)    
    const stateData=latestData.filter((element)=>{
        return element.province === state.toUpperCase()
    })

    return (stateData.length)? (stateData):("Invalid Stated passed")
}



module.exports = {
    about: "this is covid19-pakistan package",
    getData: getData,
    downloadData: downloadData,
    getLatestData: getLatestData,
    getTotalStats:getTotalStats,
    getStatsByState:getStatsByState

}