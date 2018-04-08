import {HelpOption} from "../../options/help.option";
import {Argument} from "../argument";

export class ComponentArgument extends Argument {

  /**
   *
   */
  constructor() {
    super();

    const helpOption = new HelpOption();

    this.name = "component";
    this.needsValue = true;
    this.availableOptions = {
      [helpOption.getLongName()]: helpOption
    };
  }

}
