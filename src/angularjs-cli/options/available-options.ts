import {VersionOption} from "./version.option";
import {Option} from "./option";
import {ModuleOption} from "./module.option";
import {VerboseOption} from "./verbose.option";

let versionOption = new VersionOption();
let moduleOption = new ModuleOption();
let verboseOption = new VerboseOption();

/**
 *
 * @type {{}}
 */
export const AvailableOptions: { [key: string] : Option } = {
  [`-${versionOption.getShortName()}`]: versionOption,
  [`--${versionOption.getLongName()}`]: versionOption,
  [`-${moduleOption.getShortName()}`]: moduleOption,
  [`--${moduleOption.getLongName()}`]: moduleOption,
  [`--${verboseOption.getLongName()}`]: verboseOption
};