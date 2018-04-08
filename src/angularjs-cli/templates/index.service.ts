/**
 *
 * @returns {string}
 * @constructor
 */
export const IndexServiceTs = () => {

  return `import {IHttpService} from "angular";

export class IndexService {
	
	protected $http: IHttpService;
	
	/**
	 * 
   * @param {angular.IHttpService} $http
   */
	constructor($http: IHttpService) {
		this.$http = $http;
	}
	
	/**
	 * 
   * @returns {*}
   */
	doSomething() {
		const request = {
			method: "GET",
			url: "api/url"
		};
		
		return this.$http(request);
	}
	
}`;

};
