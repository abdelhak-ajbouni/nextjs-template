// src/pages/api/trpc/[trpc].ts
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "server/router";
import { createContext } from "utils/context";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
