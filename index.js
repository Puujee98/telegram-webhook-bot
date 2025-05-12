const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const TOKEN = '7887047254:AAHSBDiAKTS6e3TKkSeJNXzumzaAVR5Swww';
const TELEGRAM_API = https://api.telegram.org/bot${TOKEN};

app.post('/webhook', async (req, res) => {
  const message = req.body.message;
  if (message && message.text) {
    const chatId = message.chat.id;
    const text = message.text;
    await axios.post(${TELEGRAM_API}/sendMessage, {
      chat_id: chatId,
      text: Сайн байна уу! Та бичлээ: ${text}
    });
  }
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send("Bot is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
