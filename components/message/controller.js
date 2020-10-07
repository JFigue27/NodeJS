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
    console.log(fullMessage);
    resolve(fullMessage);
  });
}
module.exports = {
  addMessage,
};
