// Setup the development testing environment

if (Meteor.isServer) {
  try {
    Payments.provider.config({
      environment: 'sandbox'
      , merchantId: 'dj56479kd7fyyxt3'
      , publicKey: '57crswmmpqb2jsrm'
      , privateKey: '04be1fe3152e8ff939d9bd9106f1c235'
    });
  } catch (e) {
    Tinytest.add('Braintree Payments - config', function (test) {
      throw e;
    });
  }
}