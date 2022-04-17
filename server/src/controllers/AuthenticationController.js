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

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.status(403).send({
          error: "The login information was incorrect",
        });
      }

      const isPasswordValid = await user.comparePassword(
        password
      );
      if (!isPasswordValid) {
        return res.status(403).send({
          error: "The login information was incorrect",
        });
      }

      const userJson = user.toJSON();
      userJson.password = null;

      res.send({
        user: userJson,
      });
    } catch (err) {
      res.status(500).send({
        error: "An error has occurred trying to log in",
      });
    }
  },
};
