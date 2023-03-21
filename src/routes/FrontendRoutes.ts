import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import axios from "axios";

import { IReq, IRes } from "./types/express/misc";

const getCommand = async (_: IReq, res: IRes) => {
  try {
    // invio della richiesta al microcontrollore
    const response = await axios({
      method: "get",
      url: "http://192.168.0.225/ledon",
      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
      },
      // data:{"comando":"ciao"}
    });
    console.log("response", response.status);
    console.log("response.data :>> ", response.data?.comando);

    if (response.status === HttpStatusCodes.OK) {
      return res.status(HttpStatusCodes.OK).json(response.data);
    }
    // const bytes = new Uint8Array(response.data)
    // console.log('bytes :>> ', bytes);
    // Restituzione della risposta del microcontrollore al frontend
    // res.status(200).json({ messaggio: "Comando inviato con successo" });
  } catch (error) {
    console.log("error", error);

    // res.status(HttpStatusCodes.NOT_FOUND);
  }
};

const postCommand = async (req: IReq<{ command: number }>, res: IRes) => {
  const { command } = req.body;
  console.log("command :>> ", command);

  try {
    // invio della richiesta al microcontrollore
    const response = await axios({
      method: "post",
      url: "http://192.168.0.225/ledoff",
      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
        "User-Agent": "",
        "Accept-Encoding ": "",
        Host: "",
      },
      data: { comando: "suca sto cazz" },
    });
    console.log("response", response.status);
    console.log("response.data :>> ", response.data);

    if (response.status === HttpStatusCodes.OK) {
      return res.status(response.status).json(response.data);
    }
  } catch (error) {
    // console.log("error", error);
    res.status(HttpStatusCodes.NOT_FOUND);
  }
};

// **** Export default **** //

export default {
  getCommand,
  postCommand,
} as const;
