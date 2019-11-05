if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../components/navigation?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/carFans/carFans?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/onlineCar/onlineCar?hash=ff520d37551adf436f27013170133e5dd6ebf7e9');
require('../../pages/index/index?hash=ff520d37551adf436f27013170133e5dd6ebf7e9');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}