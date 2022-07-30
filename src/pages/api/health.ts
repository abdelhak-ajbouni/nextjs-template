import type { NextApiRequest, NextApiResponse } from "next";

const health = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    healthy: true,
  });
};

export default health;
