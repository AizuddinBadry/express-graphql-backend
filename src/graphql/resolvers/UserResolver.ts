import { IResolvers } from "@graphql-tools/utils";

import { MutationRegisterArgs, QueryLoginArgs } from "../../generated/graphql";

const login = async (args: QueryLoginArgs) => {
  return {
    token: "123456789",
  };
};

const register = async (args: MutationRegisterArgs) => {
  return {
    token: "123456789",
  };
};

export const UserResolvers: IResolvers = {
  Query: {
    login,
  },
  Mutation: { register },
};
