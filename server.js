const express = require('express');
const errorHandler = require('./errorHandler');
const app = express();


// Example route handling errors
app.get('/user/:id', async (req, res, next) => {
  try {
    const userId = Number(req.params.id); // Directly access the user ID from the route parameters


    if (userId > 10) {
      const notFoundError = new Error('User not found');
      notFoundError.statusCode = 404; // Set the status code for the error to NOT_FOUND
      return next(notFoundError); // Pass error to error handler
    }
    res.json(userId);
  } catch (err) {
    next(err); // Pass any other errors to error handler
  }
});


// Register error handler middleware (at the end)
app.use(errorHandler);


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
