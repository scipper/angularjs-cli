import {Command} from "../command";
import {VerboseOption} from "../../options/verbose.option";

export class InitCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'init';

    const verboseOption = new VerboseOption();

    this.availableOptions = {
      [verboseOption.getLongName()]: verboseOption
    };
  }

}
