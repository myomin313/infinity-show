// components/CheckoutForm.js
// import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  AddressElement,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import CountrySelect from './Country';

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';

const allowedBrands = ['visa', 'mastercard', 'amex'];

export default function CheckoutForm({clientSecret}) {
   const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


   const [name, setName] = useState('');
   const [address1, setAddress1] = useState('');
   const [address2, setAddress2] = useState('');
   const [postcode, setPostCode] = useState('');
   const [town, setTown] = useState('');
   const [country, setCountry] = useState('');
   const [userId, setUserId] = useState('');
   const [quantity, setQuantity] = useState('');
   const [totalPrice, setTotalPrice] = useState('');
   const [currency, setTotalCurrency] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
     const Quantity = localStorage.getItem('Quantity');
    if (Quantity) {
      setQuantity(Quantity);
    }

    const price = localStorage.getItem('totalPrice');
    if (price) {
      setTotalPrice(price);
    }
    const currency = localStorage.getItem('currency');
    if (currency) {
      setTotalCurrency(currency);
    }
  }, [])

    const handleCardChange = (event) => {
    if (event.brand && event.brand !== cardBrand) {
      setCardBrand(event.brand);

      if (!allowedBrands.includes(event.brand)) {
        setError(`Card type "${event.brand}" is not accepted. Please use Visa, MasterCard, or Amex.`);
      } else {
        setError('');
      }
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (!userId) {
      router.push('/login'); // redirect to /login
    }
    setIsLoading(true);
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
    card: elements.getElement(CardNumberElement),
    billing_details: {
      name,
      address: {
        line1: address1,
        line2: address2,
        postal_code: postcode,
        city: town,
        country: country,
      }
    }
  }
})
    if (error) {
      setMessage(error.message);
    } else if (paymentIntent.status === 'succeeded') {

     localStorage.removeItem('totalQty');
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('currency');
    localStorage.removeItem('serviceId');

      setMessage('🎉 Payment successful!');

         setTimeout(() => {
          router.push('/pricing'); // or your success page
        }, 3000); // wait 3 seconds

    }
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-18 space-y-4  text-white">
     <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
      Card Holder Name <span className='text-white'>*</span>
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          required/>
        </div>
      </div>
    </div>
    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
       Card Number <span className='text-white'>*</span>
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
       <CardNumberElement  options={{
  style: {
    base: {
      fontSize: '16px',
      color: '#ffffff', // white text
      '::placeholder': {
        color: '#ffffff', // optional: white placeholder
      },
    },
    invalid: {
      color: '#ff4d4f', // optional: red text for invalid inputs
    },
  },
  disabled: false,
  classes: {
    base: 'no-autofill',
  },
}}
   className="block min-w-0 grow py-1.5 pr-3 pl-1 text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>

        </div>
      </div>
    </div>


    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
       Card Expire <span className='text-white'>*</span>
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
       <CardExpiryElement options={{
  style: {
    base: {
      fontSize: '16px',
      color: '#ffffff', // white text
      '::placeholder': {
        color: '#ffffff', // optional: white placeholder
      },
    },
    invalid: {
      color: '#ff4d4f', // optional: red text for invalid inputs
    },
  },
  disabled: false,
  classes: {
    base: 'no-autofill',
  },
}} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
        </div>
      </div>
    </div>

    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
      CVC <span className='text-white'>*</span>
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
         <CardCvcElement options={{
  style: {
    base: {
      fontSize: '16px',
      color: '#ffffff', // white text
      '::placeholder': {
        color: '#ffffff', // optional: white placeholder
      },
    },
    invalid: {
      color: '#ff4d4f', // optional: red text for invalid inputs
    },
  },
  disabled: false,
  classes: {
    base: 'no-autofill',
  },
}} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
        </div>
      </div>
    </div>

   <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
        Address line 1 <span className='text-white'>*</span>
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
         <input
            id="address1"
            name="address1"
            type="text"
            onChange={(e) => setAddress1(e.target.value)}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          required/>
        </div>
      </div>
    </div>

      <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
        Address line 2 (optional)
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        
          <input
            id="price"
            name="price"
            type="text"
            onChange={(e) => setAddress2(e.target.value)}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          
        </div>
      </div>
    </div>

      <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
        Postcode <span className='text-white'>*</span>
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        
          <input
            id="price"
            name="price"
            type="text"
            onChange={(e) => setPostCode(e.target.value)}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          required/>
          
        </div>
      </div>
    </div>


     <div>
      <label htmlFor="town" className="block text-sm/6 font-medium text-white">
      Town / City <span className='text-white'>*</span>
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        
          <input
            id="town"
            name="town"
            type="text"
            onChange={(e) => setTown(e.target.value)}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          required/>
        </div>
      </div>
    </div>


    <div>
      <label htmlFor="price" className="block text-sm/6 font-medium text-white">
    Country <span className='text-white'>*</span>
      </label>
      <div className="mt-1">
        <div className="flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        
          <CountrySelect  country={country} setCountry={setCountry} />

        </div>
      </div>
    </div>

      <button
        type="submit"
        disabled={isLoading || !stripe}
        className="w-full bg-[#E2831A] text-white py-2 rounded"
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </button>
      
    <div>
       <p className='text-sm'>The data collected by here will be save to your account<br></br>
       Ost Infinity respects your privacy. Please visit <a href="/privacy-policy" className='text-orange-500'>Privacy Statement</a>
       </p>
    </div>
      {message && <p className="text-sm mt-2 text-green-600">{message}</p>}
    </form>
    
  )
}
