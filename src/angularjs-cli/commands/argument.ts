import {OptionsType} from "../options/options.type";

export class Argument {

  protected name: string;
  protected needsValue: boolean;
  protected value: string;
  protected availableOptions: OptionsType;

  /**
   *
   */
  constructor() {
    this.needsValue = false;
    this.name = "";
    this.value = "";
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
   * @returns {boolean}
   */
  valueNeeded() {
    return this.needsValue;
  }

  /**
   *
   * @param {string} value
   */
  setValue(value: string) {
    this.value = value;
  }

  /**
   *
   * @returns {string}
   */
  getValue() {
    return this.value;
  }

  /**
   *
   * @returns {OptionsType}
   */
  getAvailableOptions() {
    return this.availableOptions;
  }

}
