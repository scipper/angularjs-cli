export class AngularjsCli {

  constructor(cliParams) {
    this.cliParams = cliParams;
  }

  showArguments() {
    console.log('cliParams',this.cliParams);
  }

}