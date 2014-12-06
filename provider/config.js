if (Meteor.isServer) {
  braintree = Npm.require('braintree');

  Payments.provider = {
    name: 'braintree'
    , config: function (config) {
      config.environment = config.environment === 'production' ?
        braintree.Environment.Production :
        braintree.Environment.Sandbox;
      
      gateway = braintree.connect(config);
    }
  };
}