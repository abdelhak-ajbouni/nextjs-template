// api/users/{userId}
import type { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession as getServerSession } from "next-auth";
import { prisma } from "server/db/client";

import { authOptions as nextAuthOptions } from "../auth/[...nextauth]";
import { getFromQuery } from "utils"

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, nextAuthOptions);
  const userId = getFromQuery(req.query.userId);

  if (!session) {
    return res.status(401).json({ success: false, message: 'Unauthorized session' });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

export default getUser;
