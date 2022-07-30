import { createRouter } from "../../utils/context";
import { z } from "zod";

export const usersRouter = createRouter()
  .query("getMe", {
    input: z
      .object({
        userId: z.string(),
      }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.user.findUnique({
        where: {
          id: input.userId
        }
      });
    },
  })
  .query("getAllUsers", {
    input: z
      .object({
        page: z.number(),
        perPage: z.number()
      }),
    async resolve({ ctx, input }) {
      const skip = input?.page * input?.perPage
      const take = input?.perPage
      return await ctx.prisma.user.findMany({
        skip,
        take
      });
    },
  });
