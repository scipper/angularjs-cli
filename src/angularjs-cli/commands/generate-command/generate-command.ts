import {HelpOption} from "../../options/help.option";
import {Command} from "../command";

export class GenerateCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    const helpOption = new HelpOption();

    this.name = 'generate';
    this.configNeeded = true;
    this.argumentNeeded = true;
    this.availableOptions = {
      [helpOption.getLongName()]: helpOption
    };
    this.availableArguments = [
      "component",
      "module"
    ];
  }

}
