import paypal from '@paypal/checkout-server-sdk'
import checkoutNodeJssdk from '@paypal/checkout-server-sdk'

const configureEnvironment = function () {
  return new checkoutNodeJssdk.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
}

const client = function () {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment())
}

export default async function Handler(req, res) {

  if(req.method != "POST")
    return res.status(404).json({success: false, message: "Not Found"})

  if(!req.body.orderID)
    return res.status(400).json({success: false, message: "Please Provide Order ID"})

  //Capture order to complete payment
  const { orderID } = req.body
  const PaypalClient = client()
  const request = new paypal.orders.OrdersCaptureRequest(orderID)
  request.requestBody({})
  const response = await PaypalClient.execute(request)
  if (!response) {
    return res.status(500).json({success: false, message: "Some Error Occured at backend"})
  }

  

  // Your Custom Code to Update Order Status
  // And Other stuff that is related to that order, like wallet
  // Here I am updateing the wallet and sending it back to frontend to update it on frontend
  
  console.log("REScapord: ", response)

  res.status(200).json({success: true, data: {}})
}