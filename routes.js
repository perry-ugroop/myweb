const setup = (app) => {
  app.get('/', (req, res) => {
    res.send("Hello world again yeah!");
  });
};

export default { setup };
