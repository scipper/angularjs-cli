import {OptionsType} from "../options/options.type";
import {ArgumentsType} from "./arguments.type";

export abstract class Command {

  protected name: string;
  protected description: string;
  protected configNeeded: boolean;
  protected argumentNeeded: boolean;
  protected argument: string;
  protected availableArguments: ArgumentsType;
  protected availableOptions: OptionsType;

  /**
   *
   */
  protected constructor() {
    this.name = "";
    this.description = "";
    this.argument = "";
    this.configNeeded = false;
    this.argumentNeeded = false;
    this.availableArguments = {};
    this.availableOptions = {};
  }

  /**
   *
   * @returns {string}
   */
  getName() {
    return this.name;
  }

  /**
   *
   * @returns {string}
   */
  getDescription() {
    return this.description;
  }

  /**
   *
   * @returns {boolean}
   */
  needsArgument() {
    return this.argumentNeeded;
  }

  /**
   *
   * @returns {boolean}
   */
  needsConfig() {
    return this.configNeeded;
  }

  /**
   *
   * @param {string} argument
   */
  setArgument(argument: string) {
    this.argument = argument;
  }

  /**
   *
   * @returns {string}
   */
  getArgument() {
    return this.argument;
  }

  /**
   *
   * @returns {ArgumentsType}
   */
  getAvailableArguments() {
    return this.availableArguments;
  }

  /**
   *
   * @returns {OptionsType}
   */
  getAvailableOptions() {
    return this.availableOptions;
  }


}
