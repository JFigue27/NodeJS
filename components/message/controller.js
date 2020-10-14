const store = require('./store');

function addMessage(user, message) {
  //

  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] There is no user or message.');
      return reject('Incorrect Data!');
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };

    store.add(fullMessage);

    resolve(fullMessage);
  });
}
function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  //

  console.log(id);
  console.log(message);
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data.');
      return false;
    }
    const result = await store.updateMessage(id, message);
    resolve(result);
  });
}
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
};
