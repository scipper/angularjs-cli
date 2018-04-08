/**
 *
 * @param {string} rootModuleName
 * @returns {string}
 * @constructor
 */
export const IndexModuleTs = (rootModuleName: string) => {

  return `import "./index.scss";

import {module} from "angular";
import uiRouter from "@uirouter/angularjs";
import {IndexComponent} from "./index.component";
import {IndexRoute} from "./index.route";
import {IndexRun} from "./index.run";
import {IndexService} from "./index.service";

const ngModule = module("${rootModuleName}", [
	uiRouter
]);

ngModule
	.config(IndexRoute)
	.run(IndexRun)
	.service("IndexService", IndexService)
	.component("index", IndexComponent);
`;

};
