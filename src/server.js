require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
