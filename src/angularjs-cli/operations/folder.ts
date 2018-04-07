import * as mkdirp from 'mkdirp';
import * as path from 'path';
import {Config} from "../config";
import {Color} from "../tools/color";
import ErrnoException = NodeJS.ErrnoException;
import {Logger} from "../tools/logger";

export class Folder {

  /**
   * @type {Config}
   */
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
    mkdirp(appFolder, (error) => {
      this.errorCallback(appFolder, error);
    });
    mkdirp(scssFolder, (error) => {
      this.errorCallback(scssFolder, error);
    });
    mkdirp(imagesFolder, (error) => {
      this.errorCallback(imagesFolder, error);
    });
    mkdirp(testFolder, (error) => {
      this.errorCallback(testFolder, error);
    });
  }

  /**
   *
   * @param {string} folderName
   * @param {NodeJS.ErrnoException} error
   */
  private errorCallback(folderName: string, error: ErrnoException): void {
    if(error) {
      Logger.print(Color.red(`Failed to create directory ${folderName}`));
      Logger.log(Color.red(`\n${error}`));

      return;
    }

    Logger.log(` - source folder created at ${folderName}`);
  }

}
