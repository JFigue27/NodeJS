const db = require('mongoose');
const model = require('./model');
const Model = require('./model');
// mongodb+srv://db_user_platzivideos:*****@cluster0-wuwpz.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
// const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect('mongodb+srv://db_user_platzivideos:685PS696@cluster0.wuwpz.mongodb.net/db_telegrom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log('[db] Conectada con éxito');

function addMessage(message) {
  //   list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  //   return list;
  const messages = await Model.find();
  return messages;
}

async function updateMessage(id, message) {
  //
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateMessage: updateMessage,
  // get
  // delete
};
