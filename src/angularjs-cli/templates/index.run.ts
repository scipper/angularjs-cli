/**
 *
 * @returns {string}
 * @constructor
 */
export const IndexRunTs = () => {

  return `/**
 * @ngInject
 *
 * @param $urlRouter
 * @constructor
 */
export function IndexRun($urlRouter: any) {

	$urlRouter.listen();
	$urlRouter.sync();

}`;
  
};
