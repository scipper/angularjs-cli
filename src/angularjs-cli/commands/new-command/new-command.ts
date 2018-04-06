import {Command} from "../command";

export class NewCommand extends Command {

  /**
   *
   */
  constructor() {
    super();

    this.name = 'new';
    this.argumentNeeded = true;
  }

}
