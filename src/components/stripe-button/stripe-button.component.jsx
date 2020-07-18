import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H0elNEHrwFqcehnK7BQbNqRHUetRZsxh22C0eQW5FsrrgV1cPtMvSxI3ma4Z5mkb1uYFWCMLEhFyWVe4fMgNViQ00Kk9AtPjn';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="JH Clothing Store"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price} CAD`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      currency="CAD"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
