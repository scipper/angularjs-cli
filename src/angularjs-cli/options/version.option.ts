import {Option} from "./option";

export class VersionOption extends Option {

  /**
   *
   */
  constructor() {
    super();

    this.shortName = 'v';
    this.longName = 'version';
    this.argument = '';
  }

}