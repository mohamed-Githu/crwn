import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const key = 'pk_test_51HBFGVFAQsVeONRS5zRMShf8cbHeH6byumFxLGqChLwMR5F2bViMYCaivzyrBCxsxKsqN9tPCeM3unFhKZ1HLnDa001rK5Nz4a'

  const onToken = token => {
    console.log(token);
    alert('Successful Payment');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your Total Is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={key}
    />
  );
}

export default StripeCheckoutButton;
