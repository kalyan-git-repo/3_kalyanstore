    // components/PayPalButtonWrapper.js
'use client'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
    export default function PayPalButtonWrapper() {
      const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
      };

      return (
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: 100,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                window.location.href = process.env.NEXT_PUBLIC_BASE_URL + '/success';
                console.log(details)
                alert(`Transaction completed by ${details.payer.name.given_name}`);
              });
            }}
          />
        </PayPalScriptProvider>
      );
    };
    