import {Option} from "../options/option";

export abstract class Command {

  /**
   * @type {string}
   */
  protected name: string;

  /**
   * @type {string}
   */
  protected configNeeded: boolean;

  /**
   * @type {boolean}
   */
  protected argumentNeeded: boolean;

  /**
   * @type {string}
   */
  protected argument: string;

  /**
   * @type {string[]}
   */
  protected availableArguments: string[];

  /**
   * @type {{}}
   */
  protected availableOptions: { [key: string]: Option };

  /**
   *
   */
  constructor() {
    this.name = '';
    this.argument = '';
    this.configNeeded = false;
    this.argumentNeeded = false;
    this.availableArguments = [];
    this.availableOptions = {};
  }

  /**
   *
   * @returns {string}
   */
  getName(): string {
    return this.name;
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
   * @returns {boolean}
   */
  needsConfig(): boolean {
    return this.configNeeded;
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

  /**
   *
   * @returns {string[]}
   */
  getAvailableArguments(): string[] {
    return this.availableArguments;
  }

  /**
   *
   * @returns {{}}
   */
  getAvailableOptions(): { [key: string]: Option } {
    return this.availableOptions;
  }


}
