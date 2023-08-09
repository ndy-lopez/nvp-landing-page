const express = require('express');
const app = express();
// Other server setup code

// Serve static files
app.use(express.static('build'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
