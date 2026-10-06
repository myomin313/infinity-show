'use client';

import React, { useEffect, useState } from 'react';

export default function Captcha() {
  const [captchaSvg, setCaptchaSvg] = useState('');
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');



  const fetchCaptcha = async () => {
    const res = await fetch('/api/captcha');
    const data = await res.json();
    setCaptchaSvg(data.data);
    setUserInput('');
    setMessage('');
  };

  const verifyCaptcha = async () => {
    const res = await fetch('/api/captcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userInput }),
    });
    const data = await res.json();
    setMessage(data.success ? '✅ Verified!' : '❌ Incorrect, try again.');
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  return (
     <>
            <div className="md:col-span-1">
                <div className="flex items-center justify-center h-full p-2 text-center bg-white rounded">
                   <div dangerouslySetInnerHTML={{ __html: captchaSvg }} className="block mb-1 text-sm text-white/90" />
                </div>
                <button onClick={fetchCaptcha} style={{ marginLeft: '10px' }}>Refresh</button>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="captcha" className="block mb-1 text-sm text-white/90">
                  Enter CAPTCHA*
                </label>
                <input
                value={userInput}
                 onChange={(e) => setUserInput(e.target.value)}
                  id="captcha"
                  type="text"
                  required
                  placeholder='Enter captcha'
                  className="w-full px-4 py-2 text-white border rounded-lg bg-blue-900/30 border-white/30 focus:outline-none focus:border-orange-400"
                />

                 <div style={{ marginTop: '10px' }}>
                  <button onClick={verifyCaptcha}>Verify</button><br></br>
       </div>
      <p>{message}</p>
              </div>
              </>

  );
}
