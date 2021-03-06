import { IResolvers } from "@graphql-tools/utils";

import { MutationRegisterArgs, QueryLoginArgs } from "../../generated/graphql";

const bcrypt = require("bcrypt");

const User = require("../models/user");

const login = async (_: void, args: QueryLoginArgs) => {
  const { email, password } = args;
  try {
    return User.transaction(async (trx) => {
      const user = await User.query(trx).findOne({ email });

      const result = await bcrypt.compare(password, user.password);

      if (result) {
        await User.generateNewToken(user.id);
        return user;
      } else {
        throw new Error("Wrong password or email!");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

const register = async (_: void, args: MutationRegisterArgs) => {
  const { name, email, password } = args;
  try {
    return User.transaction(async (trx) => {
      const user = await User.query(trx).insert({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      if (user) {
        return user;
      } else {
        throw new Error("Wrong password or email!");
      }
    });
  } catch (e) {
    console.log(e);
  }
};

export const UserResolvers: IResolvers = {
  Query: {
    login,
  },
  Mutation: { register },
};
