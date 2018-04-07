import {Color} from "../tools/color";
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

    Logger.log(Color.green(`Done`));

    const config = {
      appName,
      targetDialect,
      sourceFolder
    };

    fs.writeFile(path.join(process.cwd(), "ngjs.json"), JSON.stringify(config, null, 2), (error) => {
      if(error) {
        Logger.print(Color.red(`An error occured while creating ngjs.json`));
        Logger.log(Color.red(`\n${error}`));

        return;
      }

      Logger.log(Color.cyan(`ngjs.json with the following content was created in ${process.cwd()}:`));
      Logger.log(JSON.stringify(config, null, 2));

      const folder = new Folder(config);
      folder.generateCompleteFolderStructure(createNewProject);
    });
  }

}
