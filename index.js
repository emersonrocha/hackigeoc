const watson = require('watson-developer-cloud');
const express = require('express');

const app = express();
//const port = 5000;

app.use(express.static('./public'));

var conversationWorkspace, conversation;

const assistant = watson.conversation({
    url: "https://gateway.watsonplatform.net/assistant/api"
    , username: "cf7885b8-f40d-4e1f-ade5-c9f322529dd8"
    , password: "AjInSsvDe5CY"
    , version_date: '2017-04-10'
    , version: 'v1'
});

conversationWorkspace = "be1d0a8a-f4fb-40ab-a03e-bdf439f7325f";

app.get('/conversation/:text*?', (req, res) => {
  const { text } = req.params;

  const params = {
    input: { text },
    workspace_id: conversationWorkspace,
  };

  assistant.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    res.json(response);
  });
});
app.listen(port, () => console.log(`Running on port ${port}`));