import { useState,useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  RefreshCw,
  X,
  Trash2,
  Check,
  Copy 

} from 'lucide-react';
export default function AdminMailPanel() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

         
const enableConsoleAccess = () => {
  //  onConfirm();
    setIsOpen(false);
    setIsSuccessOpen(true);
};



  return <div className={`min-h-[calc(100vh-4rem)]  bg-white   p-6`}>
    <p className="text-sm text-gray-800">IAM {`>`} Users {`>`} your.name@ostinfinity.net</p>
    <h3 className="text-2xl my-2 text-gray-800">your.name@ostinfinity.net</h3>
    <div className="p-6 border-gray-200 border rounded-lg mt-6">
      <h3 className="text-gray-800 text-lg">Summary</h3>
      <div className="flex justify-between items-start mt-6">
        <div className="flex-1 border-r border-gray-400">
          <p className="text-gray-400">Arn</p>
          <p className="text-sm text-gray-400">arn:ost:vixa:123456788:user/shweyee.min@ostinifinity.net</p>
          <p className="text-gray-400 mt-2">Created</p>
          <p className="text-sm text-gray-400">June 24,2025, 17:38 (UTC+07:00)</p>
        </div>
        <div className="flex-1 border-r border-gray-400 px-6">
          <p className="text-gray-400">Console access</p>
          <p className="text-sm text-blue-400"
          onMouseEnter={() => setIsHovered(true)}
         >Enabled without MFA</p>
          {isHovered && (
  <div className="absolute z-50 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md p-4">
   <div className="absolute -top-2 left-10 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
   <button
      onClick={() => setIsHovered(false)}
      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
    >
      &times;
    </button>
    <h3 className="text-sm font-medium text-gray-800 mb-1">Console access</h3>
    <p className="text-sm text-gray-600 mb-3">
      As a best practice, enable MFA for users who have console access.
    </p>
    <button className="px-3 py-1 border border-blue-600 text-blue-600 text-sm rounded-md hover:bg-blue-50 transition">
      Enable MFA
    </button>
  </div>
)}

          <p className="text-gray-400 mt-2">Last console sign-in</p>
          <p className="text-sm text-gray-400">-</p>
        </div>
        
        <div className="flex-1 px-6">
          <p className="text-gray-400">Access key 1</p>
          <p className="text-sm text-[#F98D11] cursor-pointer">Create access key</p>
        </div>
      </div>
    </div>
    <div className="flex border-b border-gray-600 my-6 divide-x divide-gray-600">
      <div className="px-8 cursor-pointer py-2">
        <label className="text-gray-800">Permissions</label>
      </div>
      <div className="px-8 cursor-pointer py-2">
        <label className="text-gray-800">Groups (1)</label>
      </div>
      <div className="px-8 cursor-pointer py-2">
        <label className="text-gray-800">Tags</label>
      </div>
      <div className="px-8 cursor-pointer py-2 border-b-2 border-b-[#F98D11]">
        <label className="text-[#F98D11]">Security credentials</label>
      </div>
      <div className="px-8 cursor-pointer py-2">
        <label className="text-gray-800">Last Accessed</label>
      </div>
    </div>
    <div className="p-6 border-gray-200 border rounded-lg mt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-800 text-lg">Console sign-in</h3>
        <button className="border-2 border-gray-400 p-2 rounded-sm text-gray-800" 
        onClick={() => setIsOpen(true)}>Enable Console Access</button>
      </div>

      

      <div className="flex divide-x divide-gray-600 mt-4">
        <div className="flex-1 gap-2">
          <p className="text-gray-800">Console sign-in link</p>
          <p className="text-gray-800 text-sm mt-1">https://vvrei765439395vkfltreow</p>
        </div>
        <div className="flex-1 gap-2 pl-4">
          <p className="text-gray-800">Console password</p>
          <p className="text-gray-800 text-sm mt-1">Not Enable</p>
        </div>
      </div>
    </div>
    <div className="p-6 border-gray-200 border rounded-lg mt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-800 text-lg">Multi-factor authentication (MFA) (0)</h3>
        <button className="border-2 border-gray-400 p-2 rounded-sm text-gray-800">Enable Console Access</button>
      </div>
      <p className="text-gray-800 text-sm mt-6">Use MFA to increase the security of your ViXa Platform environment. Signing in with MFA requires an authentication code from an MFA device. Each user can have a maximum of 8 MFA devices assigned.</p>
      <div className="flex divide-x divide-gray-600 mt-4 border-b border-gray-600">
        <div className="flex-1 px-6 py-2">Type</div>
        <div className="flex-1 px-6 py-2">Identifier</div>
        <div className="flex-1 px-6 py-2">Certifications</div>
        <div className="flex-1 px-6 py-2">Created on</div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="px-6 py-2 bg-[#F98D11] rounded-sm">Assign MFA Device</button>
      </div>
    </div>

      {/* start delete modal */}

          {/* Modal Overlay */}
      {isOpen && (
       
        <div className="fixed inset-0 bg-gray-800/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
      {/* <div className="bg-white rounded-lg shadow-xl w-full max-w-md"> */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl  w-full">
        {/* Modal Header */}

        <div className="flex justify-between items-center px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Enable console access
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

        {/* <div className="px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">Enable console access</h2>
        
        </div> */}

        <div className='px-6'>
          <p className="text-gray-400 mt-1">Enable console access for your.name@ostinfinity.net</p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Password Options */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-3">Console password</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="passwordType" 
                  className="h-4 w-4 text-orange-400 focus:ring-orange-400 border-orange-300"
                />
                <label className="ml-2 block text-gray-400">Autogenerated password</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  name="passwordType" 
                  className="h-4 w-4 text-orange-400 focus:ring-orange-400 border-orange-300"
                />
                <label className="ml-2 block text-gray-400">Custom password</label>
              </div>
            </div>
          </div>

          

          {/* Password Requirements */}
          <div className="mb-6">
            <div className="relative  mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  {showPassword ? "Hide" : "Show"} password
                </button>
              </div>
            </div>
              <ul className="text-sm text-gray-400">
              <li className="mb-1">• Must be at least 8 characters long</li>
            </ul>
          </div>

          {/* Password Change Requirement */}
          <div className="pt-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">User must create new password at next sign-in</h3>
            <p className="text-gray-800 text-sm">
              User automatically get the VIXaUserChangePassword policy to allow them to change their own password.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 flex justify-end space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2"
           onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#F98D11]  text-white rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2"
           onClick={enableConsoleAccess}>
            Enable Console Access
          </button>
        </div>
      </div>
    </div>
         
    
    )}  
      
       {isSuccessOpen && (
        // <div className="p-8">
      
       <div className="fixed inset-0 bg-gray-800/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-xl  w-full">
        {/* <h2 className="text-xl font-semibold text-gray-800 px-6 py-4">Console Password</h2> */}
         <div className="flex justify-between items-center px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Console Password
              </h3>
              <button
                onClick={() => setIsSuccessOpen(false)}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

        <div className="px-6 py-4">
          <div className='border border-green-500 p-5 rounded'>
          <div className="text-gray-600">
             <div className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-green-500 mr-2">
    <Check className="h-2 w-2 text-white"  />
  </div>
  You have successfully enabled the user’s new password.</div>
           <p className="text-gray-600">This is the only time you view this password. After you close this window, if the password is lost, you must create a new one.</p>
           </div>
       
          <div className="mt-6 space-y-4">

            <div>
              <h3 className="font-medium text-gray-800">Console sign-in URL</h3>
              <p className="text-sm text-gray-500 flex"><Copy className="h-5 w-5 text-orange-400 hover:text-gray-700 cursor-pointer" /><span className='ml-2'>https://123456789.sign.in.ostinfinity.net/console</span></p>
          </div>
            
            <div>
              <h3 className="font-medium text-gray-800">  User name</h3>
              <p className="text-sm text-gray-500 flex"><Copy className="h-5 w-5 text-orange-400 hover:text-gray-700 cursor-pointer" /> <span className='ml-2'>your.name@ostinfinity.net</span></p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800">Console password</h3>
              <div className="flex items-center">
                <span className="text-sm text-gray-800">**********</span>
                <button className="ml-2 text-sm text-orange-400 hover:text-orange-400">Show</button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button className="rounded border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
             onClick={() => setIsSuccessOpen(false)}>
              Download .csv file
            </button>
            <button 
              onClick={() => setIsSuccessOpen(false)}
              className="rounded bg-orange-400 px-4 py-2 text-sm font-medium text-white hover:bg-orange-400"
            >
              Close
            </button>
          </div>
        </div>
    </div>
    </div>
       )}
  </div>
}