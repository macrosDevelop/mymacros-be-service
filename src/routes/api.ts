import { Router } from "express";
import jetValidator from "jet-validator";

import adminMw from "./middleware/adminMw";
import Paths from "./constants/Paths";
import User from "@src/models/User";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";
import TestRoutes from "./TestRoutes";
import MicrocontrollerRoutes from "./MicrocontrollerRoutes";
import FrontendRoutes from "./FrontendRoutes";

// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();

// **** Setup **** //

const authRouter = Router();

// Login user
authRouter.post(
  Paths.Auth.Login,
  validate("email", "password"),
  AuthRoutes.login
);

// Logout user
authRouter.get(Paths.Auth.Logout, AuthRoutes.logout);

// Add AuthRouter
apiRouter.use(Paths.Auth.Base, authRouter);

// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(["user", User.isUser]),
  UserRoutes.add
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(["user", User.isUser]),
  UserRoutes.update
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(["id", "number", "params"]),
  UserRoutes.delete
);

// Add UserRouter
apiRouter.use(Paths.Users.Base, adminMw, userRouter);

/***   TEST API  ***/

const testRouter = Router();

testRouter.get(Paths.Test.Get, TestRoutes.getTest);

// Add TestRouter
apiRouter.use(Paths.Test.Base, testRouter);

/***   TEST API  ***/

const feRouter = Router();

feRouter.get(Paths.Frontend.Get, FrontendRoutes.getCommand);

feRouter.post(Paths.Frontend.Post, FrontendRoutes.postCommand);


// Add feRouter
apiRouter.use(Paths.Frontend.Base, feRouter);

/***   TEST API  ***/

const mcRouter = Router();

mcRouter.post(Paths.Microcontroller.Get, MicrocontrollerRoutes.getCommand1);

// Add mcRouter
apiRouter.use(Paths.Microcontroller.Base, mcRouter);

// **** Export default **** //

export default apiRouter;
