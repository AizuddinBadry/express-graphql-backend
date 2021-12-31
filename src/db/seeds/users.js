const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Password hashing
      const passwordHash = bcrypt.hashSync("Pa$$w0rd", 10);
      // Generate random referral code
      const referralCode = Math.random().toString(36).substr(2, 5);
      // Generate random token
      const token = Math.random().toString(36).substr(2, 5);
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Aizuddin",
          email: "agent1@gmail.com",
          password: passwordHash,
          referral_id: referralCode,
          token,
        },
      ]);
    });
};
