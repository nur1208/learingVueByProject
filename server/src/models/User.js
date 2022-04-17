const bcrypt = require("bcrypt");

// eslint-disable-next-line no-unused-vars
function hashPassword(user, _) {
  const SALT_FACTOR = 8;

  if (!user.changed("password")) {
    return;
  }

  return bcrypt
    .genSalt(SALT_FACTOR)
    .then((salt) => bcrypt.hash(user.password, salt, null))
    .then((hash) => {
      user.setDataValue("password", hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
        beforeSave: hashPassword,
      },
    }
  );

  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  // User.associate = function (models) {};

  return User;
};
