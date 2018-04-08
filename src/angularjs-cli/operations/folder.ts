import * as mkdirp from 'mkdirp';
import * as path from 'path';
import {Config} from "../config";
import {Color} from "../tools/color";
import ErrnoException = NodeJS.ErrnoException;
import {Logger} from "../tools/logger";

export class Folder {

  protected config: Config;

  /**
   *
   * @param {Config} config
   */
  constructor(config: Config) {
    this.config = config;
  }

  /**
   *
   * @param {boolean} createNewProject
   */
  generateCompleteFolderStructure(createNewProject: boolean = true): void {
    Logger.log(Color.cyan(`Generating folder structure...`));
    this.generateSrcFolder(createNewProject);
  }

  /**
   *
   * @param {boolean} createNewProject
   */
  generateSrcFolder(createNewProject: boolean): void {
    let srcFolder = process.cwd();
    if(!createNewProject) {
      srcFolder = path.join(process.cwd(), this.config.appName);
    }

    const appFolder = path.join(srcFolder, this.config.sourceFolder, 'app');
    const scssFolder = path.join(srcFolder, this.config.sourceFolder, 'assets', 'scss');
    const imagesFolder = path.join(srcFolder, this.config.sourceFolder, 'assets', 'images');
    const testFolder = path.join(srcFolder, 'test', this.config.appName);

    this.mkdir(appFolder);
    this.mkdir(scssFolder);
    this.mkdir(imagesFolder);
    this.mkdir(testFolder);
  }

  /**
   *
   * @param {string} folder
   */
  mkdir(folder: string) {
    try {
      mkdirp.sync(folder);

      Logger.log(` - source folder created at ${folder}`);
    } catch(error) {
      Logger.print(Color.red(`Failed to create directory ${folder}`));
      Logger.log(Color.red(`\n${error}`));
    }
  }

}
