import {Option} from "./option";

export class HelpOption extends Option {

  /**
   *
   */
  constructor() {
    super();

    this.shortName = 'h';
    this.longName = 'help';
    this.argument = '';
  }

}
