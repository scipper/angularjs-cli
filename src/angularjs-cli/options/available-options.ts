import {VersionOption} from "./version.option";
import {Option} from "./option";
import {ModuleOption} from "./module.option";
import {VerboseOption} from "./verbose.option";

const versionOption = new VersionOption();
const moduleOption = new ModuleOption();
const verboseOption = new VerboseOption();

/**
 *
 * @type {{}}
 */
export const AvailableOptions: { [key: string]: Option } = {
  [`-${versionOption.getShortName()}`]: versionOption,
  [`--${versionOption.getLongName()}`]: versionOption,
  [`-${moduleOption.getShortName()}`]: moduleOption,
  [`--${moduleOption.getLongName()}`]: moduleOption,
  [`--${verboseOption.getLongName()}`]: verboseOption
};
