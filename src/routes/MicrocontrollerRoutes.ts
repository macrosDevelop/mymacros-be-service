import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import axios from "axios";

import { IReq, IRes } from "./types/express/misc";

const getCommand1 = async (req: IReq<{ command: number }>, res: IRes) => {
  const { command } = req.body;
  console.log("command", command);
  res.json({ status: command });
};

// **** Export default **** //

export default {
  getCommand1,
} as const;
