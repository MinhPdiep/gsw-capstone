const express = require('express');
const app = express();
const path = require('path');
const dbService = require('./dbService');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
//Read

app.get('/getAll', (request, response)=>{
 const db = dbService.getDbServiceInstance();
 const result = db.getAllData();
  result 
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})
//Search Depart City

app.get('/search/:from', (request,response)=>{
  const { from } = request.params;
  const db = dbService.getDbServiceInstance();
  const result = db.searchByCity(from);
  result 
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})
//Search Destination City
 
app.get('/searchdes/:toCity', (request,response)=>{
  const { toCity } = request.params;
  const db = dbService.getDbServiceInstance();
  const result = db.searchDesCity(toCity);
  result 
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})
//Search Airfare

app.get('/searchairf/:airfare', (request,response)=>{
  const { airfare } = request.params;
  const db = dbService.getDbServiceInstance();
  const result = db.searchAirfare(airfare); 
  result 
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})
//Search Date

app.get('/searchdate/:date', (request,response)=>{
  const { date } = request.params;
  const db = dbService.getDbServiceInstance();
  const result = db.searchDate(date);
  result 
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})
//Search Return Date

app.get('/searchretD/:reD', (request,response)=>{
  const { reD } = request.params;
  const db = dbService.getDbServiceInstance();
  const result = db.searchRetDate(reD);
  result 
  .then(data => response.json({data : data}))
  .catch(err => console.log(err));
})

// Sort Depart Date
app.get('/sortDes', (request, response)=>{
  const db = dbService.getDbServiceInstance();
  const result = db.sortdes();
   result 
   .then(data => response.json({data : data}))
   .catch(err => console.log(err));
 })

app.use(express.static('html'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(5000,function(){
  console.log('Node server running @ http://localhost:5000')
});

 