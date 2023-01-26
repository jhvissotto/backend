export type TD_user = {
  _id: number;
  pk_email: string;
  name: string;
  passHash: string;
  createdAt: Date;
  updatedAt: Date;
};

export const td_user = {
  _id: "_id",
  pk_email: "pk_email",
  name: "name",
  passHash: "passHash",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
