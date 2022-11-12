const express = require("express");
const request = require("request");

const app = express();

//requesting data for a particular city
app.get("/", (req, res) => {
  let city = req.query.city;
 
  request(
    `http://api.weatherapi.com/v1/current.json?key=372f208a3f284a61b4670325222910&q=${city}&aqi=no`,
    function (error, response, body) {
      if (response.statusCode === 200) {
        res.send(`The weather in your city ${city} is ${body}`);
      }
    }
  );
});

//requesting data for multiple cities
app.get("/multipleCities", (req, res) => {
  let cities = req.query.cities;
  //let resInfo = []
  console.log(typeof( cities));
  const getWeatherData = () =>
    Promise.all(
      cities.map(
        (city) =>
          new Promise((resolve, reject) =>
            request.get(
              `http://api.weatherapi.com/v1/current.json?key=372f208a3f284a61b4670325222910&q=${city}&aqi=no`,
              function (error, response, body) {
                if (response.statusCode === 200) {
                  //resInfo.push(body);
                  return resolve(body);
                }
                return reject(error);
              }
            )
          )
      )
    );

  const main = async () => {
    const data = await getWeatherData();
    res.send(data);
  };
  main();
});

//requesting data by pincode
app.get("/zipcode", (req, res) => {
  let postalcode = req.query.code;
  var request = require("request");

  request(
    `http://api.weatherapi.com/v1/current.json?key=372f208a3f284a61b4670325222910&q=${postalcode}&aqi=no`,
    function (error, response, body) {
      if (response.statusCode === 200) {
        res.send(`The weather in your city with ${postalcode} is ${body}`);
      }
    }
  );
});

//requesting data for next X days
app.get("/forecast", (req, res) => {
  let city = req.query.city;
  let days = parseInt(req.query.days);
  let page = req.query.page;
  let recordsPerPage = 3;
  
  // http://api.weatherapi.com/v1/forecast.json?key=372f208a3f284a61b4670325222910&q=GL7
  // &days=1&aqi=no&alerts=no

  request(
    `http://api.weatherapi.com/v1/forecast.json?key=372f208a3f284a61b4670325222910&q=${city}&days=${days}&aqi=no`,
    function (error, response, body) {
      body  = JSON.parse(body);
      console.log(body);
      var forecast = [];
      if (response.statusCode === 200) {
        let startIndex = 0,EndIndex = 0;
        if(days <= recordsPerPage)
        {
            startIndex = 0,EndIndex = days-1
        }
        else 
        {
            startIndex = recordsPerPage * (page-1);
            if(( recordsPerPage * page) > body.forecast.forecastday.length)
            {
              EndIndex = body.forecast.forecastday.length  -1;
            }
            else
            {
              EndIndex = recordsPerPage * page -1;
            }
        }  
        console.log(startIndex);
        console.log(EndIndex);
        for(var i = startIndex;i<=EndIndex;i++)
        {
            forecast.push(body.forecast.forecastday[i]);
        }
        body.forecast.forecastday = forecast;
        console.log(body);
        res.send(`${JSON.stringify(body)}`);
      }
    }
  );
});

//requesting data with Particular date past or future
app.get("/date", (req, res) => {
  let city = req.query.city;
  let date = req.query.date;
  var request = require("request");
  // http://api.weatherapi.com/v1/future.json?key=372f208a3f284a61b4670325222910&q=GL7&dt=2022-11-28
  let dateType = new Date(date) > new Date()?"future":"history"
  request(
    `http://api.weatherapi.com/v1/${dateType}.json?key=372f208a3f284a61b4670325222910&q=${city}&dt=${date}`,
    function (error, response, body) {
      if (response.statusCode === 200) {
        res.send(`${body}`);
      }
    }
  );
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
