
[![NPM version](https://img.shields.io/npm/v/covid19-pakistan)](https://www.npmjs.com/package/covid19-pakistan)
[![NPM Downloads](https://img.shields.io/npm/dt/covid19-pakistan.svg)](https://www.npmjs.com/covid19-pakistan)

# covid19-pakistan(still in development)
## Import the latest Pakistan Covid-19 data in Javascript
### Get Latest Covid-19 Pakistan Data: https://github.com/ShahrozTanveer/covid-19-pakistan
Quick and easy way to get covid-19 in Pakistan updates.\
use async/await. 
## Installation
```sh
npm i covid19-pakistan
```

## Examples
```javascript
const data=await covid19.getData()
    const latestData = await covid19.getLatestData(data)
    console.log(latestData);
    const latestStats = await covid19.getTotalStats()
    console.log("Latest Stats");
    console.log(latestStats);

}
example()
```
**getData()** methdod will return array of Objects containing covid-19 for Pakistan data.\
**getLatestData()** method requires parameter( array data returned by getData() method ),It will return data of lastest day.\
**getTotalStats()** method will return Object that will contain latest stats of covid-19 (Pakistan)
