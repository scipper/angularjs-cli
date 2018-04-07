import {HelpOption} from "./help.option";
import {OptionsType} from "./options.type";
import {VersionOption} from "./version.option";
import {ModuleOption} from "./module.option";
import {VerboseOption} from "./verbose.option";

const versionOption = new VersionOption();
const moduleOption = new ModuleOption();
const verboseOption = new VerboseOption();
const helpOption = new HelpOption();

/**
 *
 * @type {{}}
 */
export const AvailableOptions: OptionsType = {
  [`-${versionOption.getShortName()}`]: versionOption,
  [`--${versionOption.getLongName()}`]: versionOption,
  [`-${moduleOption.getShortName()}`]: moduleOption,
  [`--${moduleOption.getLongName()}`]: moduleOption,
  [`-${helpOption.getShortName()}`]: helpOption,
  [`--${helpOption.getLongName()}`]: helpOption,
  [`--${verboseOption.getLongName()}`]: verboseOption
};
