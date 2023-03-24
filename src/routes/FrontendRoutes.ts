// interface
import { IFEPostCommand } from "@src/models/Frontend";
import FrontendService from "@src/services/FrontendService";
import { IReq, IRes } from "./types/express/misc";

const getCommand = async (_: IReq, res: IRes) => {
  const response = await FrontendService.getCommand();
  return res.status(response.status).json(response.data);
};

const postCommand = async (req: IReq<IFEPostCommand>, res: IRes) => {
  const body = req.body;
  const response = await FrontendService.postCommand(body);
  return res.status(response.status)?.json(response.data);
};

// **** Export default **** //

export default {
  getCommand,
  postCommand,
} as const;
