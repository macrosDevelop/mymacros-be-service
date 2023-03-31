/**
 * Express router paths go here.
 */

import { Immutable } from "@src/other/types";

const Paths = {
  Base: "/api",
  Auth: {
    Base: "/auth",
    Login: "/login",
    Logout: "/logout",
  },
  Users: {
    Base: "/users",
    Get: "/all",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  Test: {
    Base: "/test",
    Get: "/get-test",
  },
  FeToBeToMicro: {
    Frontend: {
      Base: "/frontend",
      Post: "/erogation-recipe",
      Get: "/get-command-1",
    },
    Microcontroller: {
      Host: "http://192.168.0.225",
      Post: "/api/microcontroller/erogation-recipe",
      Get: "/",
    },
  },
};

// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
