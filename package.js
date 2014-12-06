Package.describe({
  name: 'cwohlman:braintree-payments',
  summary: 'Braintree payments for meteor',
  version: '0.1.0',
  git: 'https://github.com/cwohlman/meteor-braintree-payments.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('cwohlman:payments@0.1.0');

  Npm.depends({
    'braintree': '1.21.0'
  });

  api.imply('cwohlman:payments');

  api.addFiles('provider/config.js');
  api.addFiles('provider/client.html', ['client']);
  api.addFiles('provider/generateClientToken.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cwohlman:braintree-payments');

  api.addFiles('tests/config.js');
});
