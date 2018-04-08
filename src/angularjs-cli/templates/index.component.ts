/**
 *
 * @returns {string}
 * @constructor
 */
export const IndexComponentTs = () => {

  return `import {IComponentOptions, IOnInit} from "angular";
import {IndexService} from "./index.service";

export class Index implements IOnInit {

  protected IndexService: IndexService;

  /**
   * @ngInject
   * 
   * @param {IndexService} IndexService
   */
  constructor(IndexService: IndexService) {
    this.IndexService = IndexService;
  }

  /**
   *
   */
  $onInit() {
  }

}

export const IndexComponent: IComponentOptions = {
  controller: Index,
  templateUrl: require("./index.component.html")
};
`;

};
