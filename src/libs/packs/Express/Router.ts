import { Router as Create } from "express";

export { Create };

export type Instance = ReturnType<typeof Create>;

export type Handler = Parameters<Instance["all"]>[1];
