import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {

  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HwRx8Lv7RCDc0o3jnF4bjPbpj9POufEDs60pkNvCF610Fs054W8cshpt2ptHy2WGHa70XF8cgL3t1DXCj1dmnWY003lMA1Hw9';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(res => {
          console.log(res);
          alert("payment successful");
      })
      .catch(err => {
          console.log('Error:',err);
          alert("payment failed");
      });
  }

  return(
  <StripeCheckout
    label='Pay Now'
    name ='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />
  );
}

export default StripeCheckoutButton;