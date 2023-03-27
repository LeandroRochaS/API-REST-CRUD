import app from './app';

require('dotenv').config();

const port = process.env.APP_PORT || 3001;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Click + CTRL http://localhost:${port}`);
});
