const express = require('express');
const app = express();

app.use(express.static('./www'));

// app.get('*', function(request, response) {
//   console.log('New request:', request.url);
//   response.sendFile('./www/index.html', { root: '.' });
// });

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server running at http://${host}:${port}`);
});
