'use client'

export default function PrivacyPoliceSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#530570] via-[#0e2478] to-[#003d62]">
      <div className="container px-6 mx-auto md:px-16">
        <div className="w-full p-10 text-black bg-white border border-blue-200 rounded-lg shadow-md">
          <h2 className="mb-6 text-4xl font-bold">Privacy and Cookie Policy</h2>

          <p className="mb-6 font-semibold">
            We use cookies to personalise content and ads, to provide social media features and to analyses our traffic
          </p>

          <p className="mb-8 text-sm text-gray-800">
            We also share information about your use of our site with our social media, advertising and analytics partners who may
            combine it with other information that you've provided to them or that they've collected from your use of their services.
          </p>

          <h3 className="mb-4 font-semibold">Cookies Developer</h3>
          <p className="mb-8 text-sm text-gray-800">
            Preference cookies enable a website to remember information that changes the way
            the website behaves or looks, like your preferred language or the region that you are in.
          </p>

          <div className="mb-10 overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-800 border border-collapse">
              <thead className="text-xs font-semibold bg-white">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Provider</th>
                  <th className="px-4 py-2 border">Purpose</th>
                  <th className="px-4 py-2 border">Maximum Storage Duration</th>
                  <th className="px-4 py-2 border">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-2 border">CookieConsentBulkSetting-#</td>
                  <td className="px-4 py-2 border">Cookiebot</td>
                  <td className="px-4 py-2 border">Enables cookie consent across multiple websites</td>
                  <td className="px-4 py-2 border">Persistent</td>
                  <td className="px-4 py-2 border">HTML Local Storage</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2 border">@isScrollY</td>
                  <td className="px-4 py-2 border">Ost Infinity</td>
                  <td className="px-4 py-2 border">Pending</td>
                  <td className="px-4 py-2 border">Session</td>
                  <td className="px-4 py-2 border">HTML Local Storage</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mb-4 font-semibold">About Cookies</h3>
          <p className="mb-4 text-sm text-gray-800">
            Cookies are small text files that can be used by websites to make a user's experience more efficient.
          </p>
          <p className="mb-4 text-sm text-gray-800">
            The law states that we can store cookies on your device if they are strictly necessary for the operation of this site. For
            all other types of cookies we need your permission.
          </p>
          <p className="mb-4 text-sm text-gray-800">
            This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.
          </p>
          <p className="mb-4 text-sm text-gray-800">
            You can at any time change or withdraw your consent from the Cookie Declaration on our website.
          </p>
          <p className="mb-4 text-sm text-gray-800">
            Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.
          </p>
          <p className="mb-4 text-sm text-gray-800">
            Please state your consent ID and date when you contact us regarding your consent.
          </p>
          <p className="mb-10 text-sm text-gray-800">
            Your consent applies to the following domains: www.ostinfinity.net, insights.ostinfinity.net, www.ostinfinity.net
          </p>

          <h3 className="mb-4 font-semibold">1. Introduction</h3>
          <p className="mb-4 text-sm text-gray-800">
            The purpose of this Privacy Policy is for us to inform you how we collect, process, use and disclose your personal
            data. It covers the sites we operate and subdomains.
          </p>
          <p className="mb-4 text-sm text-gray-800">
            Unless we notify you otherwise, we operate as a data controller when processing your personal data.
          </p>
          <p className="mb-4 text-sm text-gray-800">
            Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
          </p>
          <p className="mb-10 text-sm text-gray-800">
            If you have any comments on this privacy policy, please email them to privacy@ostinfinity.net
          </p>

          <h3 className="mb-4 font-semibold">2. Who We Are</h3>
          <p className="mb-4 text-sm text-gray-800">Our company name is Ost Infinity GmbH.</p>
          <p className="mb-4 text-sm text-gray-800">Our site address is <a href="https://www.ostinfinity.net" className="text-blue-700 underline">https://www.ostinfinity.net</a></p>

          <p className="mb-4 text-sm text-gray-800">Our registered address is:</p>
          <ul className="pl-5 mb-4 text-sm text-gray-800 list-disc">
            <li className="mb-4">Taunusanlage 9-10<br/>60329 Frankfurt am Main<br/>Hessen<br/>Germany</li>
            {/* <li className="mb-4">Saigon Times Square<br/>22-36 Nguyen Hue<br/>Ho Chi Minh City<br/>Phuong Ben Nghe, Quan 1 71006<br/>Vietnam</li>
            <li>Exchange Square<br/>106 Corner Street 61<br/>Phnom Penh KH 12202<br/>Cambodia</li> */}
          </ul>

          <h3 className="mb-4 font-semibold">3. What We May Collect</h3>
          <p className="mb-4 text-sm text-gray-800">
            We may collect and process the following data about you:
          </p>
          <ul className="pl-5 mb-4 text-sm text-gray-800 list-disc">
            <li>Information you put into forms or surveys on our site at any time</li>
            <li>A record of any correspondence between us</li>
            <li>Details of transactions you carry out through our site</li>
            <li>Details of your visits to our site and the resources you use</li>
            <li>Information about your computer / device (e.g. your IP address, browser, operating system, etc.) for system administration and to report aggregate information to our advertisers.</li>
          </ul>

          <p className="mb-4 text-sm text-gray-800">
            We will ensure that your personal data is processed lawfully, fairly, and transparently, without adversely affecting your rights. We will only process your personal data if at least one of the following basis applies:
          </p>
          <ul className="pl-5 mb-4 text-sm text-gray-800 list-disc">
            <li>you have given consent to the processing of your personal data for one or more specific purposes</li>
            <li>processing is necessary for the performance of a contract to which you are a party or in order to take steps at the request of you prior to entering into a contract</li>
            <li>processing is necessary for compliance with a legal obligation to which we are subject</li>
            <li>processing is necessary for the purposes of the legitimate interests pursued by us or by a third party, except where such interests are overridden by the fundamental rights and freedoms of the data subject which require protection of personal data, in particular where the data subject is a child.</li>
          </ul>

          <h3 className="mb-4 font-semibold">Cookies</h3>
          <p className="mb-4 text-sm text-gray-800">
            We use cookies to distinguish users and improve our site. Please look at our Cookie Policy <a href="https://www.ostinfinity.net/cookie-policy" className="text-blue-700 underline">https://www.ostinfinity.net/cookie-policy</a> for more cookie information.
          </p>
          
          <div className="max-w-3xl bg-white rounded-md">
            <h4 className="mb-3 text-sm font-semibold">Cookie Policy</h4>
            <p className="mb-2 text-sm text-gray-800">
              This policy covers <a href="https://www.ostinfinity.net" className="text-blue-600 underline">https://www.ostinfinity.net</a> and is operated by Ost Infinity GmbH.
              Cookies are small text files that can be used by websites to make a user’s experience more efficient.
            </p>
            <p className="mb-2 text-sm text-gray-800">
              The law states that we can store cookies on your device if they are strictly necessary for the operation of this site.
              For all other types of cookies we need your permission.
            </p>
            <p className="mb-2 text-sm text-gray-800">
              This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages.
            </p>
            <p className="mb-2 text-sm text-gray-800">
              You can at any time change or withdraw your consent from the Cookie Declaration on our website.
            </p>
            <p className="mb-6 text-sm text-gray-800">
              Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#F98D11] text-white text-sm px-6 py-2 rounded-md shadow hover:opacity-90">Accept</button>
              <button className="px-4 py-2 text-sm border border-gray-400 rounded-md hover:bg-gray-100">Manage or Reject</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
