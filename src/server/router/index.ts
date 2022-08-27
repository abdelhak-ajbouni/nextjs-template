import superjson from "superjson";

import { createRouter } from "utils/context";
import { usersRouter } from "./users";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("users.", usersRouter)

// export type definition of API
export type AppRouter = typeof appRouter;
