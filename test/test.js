const covid19= require('../index.js')
async function test(){
    const data=await covid19.getData()
    const latestData=await covid19.getLatestData(data)
    console.log(latestData);}


test()