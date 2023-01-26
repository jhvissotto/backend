export type TR_post_level = {
  _id: number;
  fk_slug: string;
  fk_level: number;
  createdAt: Date;
  updatedAt: Date;
};

export const tr_post_level = {
  _id: "_id",
  fk_slug: "fk_slug",
  fk_level: "fk_level",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};
