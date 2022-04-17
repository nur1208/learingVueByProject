module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "working" });
  });

  app.post("/register", (req, res) => {
    res.status(200).json({ message: `email ${req.body.email}` });
  });
};
