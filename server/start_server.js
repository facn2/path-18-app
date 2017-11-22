const app = require('./server');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
