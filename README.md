# README #

A REST API Server implemented by loopback.

This API contains feature such as:

* authentication and authorization
* CRUD
* validation
* filtering or searching
* pagination
* column filtering: which column should be returned, and
* endpoint-driven related model loading: for example by accessing `/posts` endpoint also will be able to load related model such as comments model.

### What is this repository for? ###

* API Server
* Version: 1.0.0

### How do I get set up? ###

* Clone this repo
* Import mysql schema: `mysql_schema/Dump20170613.sql`
* Update datasource configuration: `server/datasources.json`
* Execute this command from project root to install project dependency: `npm install` 
* Execute this command from project root to run app in local: `node .` or `npm start`
* Access API explorer to find all available resources: `http://0.0.0.0:3000/explore`
* API will be accesible in: `http://0.0.0.0:3000/api/v1/[resource]`

### Optimization Using PM2

* Install PM2 by using `npm install -g pm2`
* Run this command from app root directory `pm2 start . -i 0 --name "zul"` or `pm2 start ecosystem.config.json --env production` in production
* Run this command to check app running status `pm2 list`
* Run this command to restart app cluster `pm2 restart 0` or `pm2 restart all`
* Run this command to stop app cluster `pm2 stop 0` or `pm2 stop all`
* Run this command to monitor and see log `pm2 monit`
* Run this command to kill pm2 daemon `pm2 kill`