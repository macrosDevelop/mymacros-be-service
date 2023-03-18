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
  Frontend: {
    Base: "/frontend",
    Get: "/get-command-1",
    Post:"/post-command"
  },
  Microcontroller: {
    Base: "/microcontroller",
    Get: "/command-1",
  },
};

// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
