import * as fs from "fs";
import * as path from "path";
import {Config} from "../config";
import {IndexComponentTs} from "../templates/index.component";
import {IndexComponentHtml} from "../templates/index.component.html";
import {IndexHtml} from "../templates/index.html";
import {IndexModuleTs} from "../templates/index.module";
import {IndexRouteTs} from "../templates/index.route";
import {IndexRunTs} from "../templates/index.run";
import {IndexScss} from "../templates/index.scss";
import {IndexServiceTs} from "../templates/index.service";
import {PackageJson} from "../templates/package.json";
import {Color} from "../tools/color";
import {Logger} from "../tools/logger";

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
    const indexHtml = IndexHtml(this.config.rootModuleName);
    const indexModuleTs = IndexModuleTs(this.config.rootModuleName);
    const indexRouteTs = IndexRouteTs(this.config.rootModuleName);
    const indexRunTs = IndexRunTs();
    const indexServiceTs = IndexServiceTs();
    const indexComponentTs = IndexComponentTs();
    const indexComponentHtml = IndexComponentHtml();
    const indexScss = IndexScss();
    const packageJson = PackageJson(this.config.appName, this.config.description, this.config.author, this.config.sourceFolder);
    this.writeFile(this.config.sourceFolder, indexHtml, "index.html");
    this.writeFile(path.join(this.config.sourceFolder, "app"), indexModuleTs, "index.module.ts");
    this.writeFile(path.join(this.config.sourceFolder, "app"), indexRouteTs, "index.route.ts");
    this.writeFile(path.join(this.config.sourceFolder, "app"), indexRunTs, "index.run.ts");
    this.writeFile(path.join(this.config.sourceFolder, "app"), indexServiceTs, "index.service.ts");
    this.writeFile(path.join(this.config.sourceFolder, "app"), indexComponentTs, "index.component.ts");
    this.writeFile(path.join(this.config.sourceFolder, "app"), indexComponentHtml, "index.component.html");
    this.writeFile(path.join(this.config.sourceFolder, "app"), indexScss, "index.scss");
    this.writeFile("", packageJson, "package.json");
  }

  /**
   *
   * @param {string} file
   * @param {string} directory
   * @param {string} fileName
   */
  protected writeFile(directory: string, file: string, fileName: string) {
    try {
      const filePath = path.join(process.cwd(), this.config.appName, directory, fileName);
      fs.writeFileSync(filePath, file);

      Logger.log(` - file created at ${filePath}`);
    } catch(error) {
      Logger.print(Color.red(`An error occured while creating ${fileName}`));
      Logger.log(Color.red(`\n${error}`));
    }
  }

}
