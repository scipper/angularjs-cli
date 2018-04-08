/**
 *
 * @param {string} rootModuleName
 * @returns {string}
 * @constructor
 */
export const IndexRouteTs = (rootModuleName: string) => {

  return `import {StateProvider, UrlRouterProvider} from "@uirouter/angularjs";

/**
 * @ngInject
 *
 * @param {StateProvider} $stateProvider
 * @param {UrlRouterProvider} $urlRouterProvider
 * @constructor
 */
export function IndexRoute($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {
	
	$stateProvider.state("${rootModuleName}", {
		url: "/",
		views: {
			"mainView": {
				component: "index"
			}
		}
	});
	
	$urlRouterProvider.deferIntercept();
	$urlRouterProvider.otherwise("/");
	
}
`;

};
