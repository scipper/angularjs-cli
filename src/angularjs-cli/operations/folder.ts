import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import {Config} from "../config";
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
   */
  generateCompleteFolderStructure(): void {
    Logger.log(`\n\x1b[36mGenerating folder structure... \x1b[0m`);
    this.generateSrcFolder();
  }

  /**
   *
   */
  generateSrcFolder(): void {
    let appFolder = path.join(process.cwd(), this.config.sourceFolder, this.config.appName);
    let scssFolder = path.join(process.cwd(), this.config.sourceFolder, 'assets', 'scss');
    let imagesFolder = path.join(process.cwd(), this.config.sourceFolder, 'assets', 'images');
    let testFolder = path.join(process.cwd(), 'test', this.config.appName);
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
      Logger.print(`\x1b[31mFailed to create directory ${folderName}\x1b[0m`);
      Logger.log(`\n\x1b[31m${error}\x1b[0m `);

      return;
    }

    Logger.log(` - source folder created at ${folderName}`);
  }

}