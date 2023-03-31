// interface
import { IFeErogationRecipe } from "@src/models/Frontend";
import FrontendService from "@src/services/FrontendService";
import { IReq, IRes } from "./types/express/misc";

const getCommand = async (_: IReq, res: IRes) => {
  const response = await FrontendService.getCommand();
  return res.status(response.status).json(response.data);
};

const erogationRecipe = async (req: IReq<IFeErogationRecipe>, res: IRes) => {
  const body = req.body; // to obtain recipe from frontend
  const response = await FrontendService.erogationRecipe(body);
  return res.status(response.status)?.json(response.data);
};

// **** Export default **** //

export default {
  getCommand,
  erogationRecipe,
} as const;
