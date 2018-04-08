import {HelpOption} from "../../options/help.option";
import {Command} from "../command";
import {ComponentArgument} from "./component.argument";

export class GenerateCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    const helpOption = new HelpOption();
    const componentArgument = new ComponentArgument();

    this.name = 'generate';
    this.configNeeded = true;
    this.argumentNeeded = true;
    this.availableOptions = {
      [helpOption.getLongName()]: helpOption
    };
    this.availableArguments = {
      [componentArgument.getName()]: componentArgument
    };
  }

}
