export class Logger {

  /**
   * @type {boolean}
   */
  static verbose: boolean = false;

  /**
   *
   * @param message
   */
  static print(...message: any[]): void {
    console.log.apply(console, message);
  }

  /**
   *
   * @param message
   */
  static log(...message: any[]): void {
    if(!Logger.verbose) {
      return;
    }

    console.log.apply(console, message);
  }

}
