import {Logger} from "../tools/logger";
import * as fs from "fs";
import * as path from "path";
import {Folder} from "./folder";

export class Prompt {

  /**
   *
   * @param {boolean} createNewProject
   */
  newProject(createNewProject: boolean): void {
    const prompt = require("prompt-sync")({
      sigint: true
    });
    const complete = require("complete");

    const appName = prompt("What is the name of your app? (default: app): ", "app");
    const targetDialect = prompt("In which dialect should the project be created? [es2015/ts] (default: es2015): ", {
      autocomplete: complete(["es2015","ts"]),
      value: "es2015"
    });
    const sourceFolder = prompt("What is your source folder? (default: src): ", "src");

    Logger.log("\n\x1b[32mDone\x1b[0m");

    const config = {
      appName,
      targetDialect,
      sourceFolder
    };

    fs.writeFile(path.join(process.cwd(), "ngjs.json"), JSON.stringify(config, null, 2), (error) => {
      if(error) {
        Logger.print(`\n\x1b[31mAn error occured while creating ngjs.json\x1b[0m `);
        Logger.log(`\n\x1b[31m${error}\x1b[0m `);

        return;
      }

      Logger.log(`\n\x1b[36mngjs.json with the following content was created in ${process.cwd()}:\x1b[0m `);
      Logger.log(JSON.stringify(config, null, 2));

      const folder = new Folder(config);
      folder.generateCompleteFolderStructure(createNewProject);
    });
  }

}