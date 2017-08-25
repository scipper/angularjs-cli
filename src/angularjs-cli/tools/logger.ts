export class Logger {

  /**
   * @type {boolean}
   */
  static verbose: boolean = false;

  /**
   *
   * @param message
   */
  static print(...message: Array<any>): void {
    console.log.apply(console, message);
  }

  /**
   *
   * @param message
   */
  static log(...message: Array<any>): void {
    if(!Logger.verbose) {
      return;
    }

    console.log.apply(console, message);
  }

}