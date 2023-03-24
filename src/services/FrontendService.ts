import axios from "axios";

// status
import HttpStatusCodes from "@src/constants/HttpStatusCodes";

// error
import { RouteError } from "@src/other/classes";

// interface
import { IFEPostCommand } from "@src/models/Frontend";
import {
  IMicroGETResponse,
  IMicroPOSTResponse,
} from "@src/models/Microcontroller";

// **** Variables **** //

// **** Functions **** //

async function getCommand(): Promise<IMicroGETResponse> {
  let data: IMicroGETResponse;
  try {
    // invio della richiesta al microcontrollore
    const response = await axios({
      method: "get",
      //   url: "http://192.168.0.225/ledon",
      //   url: "https://run.mocky.io/v3/581e4ed7-57a9-4fd4-b9f0-8dad280a419a", // 200 OK NO response
      //   url: "https://run.mocky.io/v3/b2bec09f-04dd-4f8b-88a4-7953b276ec20", // 200 OK response
      url: "https://run.mocky.io/v3/c6e3ef8c-de95-4cf9-8caf-4840cf9e297b", // 400 Bad request
      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
      },
    });
    // elaborazione risposta dal micro
    console.log("response.data :>> ", response.data);
    if (!response.data) {
      throw new RouteError(HttpStatusCodes.BAD_REQUEST, "Empty data response");
    }
    data = {
      data: response.data,
      status: response.status,
    };
    // invio risposta al Frontend
    return data;
  } catch (error) {
    console.log("error.response", error.response);
    throw new RouteError(error.response.status, error.response.data);
  }
}

async function postCommand(body: IFEPostCommand): Promise<IMicroPOSTResponse> {
  console.log("body", body);
  try {
    // invio della richiesta al microcontrollore
    const response = await axios({
      method: "post",
      url: "https://run.mocky.io/v3/581e4ed7-57a9-4fd4-b9f0-8dad280a419a", // 200 OK
      //   url: "http://192.168.0.225/ledoff",
      headers: {
        connection: "keep-alive",
        "Content-Type": "application/json",
      },
      data: body,
    });
    return {
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    throw new RouteError(error.response.status, error.response.data);
  }
}

// **** Export default **** //

export default { getCommand, postCommand } as const;
