// pages/checkout.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import PAYMENT_METHODS from "@/data/footer/payment-methods.json"
import Image from 'next/image'

import { API_URL,Stripe_PUBLIC_KEY,token } from './api/endpoint';
import axios from 'axios';

const stripePromise = loadStripe(Stripe_PUBLIC_KEY);

export default function CheckoutPage() {
  const router = useRouter();
  //const { price } = router.query;
  const [clientSecret, setClientSecret] = useState();

    const [userId, setUserId] = useState('');
   const [quantity, setQuantity] = useState('');
   const [totalPrice, setTotalPrice] = useState('');
   const [currency, setTotalCurrency] = useState('');
   const [serviceId, setServiceId] = useState('');

  useEffect(() => {

       const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
     const quantity = localStorage.getItem('totalQty');
    if (quantity) {
      setQuantity(quantity);
    }

    const price = localStorage.getItem('totalPrice');
    
    if (price) {
      setTotalPrice(price);
    }
    const currency = localStorage.getItem('currency');
    if (currency) {
      setTotalCurrency(currency);
    }

     const serviceId = localStorage.getItem('serviceId');
    if (serviceId) {
      setServiceId(serviceId);
    }
     console.log("totalPrice",totalPrice);
    const fetchClientSecret = async () => {
      try {
      //   const response = await axios.post(`${API_URL}/payment/create-payment-intent`, {
      //     userId:userId,
      //     amount:Math.round(totalPrice * 100),
      //     currency:'eur',
      //     quantity:quantity,
      //     serviceId:serviceId,
      //  });

       const response = await axios.post(
  `${API_URL}/payment/create-payment-intent`,
  {
    userId: userId,
    amount: totalPrice * 100,
    currency: 'eur',
    quantity: quantity,
    serviceId: serviceId,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`, // ✅ attach JWT here
    },
  }
);

       console.log("response",response.data.clientSecret);
         const secret = response.data.clientSecret;
        setClientSecret(secret);
      } catch (error) {
        console.error("Error fetching client secret:", error);
      }
    };
    fetchClientSecret();
  }, [userId,totalPrice,quantity,currency,serviceId]);



    // if (!price) return;
    // fetch(`${API_URL}/payment/create-payment-intent`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ amount: parseInt(price) }),
    // })
    //   .then(res => res.json())
    //   .then(data => setClientSecret(data.clientSecret));
 

//   const appearance = { theme: 'stripe' };
//  const loader = "auto";

//  const appearance = {
//   theme: 'stripe',
//   variables: {
//     fontFamily: 'Inter, sans-serif',
//     fontSizeBase: '16px',
//     borderRadius: '8px',
//     colorPrimary: '#0d6efd',
//   },
// };

 const loader = "auto";
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#0570de",
      // colorBackground: "#000",
      colorText: "#30313d",
      colorDanger: "#df1b41",
      spacingUnit: "2px",
      borderRadius: "4px",
    },
    rules: {
      ".Label": {
        color: "#000",
        fontWeight: "bold",
        fontSize: "14px",
        marginBottom: "0.5rem",
        marginTop: "1rem",
      },
      ".Input": {
        borderColor: "#2f334c",
        color: "#000",
        fontSize: "14px",
      },
      ".Input:focus": {
        borderColor: "#0570de",
      },
    },
  };


//   const appearance = {
//     theme: "stripe",
//     variables: {
//       colorPrimary: "#0570de",
//       colorBackground: "#000",
//       colorText: "#30313d",
//       colorDanger: "#df1b41",
//       spacingUnit: "2px",
//       borderRadius: "4px",
//     },
//     rules: {
//       ".Label": {
//         color: "#ffffff",
//         fontWeight: "bold",
//         fontSize: "14px",
//         marginBottom: "0.5rem",
//         marginTop: "1rem",
//       },
//       ".Input": {
//         borderColor: "#2f334c",
//         color: "#fff",
//         fontSize: "14px",
//       },
//       ".Input:focus": {
//         borderColor: "#0570de",
//       },
//     },
//   };
  console.log("clientSecret",clientSecret);
  const options = { clientSecret, appearance,loader};

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#1D1A65] to-[#0A3D9C]">
      <div className="bg-white p-8  w-full max-w-xl bg-gradient-to-r from-[#1D1A65] to-[#0A3D9C]">
          
          <div>
                      <h4 className="mb-4 font-semibold text-white">
                        Payment Methods We Support
                      </h4>
                      <div className="flex items-center space-x-6 mt-3">
                        {PAYMENT_METHODS.map((method) => (
                          <Image
                            key={method.name}
                            src={method.src}
                            alt={method.name}
                            className={`w-auto h-${method.height}`}
                          />
                        ))}
                      </div>
                    </div>

        {/* <h2 className="text-xl font-bold mb-4 text-red-900">Complete Your Payment</h2> */}
       {clientSecret && ( 
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm clientSecret={clientSecret}/>
          </Elements>
        )} 
        
      </div>
    </div>
  );
}
