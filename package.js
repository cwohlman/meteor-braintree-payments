Package.describe({
  name: 'cwohlman:braintree-payments',
  summary: 'Braintree payments for meteor',
  version: '0.1.0',
  git: 'https://github.com/cwohlman/meteor-braintree-payments.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('braintree-payments.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cwohlman:braintree-payments');
  api.addFiles('braintree-payments-tests.js');
});
