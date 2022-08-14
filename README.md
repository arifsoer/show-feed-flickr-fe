# FLICKR API FEEDS
this rest API get flickr api to access the image feeds then response data in JSON format
## Setup
 1. clone on your local machine using git clone
 2. install dependency using yarn or npm 

> yarn install
or
> npm install

## Usage

 1. make sure that the [process-flickr-be](https://github.com/redbios/process-flickr-be) already run on your local machine
 2. check variable API_URL on ./src/plugins/axios match with your backend url
 3. run Application using below command

> yarn start

 3. access using web browser request with GET method to http://<localhost>:3000/
 4. click button search to show the images feed and wait until the images shown in the page
## Test
run command below to run auto test

> yarn test
