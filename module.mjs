// @ts-check
import { module } from "@prisma/composer";
import portfolioService from "./service.mjs";

export default module("project-1", ({ provision }) => {
  provision(portfolioService);
});
