[![NPM version](https://img.shields.io/npm/v/covid19-pakistan)](https://www.npmjs.com/package/covid19-pakistan)
[![NPM Downloads](https://img.shields.io/npm/dt/covid19-pakistan.svg)](https://www.npmjs.com/covid19-pakistan)
[![Gitter](https://badges.gitter.im/SharozTanveer/community.svg)](https://gitter.im/SharozTanveer/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![NPM Download Stats](https://nodei.co/npm/covid19-pakistan.png?downloads=true)](https://www.npmjs.com/package/covid19-pakistan)

Please consider following this project's author, [Sharoz Tanveer](https://github.com/ShahrozTanveer), and consider starring the project to show your :heart: and support.

# covid19-pakistan v1.0.0(stable)🚀

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
const covid19 = require("covid19-pakistan");
async function example() {
  //fetching latest dataset from github
  const data = await covid19.getData(); //contains whole dataset

  const latestData = await covid19.getLatestData(data);
  console.log(latestData); //just contains today's data

  //fetching latest stats
  const latestStats = await covid19.getTotalStats();
  console.log(latestStats);
  //fetching stats by state name
  let state = await covid19.getStatsByState("punjab");
  console.log(state);
  //fetching stats by date format(dd-mm-yyyy)
  let byDate = await covid19.getDataByDate("06-04-2020");
  console.log(byDate);
}
example();
```

**getData()** methdod will return array of Objects containing covid-19 for Pakistan data.\
**getLatestData()** method requires parameter( array data returned by getData() method ),It will return data of lastest day.\
**getTotalStats()** method will return Object that will contain latest stats of covid-19 (Pakistan)\
**getStatsByState()** method requires state name and it will return object containg data of provided state.\
**getDataByDate()** method requires date in format (dd-mm-yyyy) and it will return data from that given date.

### Author

**Sharoz Tanveer**

- [LinkedIn Profile](https://www.linkedin.com/in/sharoztanveer/)
- [GitHub Profile](https://github.com/ShahrozTanveer)
- [Twitter Profile](https://twitter.com/saadtanveer3121)

### License

Copyright © 2020, [Sharoz Tanveer](https://github.com/ShahrozTanveer).
Released under the [MIT License](LICENSE).

---

Made with :heart: in Javascript
