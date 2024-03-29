const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');

const app = new express();
const port = 5678;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/spotify_access_token', async (req, res, next) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_SECRET;

  // We need, annoyingly, a base64-encoded string of our id:secret, for spotify.
  // We can use Buffers to do this for us.
  const authString = Buffer.from(clientId + ':' + clientSecret).toString(
    'base64'
  );

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `basic ${authString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  })

  const json = await response.json();

  res.send(json);
});

app.listen(port, function(error) { 
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
