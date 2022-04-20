const mysql = require('mysql');
let instance = null;
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1516',
    database: 'airline'
  });
  conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });
  class DbService{
      static getDbServiceInstance(){
        return instance ?  instance : new DbService();
      }
      async getAllData() {
        try{
          const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM FLIGHT_INFOR;";

                conn.query(query, (err, results) => {
                  if (err) reject (err);
                  resolve(results);
                })
          });
          return response;
        }
        catch (error){
          console.log(error);
 
        }
      }
      async searchByCity(from){
        try{
          const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM FLIGHT_INFOR WHERE DEPART_LOCATION = ? ;";
                conn.query(query, [from], (err, results) => {
                  if (err) reject (err);
                  resolve(results);
                })
          });
          return response;
        }
        catch (error){
          console.log(error);

        }
      
      }
      async searchDesCity(toCity){
        try{
          const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM FLIGHT_INFOR WHERE ARRIVE_LOCATION = ? ;";
                conn.query(query, [toCity], (err, results) => {
                  if (err) reject (err);
                  resolve(results);
                })
          });
          return response;
        }
        catch (error){
          console.log(error);

        }

      }
      async searchAirfare(airfare){
        try{
          const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM FLIGHT_INFOR WHERE AIRLINE = ? ;";
                conn.query(query, [airfare], (err, results) => {
                  if (err) reject (err);
                  resolve(results);
                })
          });
          return response;
        }
        catch (error){
          console.log(error);

        }
        
      }
      async searchDate(date){
        try{
          const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM FLIGHT_INFOR WHERE DEPART_DATE = ? ;";
                conn.query(query, [date], (err, results) => {
                  if (err) reject (err);
                  resolve(results);
                })
          });
          return response;
        }
        catch (error){
          console.log(error);

        }

      }
      async searchRetDate(reD){
        try{
          const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM FLIGHT_INFOR WHERE ARRIVE_DATE = ? ;";
                conn.query(query, [reD], (err, results) => {
                  if (err) reject (err);
                  resolve(results);
                })
          });
          return response;
        }
        catch (error){
          console.log(error);

        }
        
      }
 
      async sortdes() {
        try{
          const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM FLIGHT_INFOR ORDER BY DEPART_LOCATION ASC;";

                conn.query(query, (err, results) => {
                  if (err) reject (err);
                  resolve(results);
                })
          });
          return response;
        }
        catch (error){
          console.log(error);
 
        }
      }
     
  }
  module.exports = DbService;