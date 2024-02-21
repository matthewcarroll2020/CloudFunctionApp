const functions = require("firebase-functions");

// HTTP request 1
exports.randomNumber = functions.https.onRequest((_, response) => {
  const number = Math.round(Math.random() * 100);
  response.send(number.toString());
});

// HTTP request 2
exports.squareNumber = functions.https.onRequest((request, response) => {
  const number = parseInt(request.query.number);
  const square = number * number;
  response.send(square.toString());
});

// HTTP request 3
exports.evenNumbers = functions.https.onRequest((request, response) => {
  const numbers = request.body;
  const evenNumbers = numbers.filter((obj) => obj.number % 2 === 0)
      .map((obj) => obj.number);
  response.send(JSON.stringify(evenNumbers));
});
