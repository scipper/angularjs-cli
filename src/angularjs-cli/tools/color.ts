export class Color {

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  static red(text: string) {
    return `\x1b[31m${text}\x1b[0m`;
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  static green(text: string) {
    return `\x1b[32m${text}\x1b[0m`;
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  static yellow(text: string) {
    return `\x1b[33m${text}\x1b[0m`;
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  static blue(text: string) {
    return `\x1b[34m${text}\x1b[0m`;
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  static magenta(text: string) {
    return `\x1b[35m${text}\x1b[0m`;
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  static cyan(text: string) {
    return `\x1b[36m${text}\x1b[0m`;
  }

  /**
   *
   * @param {string} text
   * @returns {string}
   */
  static white(text: string) {
    return `\x1b[37m${text}\x1b[0m`;
  }

}
