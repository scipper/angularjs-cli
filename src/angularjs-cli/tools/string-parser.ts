export class StringParser {

  static KEBAB_REGEX = /[A-Z]/g;
  static CAMEL_REGEX = /-[a-z]/g;
  static PASCAL_REGEX = /\b[a-z]/g;
  static PASCAL_TO_CAMEL_REGEX = /\b[A-Z]/g;

  /**
   *
   * @param {string} word
   * @returns {string}
   */
  static toKebabCase(word: string) {
    let newWord = word.replace(StringParser.KEBAB_REGEX, (match) => {
      return "-" + match.toLowerCase();
    });

    if(newWord.charAt(0) === "-") {
      newWord = newWord.slice(1);
    }

    return newWord;
  }

  /**
   *
   * @param {string} word
   * @returns {string}
   */
  static toCamelCase(word: string) {
    let newWord = word.replace(StringParser.CAMEL_REGEX, (match) => {
      return match.slice(1).toUpperCase();
    });

    return newWord.replace(StringParser.PASCAL_TO_CAMEL_REGEX, (match) => {
      return match.toLowerCase();
    });
  }

  /**
   *
   * @param {string} word
   * @returns {string}
   */
  static toPascalCase(word: string) {
    let newWord = word.replace(StringParser.CAMEL_REGEX, (match) => {
      return match.slice(1).toUpperCase();
    });

    return newWord.replace(StringParser.PASCAL_REGEX, (match) => {
      return match.toUpperCase();
    });
  }

}
