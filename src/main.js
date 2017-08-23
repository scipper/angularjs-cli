import yargs from 'yargs';
import {AngularjsCli} from './angularjs-cli/angularjs-cli';

let angularjsCli = new AngularjsCli(yargs.args);
angularjsCli.showArguments();