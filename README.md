Warning
===================
This package is not complete, not compatibable with the latest cwohlman:payments package, and not activly maintained.

Bulletproof Payments using Braintree
====================

This package adds support for braintree payments to the cwohlman:payments package.

On The Client
====================

Generate convert payment information into a token to send to the server:

```javascript
// Collect the card/bank info from the customer
var creditCard = {
    number: '1234123412341234'
    , cvv: '123'
    // etc.
}
// Call the provider method for creating a card token
Payments.provider.createCardToken(creditCard, function (error, token) {
    // Store the token on your server
    Meteor.call('addPaymentMethod', token);
});
```

On The Server
====================

Convert a payment method token into an id you can reuse:

```javascript
Meteor.methods({
    'addPaymentMethod': function (token) {
        // XXX implement your own validation checks here
        var paymentMethodId = Payments.createPaymentMethod(
            Meteor.userId(), token);
    }
});
```

Use a stored payment method to create a transaction:

```javascript
// choose a payment method
var paymentMethodId = Payments.paymentMethods.findOne({
    userId: Meteor.userId() // we don't recomend getting the userId like this
                            // in production
});
var amount = Orders.findOne({
    userId: Meteor.userId()
    , paid: false
}).amount;

Payments.createTransaction({
    userId: Meteor.userId()
    , amount: amount
    , paymentMethodId: paymentMethodId
});
```

Full Docs
===================

See the docs for cwohlman:payments for complete documentation of the payments system.


