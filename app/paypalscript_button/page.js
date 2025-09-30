'use client'

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'


export default function paypalButtonPage() {
    const {amount} = {
      amount : "100$"
    }

    const paypalCreateOrder = async () => {
    try {
      let response = await axios.post('/api/createorder', {
        user_id: "sb-en8wr45876028@personal.example.com",
        order_price: 100
      })
      return response.data.order.order_id
    } catch (err) {
      // Your custom code to show an error like showing a toast:
      // toast.error('Some Error Occured')
      return null
    }
    }

    const paypalCaptureOrder = async orderID => {
    try {
      let response = await axios.post('/api/captureorder', {
        orderID
      })
      if (response.data.success) {
        // Order is successful
        // Your custom code

        // Like showing a success toast:
        // toast.success('Amount Added to Wallet')

        // And/Or Adding Balance to Redux Wallet
        // dispatch(setWalletBalance({ balance: response.data.data.wallet.balance }))
      }
    } catch (err) {
      // Order is not successful
      // Your custom code

      // Like showing an error toast
      // toast.error('Some Error Occured')
    }
  }
  

    return (

   <PayPalScriptProvider
        options={{
            'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            currency: 'USD',
            intent: 'capture'
        }} >

        <PayPalButtons
            amount = {amount}
            onSuccess = {(details, data) => {
              console.log(details)

            }}
             />
    </PayPalScriptProvider>
   
)
}