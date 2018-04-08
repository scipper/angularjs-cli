import * as fs from "fs";
import * as path from "path";
import {Config} from "../config";
import {IndexHtml} from "../templates/index.html";
import {Color} from "../tools/color";
import {Logger} from "../tools/logger";
import {Folder} from "./folder";

export class File {

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
  generateDefaults() {
    Logger.log(Color.cyan(`Generating default files...`));
    const indexHtml = IndexHtml(this.config.appName);
    this.writeFile(indexHtml, "index.html");
  }

  /**
   *
   * @param {string} file
   * @param {string} fileName
   */
  protected writeFile(file: string, fileName: string) {
    try {
      const filePath = path.join(process.cwd(), this.config.appName, fileName);
      fs.writeFileSync(filePath, file);

      Logger.log(` - file created at ${filePath}`);
    } catch(error) {
      Logger.print(Color.red(`An error occured while creating ${fileName}`));
      Logger.log(Color.red(`\n${error}`));
    }
  }

}
