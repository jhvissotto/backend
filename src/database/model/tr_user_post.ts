export type TR_user_post = {
  _id: number;
  fk_email: string;
  fk_slug: string;
  createdAt: Date;
  updatedAt: Date;
};

export const tr_user_post = {
  _id: "_id",
  fk_email: "fk_email",
  fk_slug: "fk_slug",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};
