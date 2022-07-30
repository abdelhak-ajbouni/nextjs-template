// src/server/db/client.ts
import { PrismaClient } from "@prisma/client";

import configs from "configs"

const { mode, debug } = configs

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: debug ? ['query', 'info', 'warn', 'error'] : ['info', 'warn', 'error']
  });

if (mode !== "production") {
  global.prisma = prisma;
}
