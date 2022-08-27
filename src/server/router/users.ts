import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createRouter } from "../../utils/context";

export const usersRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    // Any queries or mutations after this middleware will
    // raise an error unless there is a current session
    if (!ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next();
  })
  .query("getMe", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findUnique({
        where: {
          email: ctx?.session?.user?.email as string
        }
      });
    },
  })
  .query("getSingleUser", {
    input: z
      .object({
        id: z.string()
      }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.findUnique({
        where: {
          id: input.id
        }
      });
    },
  })
  .query("getAllUsers", {
    input: z
      .object({
        page: z.number(),
        perPage: z.number()
      })
      .optional()
      .default({ page: 0, perPage: 10 }),
    async resolve({ ctx, input }) {
      const skip = input?.page * input?.perPage
      const take = input?.perPage
      return await ctx.prisma.user.findMany({
        skip,
        take
      });
    },
  })

