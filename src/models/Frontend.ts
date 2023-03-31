/**
 * Variables
 */
const INVALID_CONSTRUCTOR_PARAM =
  "nameOrObj arg must a string or an object " +
  "with the appropriate user keys.";

/**
 * Types
 */
export interface IFeErogationRecipe {
  comando: string;
}

/**
 * Frontend command
 */
// class FECommand implements IFEPostCommand {
//   constructor(public comando: string) {}

//   /**
//    * Get command instance from object.
//    */
//   public static from(param: object): FECommand {
//     // Check is correct
//     if (!FECommand.isCorrectCommand(param)) {
//       throw new Error(INVALID_CONSTRUCTOR_PARAM);
//     }
//     // Get user instance
//     const p = param as IFEPostCommand;
//     return new FECommand(p.comando);
//   }

//   /**
//    * Is this an object which contains all the user keys.
//    */
//   public static isCorrectCommand(this: void, arg: unknown): boolean {
//     console.log("arg", arg);
//     return !!arg && typeof arg === "object" && "comando" in arg;
//   }
// }

// export
// export default FECommand;
