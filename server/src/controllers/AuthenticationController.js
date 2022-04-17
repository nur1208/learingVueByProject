const { User } = require("../models");

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();

      userJson.password = null;
      res.send({
        user: userJson,
      });
    } catch (err) {
      if (
        err?.errors?.length > 0 &&
        err?.errors[0]?.message &&
        err?.errors[0]?.message === "email must be unique"
      )
        return res.status(400).send({
          error: "This email account is already in use.",
        });

      res.status(500).send({
        error: "There is something wrong from the server",
      });
      console.log(err);
    }
  },
};
