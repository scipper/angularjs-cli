import {Command} from "../command";
import {VersionOption} from "../../options/version.option";
import {VerboseOption} from "../../options/verbose.option";

export class InitCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'init';

    let verboseOption = new VerboseOption();

    this.availableOptions = {
      [verboseOption.getLongName()]: verboseOption
    };
  }

}