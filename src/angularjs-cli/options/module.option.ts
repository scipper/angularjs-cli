import {Option} from "./option";

export class ModuleOption extends Option {

  /**
   *
   */
  constructor() {
    super();

    this.shortName = 'm';
    this.longName = 'module';
    this.argument = '';
    this.argumentNeeded = true;
  }

}