import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import axios from "axios";

import { IReq, IRes } from "./types/express/misc";

const getCommand = async (req: IReq<{ command: number }>, res: IRes) => {
  const { command } = req.body;

  try {
    // invio della richiesta al microcontrollore
    const response = await axios.post(
      "http://localhost:8080/api/microcontroller/command-1",
      { command }
    );
    console.log("response", response.status);
    // return res.status(HttpStatusCodes.NOT_FOUND).end();
    // Restituzione della risposta del microcontrollore al frontend
    res.status(200).json({ messaggio: "Comando inviato con successo" });
  } catch (error) {
    // console.log("error", error);
    res.status(HttpStatusCodes.NOT_FOUND);
  }
};

// **** Export default **** //

export default {
  getCommand,
} as const;
