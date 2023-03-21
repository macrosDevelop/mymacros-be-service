import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import { IReq, IRes } from "./types/express/misc";

async function getTest(_: IReq, res: IRes) {
  return res.status(HttpStatusCodes.OK).json({ status: "SUCA" });
}

// **** Export default **** //

export default {
  getTest,
} as const;
