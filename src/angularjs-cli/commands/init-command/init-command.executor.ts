import {Executor} from "../executor";
import {Command} from "../command";
import * as fs from 'fs';
import * as path from 'path';
import {Config} from "../../config";
import {Folder} from "../../operations/folder";
import {Logger} from "../../tools/logger";
import {Option} from "../../options/option";

export class InitCommandExecutor extends Executor {

  /**
   *
   * @param {Command} command
   * @param {Config} config
   * @param {{}} options
   */
  constructor(command: Command, config: Config, options: { [key: string]: Option }) {
    super(command, config, options);
  }

  /**
   *
   */
  execute() {
    if(this.config !== null) {
      Logger.print(`\x1b[36mProject already initialised\x1b[0m`);

      return true;
    }

    if(this.options['verbose']) {
      Logger.verbose = true;
    }

    Logger.log(`\x1b[36mInitialising project... \x1b[0m`);

    let prompt = require('prompt-sync')({
      sigint: true
    });
    let complete = require('complete');

    let appName = prompt('What is the name of your app? (default: app): ', 'app');
    let targetDialect = prompt('In which dialect should the project be created? [es2015/ts] (default: es2015): ', {
      autocomplete: complete(['es2015','ts']),
      value: 'es2015'
    });
    let sourceFolder = prompt('What is your source folder? (default: src): ', 'src');

    Logger.log('\n\x1b[32mDone\x1b[0m');

    let config = {
      appName: appName,
      targetDialect: targetDialect,
      sourceFolder: sourceFolder
    };

    fs.writeFile(path.join(process.cwd(), 'ngjs.json'), JSON.stringify(config, null, 2), (error) => {
      if(error) {
        Logger.print(`\n\x1b[31mAn error occured while creating ngjs.json\x1b[0m `);
        Logger.log(`\n\x1b[31m${error}\x1b[0m `);

        return;
      }

      Logger.log(`\n\x1b[36mngjs.json with the following content was created in ${process.cwd()}:\x1b[0m `);
      Logger.log(JSON.stringify(config, null, 2));

      let folder = new Folder(config);
      folder.generateCompleteFolderStructure();
    });
  }

}