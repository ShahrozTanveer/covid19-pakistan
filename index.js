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

    console.log("updating");
    download(gitRepo, dataDir, (err) => {
        if (err) {
            console.log(err)

        } else {
            console.log("updated");
        }


    })



}

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getData() {
    downloadData()

    return await sleep(3000)
        .then(async () => {
            const data = await csvToJson();
            return data
        })


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
    const mortalityRate = (((totalDeaths / totalCases) * 100).toFixed(1)) + "%"

    const recoveryRate = (((totalRecovered / totalCases) * 100).toFixed(1)) + "%"

    return {
        "date": date,
        "cases": totalCases,
        "active": totalActiveCases,
        "recovered": totalRecovered,
        "deaths": totalDeaths,
        "mortalityRate": mortalityRate,
        "recoveryRate": recoveryRate
    }


}
async function getStatsByState(state) {
    const data = await getData()
    const latestData = await getLatestData(data)
    const stateData = latestData.filter((element) => {
        return element.province === state.toUpperCase()
    })
    if(stateData.length){
        
        const total = parseInt(stateData[0]['total_cases'])
        const recovered = parseInt(stateData[0]['recovered'])
        const deaths = parseInt(stateData[0]['deaths'])
        const mortalityRate = (((deaths / total) * 100).toFixed(1)) + "%"

        const recoveryRate = (((recovered / total) * 100).toFixed(1)) + "%"
        return {
            "date": stateData[0]['date'],
            "province": stateData[0]['province'],
            "total_cases": stateData[0]['total_cases'],
            "active": stateData[0]['active'],
            "recovered": stateData[0]['recovered'],
            "deaths": stateData[0]['deaths'],
            "mortalityRate": mortalityRate,
            "recoveryRate": recoveryRate
        }
    }
    return  "Invalid Stated passed"
}

async function getDataByDate(date) {
    const data = await getData()

    const byDateData = data.filter((element) => {

        return element.date === date
    })

    return (byDateData.length) ? (byDateData) : ("Invalid Date passed")
}

module.exports = {
    about: "this is covid19-pakistan package",
    getData: getData,
    downloadData: downloadData,
    getLatestData: getLatestData,
    getTotalStats: getTotalStats,
    getStatsByState: getStatsByState,
    getDataByDate: getDataByDate,
    author: "Sharoz Tanveer"

}