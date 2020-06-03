const request = require('request');
const fs = require('fs');

const myURL = process.argv[2];
const filePath = process.argv[3];

request(myURL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(filePath, body, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});