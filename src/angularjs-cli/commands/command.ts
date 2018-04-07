import {OptionsType} from "../options/options.type";
import {Option} from "../options/option";

export abstract class Command {

  protected name: string;
  protected configNeeded: boolean;
  protected argumentNeeded: boolean;
  protected argument: string;
  protected availableArguments: string[];
  protected availableOptions: OptionsType;

  /**
   *
   */
  protected constructor() {
    this.name = "";
    this.argument = "";
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
  getAvailableOptions(): OptionsType {
    return this.availableOptions;
  }


}
