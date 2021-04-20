import Joi = require("joi");

export interface User {
  id: string;
  groups: string[];
}

export function userIdentities({ id, groups }: User): string[] {
  return [id].concat(groups);
}

export const idSchema = Joi.string();
