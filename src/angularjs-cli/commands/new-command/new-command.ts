import {Command} from "../command";
import {VersionOption} from "../../options/version.option";

export class NewCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'new';
    this.argumentNeeded = true;

    const versionOption = new VersionOption();

    this.availableOptions = {
      [versionOption.getLongName()]: versionOption
    };
  }

}
