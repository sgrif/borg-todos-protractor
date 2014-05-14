exports.config = {
  // The address of a running selenium server.
  chromeOnly: true,

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*_spec.js'
  ],


  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  }
};
