import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import axios from "axios";

import { IReq, IRes } from "./types/express/misc";

const getCommand = async (_: IReq, res: IRes) => {
  // const options= {
  //   method:"get",
  //   url:"http://192.168.0.225/",
  //   responseType:"arraybuffer",
  //   headers: {
  //     connection:"keep-alive", 
      
  //   }
  // }
  
  try {
    // invio della richiesta al microcontrollore
    const response = await axios({
      method:"get",
      url:"http://192.168.0.225/",
      responseType:"arraybuffer",
      headers: {
        connection:"keep-alive", 
        "Content-Type":"text/plain"    
      }
    });
    console.log("response", response);
    const bytes = new Uint8Array(response.data)
    console.log('bytes :>> ', bytes);
    // Restituzione della risposta del microcontrollore al frontend
    res.status(200).json({ messaggio: "Comando inviato con successo" });
  } catch (error) {
    console.log("error", error);
   
   
    // res.status(HttpStatusCodes.NOT_FOUND);
  }
};

const postCommand = async (req: IReq<{ command: number }>, res: IRes) => {
  const { command } = req.body;

  try {
    // invio della richiesta al microcontrollore
    const response = await axios.post(
      "http://192.168.0.225/",{command}
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
  postCommand
} as const;
