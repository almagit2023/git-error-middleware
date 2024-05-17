// Middleware to log errors
const errorLogger = (error, request, response, next) => {
  console.log(`error ${error.message}`);
  next(error); // calling next middleware
};
// Middleware to handle errors and send a response to the client
const errorHandler = (error, request, response, next) => {
  // Assuming a simple JSON response for demonstration purposes
  response.status(500).json({
    error: {
      message: error.message,
      stack: error.stack
    }
  });
};


// Express application setup
const express = require('express');
const app = express();


// Registering middleware functions
app.use(errorLogger);
app.use(errorHandler);
// errorHandler will only be called if an error occurs


// Sample route that triggers an error
app.get('/example', (request, response) => {
  // Simulating an error for demonstration purposes
  const error = new Error('This is a sample error');
  throw error;
});


// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
