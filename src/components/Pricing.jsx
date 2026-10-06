import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import {API_URL,Stripe_PUBLIC_KEY,token} from '../pages/api/endpoint'

// import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import CheckoutButton from './CheckoutButton'
import { useRouter } from 'next/router';


const stripePromise = loadStripe(Stripe_PUBLIC_KEY);


export default function PricingSection() {
  const [plan, setPlan] = useState('hosted');
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // const [totalprice, setTotalPrice] = useState();



  const toggleOptions = [
    { label: 'Customer Self Zone Hosted', value: 'hosted' },
    { label: 'Ost Infinity SaaS', value: 'saas'   },
  ]

  const baseFeatures = [
    'Accelerate and scale up your threat detection & response',
    'Automate threat detection & response',
    'AI powered detection dynamic workloads',
    'Data visualisation for entire IT landscape',
    'Scalable platform hybrid',
    'Full Customization',
    'Remote Monitor',
    'Monthly Report',
    '24/7 – Priority Support',
  ]

  const recommendedFeatures = [
    'Threat detection & monitoring entire infrastructure',
    'Deploy in hybrid environment',
    'Automated registration for any loads',
    'Push and pull agents',
    'Data loss protection',
    'Visualisation infrastructure',
    'Scalable platform hybrid',
    'Full Customization',
    'Remote Monitor',
    'Weekly and Monthly Report',
    '24/7 – Priority Support',
  ]

  const cards = [
    {
      id: 1,
      subtitle: 'Managed Threat detection & Response',
      price: '€750',
      features: baseFeatures,
      accent: 'text-[#199AE2]',
      btnColor: 'bg-[#199AE2]',
      icon: '/assets/images/product.svg',
    },
    {
      id: 2,
      subtitle:
        'Managed Threat detection & Response  Network Performance Observability',
      price: '€1,416',
      features: recommendedFeatures,
      accent: 'text-[#1BCC02]',
      btnColor: 'bg-[#1BCC02]',
      recommended: true,
      icon: '/assets/images/services.svg',
    },
    {
      id: 3,
      subtitle: 'Network Performance Observability',
      price: '€750',
      features: baseFeatures,
      accent: 'text-[#F98D11]',
      btnColor: 'bg-[#F98D11]',
      icon: '/assets/images/price.svg',
    },
    {
      id: 1,
      subtitle: 'Managed Threat detection & Response',
      price: '€375',
      features: baseFeatures,
      accent: 'text-[#199AE2]',
      btnColor: 'bg-[#199AE2]',
      icon: '/assets/images/product.svg',
    },
    {
      id: 2,
      subtitle:
        'Managed Threat detection & Response  Network Performance Observability',
      price: '€583',
      features: recommendedFeatures,
      accent: 'text-[#1BCC02]',
      btnColor: 'bg-[#1BCC02]',
      recommended: true,
      icon: '/assets/images/services.svg',
    },
    {
      id: 3,
      subtitle: 'Network Performance Observability',
      price: '€375',
      features: baseFeatures,
      accent: 'text-[#F98D11]',
      btnColor: 'bg-[#F98D11]',
      icon: '/assets/images/price.svg',
    },
  ]

  const CheckIcon = () => (
    <div className="relative flex-shrink-0 w-5 h-5">
        <Image
            src="/assets/images/icons/check-circle.png"
            alt="Check"
            fill
            style={{ objectFit: 'contain' }}
        />
    </div>
  )

 useEffect(() => {
    const fetchProducts = async () => {
      try {
      const res = await fetch(`${API_URL}/service`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}` 
        },
      });

         
       const json = await res.json();
       console.log('product', json);
        setData(json.result);
      //  console.log('product', res.result);
      } catch (err) {
        console.error('Failed to fetch product:', err.message);
      }
    };

    fetchProducts();
  }, []);




useEffect(() => {
  if (typeof window !== 'undefined') {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }
}, []);




  // const handleQuantityChange = (e,currency,price) => {
  //   console.log("price",price);
  //   console.log("currency",currency);
  //   console.log("e.target.value",e.target.value);
  //   const qty = parseInt(e.target.value) || 1;
  //   setQuantity(qty);
  //   setTotal(qty * price);
  //   console.log("total",total);
  // };

  const handleQuantityChange = ( currency, price,id) => {
  // const qty = parseInt(e.target.value) || 1;
  console.log("quantity pppp",quantity);
  const totalPrice = quantity * price;
  console.log("total pppp",totalPrice);
  // setQuantity(qty);
  // setTotalPrice(totalPrice);
  // localStorage.setItem('totalQty', quantity);
  // localStorage.setItem('totalPrice', totalPrice);
  // localStorage.setItem('currency', currency);
  // localStorage.setItem('serviceId', id);

   if (typeof window !== 'undefined') {
    localStorage.setItem('totalQty', quantity);
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('currency', currency);
    localStorage.setItem('serviceId', id);
  }



  if (userId) {
    
      router.push(`/checkout`);
   } else {
       router.push('/auth/login');
   }

};



  return (
    <section className="container px-4 py-12 mx-auto">
        <div className="flex justify-center mb-8">
            <span className='p-1.5 rounded-xl bg-white/8 my-5'>
                {toggleOptions.map((opt) => (
                    <button
                    key={opt.value}
                    onClick={() => setPlan(opt.value)}
                    className={`px-4 py-1.5 rounded-xl text-sm font-medium ${
                        plan === opt.value
                        ? 'bg-gradient-to-r from-[#12145E] to-[#0448AD] text-white border-white'
                        : ' border-white/40 hover:text-white hover:border-white'
                    }`}
                    >
                    {opt.label}
                    </button>
                ))}
            </span>
        </div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {data ? (
            data.map((card) => (
        // {data.map((card) => (
          <div
            key={card._id}
            className="relative p-px  bg-gradient-to-r from-[#F98D11] to-[#199AE2]"
          >
            <div className="bg-[#111865] rounded-2xl p-6 flex flex-col h-full text-left">
              {card.recommended && (
                <div className="absolute -top-3 -right-3 mt-3 mr-3 bg-gradient-to-r from-[#F98D11] to-[#199AE2] text-xs uppercase font-medium px-5 py-2 rounded-bl-md rounded-tr-2xl">
                  Recommended
                </div>
              )}

              <h3 className={`text-3xl font-semibold my-5 text-[${card.color}]`}>
               {card.title}
              </h3>
              <p className="mb-3 text-sm">
                {card.subtitle}
              </p>
              
              <hr className="my-4 border-t border-white/80" />

              <h4 className="mb-4 text-sm font-medium">
                Some of the features you get
              </h4>
              <ul className="flex-1 space-y-2 text-sm text-white/80">
                {card.features.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckIcon />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
                
              <div className='my-4 text-white/80'>  
                <span>and much more</span>
                <hr className="my-4 border-t border-white/80" />
              </div>

              <div className="flex flex-col">
                <span className={`text-3xl font-bold ${card.accent}`}>
                    {card.currency}{card.price}
                </span>
                <span className="mt-1 text-sm text-white/80">
                    per month, billed annually
                </span>
               </div>

              <div className="flex items-center justify-center mt-6 space-x-3">
                <label className="text-sm text-white/80">Licence</label>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  // onChange={handleQuantityChange(e,card.currency,card.price)}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-16 bg-[#111865] border border-white/20 rounded px-2 py-1 text-white text-sm appearance-auto"
                />
              </div>

              <button
  onClick={() => {
      handleQuantityChange(card.currency, card.price,card._id)
  }}
  className={`mt-4 w-full py-3 rounded-xl font-semibold text-white transition bg-[${card.color}] hover:opacity-90`}
>
  Buy Now 
</button>

              {/* <button
  onClick={() => {
    //setSelectedPrice(parseFloat(card.price.replace('€', '')) * 100); 
    const amountInCents = parseFloat(card.price.replace(card.currency, '')) * 100;// Convert to cents
    router.push(`/checkout?price=${amountInCents}`);
  }}
  className={`mt-4 w-full py-3 rounded-xl font-semibold text-white transition bg-[${card.color}] hover:opacity-90`}
>
  Buy Now 
</button> */}

              {/* <button
                className={`mt-4 w-full py-3 rounded-xl font-semibold text-white transition ${
                  card.btnColor
                } hover:opacity-90`}
              >
                Buy Now
              </button> */}
              {/* {showCheckout && (
               <Elements stripe={stripePromise}>
                  <CheckoutButton amount={selectedPrice} onClose={() => setShowCheckout(false)} />
               </Elements>
             )} */}
              <p className="mt-3 text-sm text-center text-white/80">or</p>
                <div className="flex items-center justify-center mt-2 space-x-2">
                <button
                    className="px-5 py-1.5 bg-[#F98D11] text-white text-sm rounded-md 
                            hover:bg-[#ea8d24] transition"
                >
                    Download
                </button>
                <span className="text-white/80">and</span>
                <button className="text-sm text-white underline transition hover:text-white/90">
                    Start free trial
                </button>
                </div>
            </div>
          </div>
        ))
      ): (
       <p>Loading...</p>
      )}
      </div>
    </section>
  )
}
