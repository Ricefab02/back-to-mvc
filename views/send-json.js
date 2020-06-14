const sendIfExists = (req, res) => {
  const { data } = req;

  if (data == null) {
    return res.sendStatus(404);
  }

  res.json(data);
};

const send = (req, res) => {
  const { data } = req;

  res.json(data);
};

module.exports = {
  sendIfExists,
  send,
}
