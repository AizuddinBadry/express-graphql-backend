const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  // Generate referral id & token before insert into database
  async $beforeInsert() {
    // Generate random referral code
    const referralCode = Math.random().toString(36).substr(2, 5);
    // Generate random token
    const token = Math.random().toString(36).substr(2, 5);
    this.token = token;
    this.referral_id = referralCode;
  }

  static async generateNewToken(id) {
    // Generate random token
    const token = Math.random().toString(36).substr(2, 5);
    return await this.query().findById(id).update({ token });
  }
}

module.exports = User;
