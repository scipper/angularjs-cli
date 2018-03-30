export abstract class Option {

  /**
   * @type {string}
   */
  protected shortName: string;

  /**
   * @type {string}
   */
  protected longName: string;

  /**
   * @type {string}
   */
  protected argument: string;

  /**
   * @type {boolean}
   */
  protected argumentNeeded: boolean;

  /**
   * @type {string[]}
   */
  protected availableArguments: string[];

  /**
   *
   */
  protected constructor() {
    this.shortName = '';
    this.longName = '';
    this.argument = '';
    this.argumentNeeded = false;
    this.availableArguments = [];
  }

  /**
   *
   * @returns {string}
   */
  getShortName(): string {
    return this.shortName;
  }

  /**
   *
   * @returns {string}
   */
  getLongName(): string {
    return this.longName;
  }

  /**
   *
   * @returns {boolean}
   */
  needsArgument(): boolean {
    return this.argumentNeeded;
  }

  /**
   *
   * @returns {string[]}
   */
  getAvailableArguments(): string[] {
    return this.availableArguments;
  }

  /**
   *
   * @param {string} argument
   */
  setArgument(argument: string): void {
    this.argument = argument;
  }

  /**
   *
   * @returns {string}
   */
  getArgument(): string {
    return this.argument;
  }

}
