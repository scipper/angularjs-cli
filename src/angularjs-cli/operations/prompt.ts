import {AngularjsCli} from "../angularjs-cli";
import {Color} from "../tools/color";
import {Logger} from "../tools/logger";
import * as fs from "fs";
import * as path from "path";
import {StringParser} from "../tools/string-parser";
import {File} from "./file";
import {Folder} from "./folder";
import {exec} from "child_process";

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
    const description = prompt("Do you want to describe your project?: ");
    const targetDialect = prompt("In which dialect should the project be created? [es2015/ts] (default: es2015): ", {
      autocomplete: complete(["es2015", "ts"]),
      value: "es2015"
    });
    const sourceFolder = prompt("What is your source folder? (default: src): ", "src");
    const author = prompt("What is the authors name?: ");

    Logger.log(Color.green(`Done`));

    const config = {
      appName,
      description,
      author,
      rootModuleName: StringParser.toCamelCase(appName),
      targetDialect,
      sourceFolder
    };

    try {
      fs.writeFileSync(path.join(process.cwd(), "ngjs.json"), JSON.stringify(config, null, 2));

      Logger.log(Color.cyan(`ngjs.json with the following content was created in ${process.cwd()}:`));
      Logger.log(JSON.stringify(config, null, 2));

      const folder = new Folder(config);
      folder.generateCompleteFolderStructure(createNewProject);

      const file = new File(config);
      file.generateDefaults();

      const installDependencies = prompt(`Should ${AngularjsCli.NAME} run 'npm install' for you, to install all dependencies? [y/n] (default: y): `, {
        autocomplete: complete(["y", "n"]),
        value: "y"
      });

      if(installDependencies === "y") {
        exec(`cd ${config.appName} && npm install`, (error, stdout, stderr) => {
          if(error) {
            Logger.print(Color.red(`An error occured while running 'npm install'`));
            Logger.log(Color.red(`\n${error}`));

            return;
          }

          Logger.log(Color.red(`\n${stdout}`));
          Logger.log(Color.red(`\n${stderr}`));
        });
      }
    } catch(error) {
      Logger.print(Color.red(`An error occured while creating ngjs.json`));
      Logger.log(Color.red(`\n${error}`));
    }
  }

}
