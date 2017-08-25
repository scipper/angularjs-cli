import {Command} from "../command";

export class GenerateCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'generate';
    this.configNeeded = true;
    this.argumentNeeded = true;
    this.availableArguments = [
      "component",
      "module"
    ];
  }

}