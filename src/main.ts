import {AngularjsCli} from './angularjs-cli/angularjs-cli';

let ngjs = new AngularjsCli(process.argv);
ngjs.readConfig();
ngjs.prepare();
ngjs.process();
ngjs.finish();