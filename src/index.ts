import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import EnvVars from "@src/constants/EnvVars";
import server from "./server";

// **** Run **** //

const DOMAIN = "http://localhost:";
const SERVER_START_MSG = `Express server started on port: ${EnvVars.Port.toString()}`;
const SERVER_LINK_MSG = `Express server link: ${DOMAIN}${EnvVars.Port.toString()}`;

server.listen(EnvVars.Port, () => {
  logger.info(SERVER_START_MSG);
  logger.imp(SERVER_LINK_MSG);
});
