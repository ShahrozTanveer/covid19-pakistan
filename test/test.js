const covid19 = require('../index.js')
async function example() {
    //fetching latest dataset from github
    const data=await covid19.getData()//contains whole dataset
    const latestData = await covid19.getLatestData(data)
    console.log(latestData);//just contains today's data

    // //fetching latest stats 
    const latestStats = await covid19.getTotalStats()
    console.log(latestStats)
    // //fetching stats by state name
    let state = await covid19.getStatsByState("punjab")
    console.log(state)
    //  //fetching stats by date format(dd-mm-yyyy)
    let byDate = await covid19.getDataByDate("06-04-2020")
    console.log(byDate)

}
example()
