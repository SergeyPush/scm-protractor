// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,

  baseUrl: 'http://google.com.ua',
  seleniumAddress:'http://google.com.ua',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: false } }));

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: './test/reports/'
   }));

  }



};
