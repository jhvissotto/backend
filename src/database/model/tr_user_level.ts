export type TR_user_level = {
  _id: number;
  fk_email: string;
  fk_level: number;
  createdAt: Date;
  updatedAt: Date;
};

export const tr_user_level = {
  _id: "_id",
  fk_email: "fk_email",
  fk_level: "fk_level",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};
