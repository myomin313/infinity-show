// components/AdminPanel.jsx
import Link from 'next/link';
import { 
  Search, 
  ChevronDown, 
  RefreshCw,
  X,
  Trash2
} from 'lucide-react';
import {API_URL,Stripe_PUBLIC_KEY,token,BASE_IMAGE_URL} from '@/pages/api/endpoint';

import { useState,useEffect } from 'react';
// import { useTheme } from '@/components/PanelLayout';


export default function AdminUser() {
    // const { darkMode } = useTheme();
     const [isOpen, setIsOpen] = useState(false);
     const [search, setSearch] = useState('');
      const [users, setUsers] = useState([]);
     const [loading, setLoading] = useState(true);
     const [confirmDelete, setConfirmDelete] = useState('');
     const [confirmDeleteError, setConfirmDeleteError] = useState('')

//     const users = [
//   { email: 'your.name@ostinfinity.net',path:"/", group: 1, lastActivity: '7 hours ago',MFA:'/', passwordAge: '7 hours', signIn: 'June 24, 2025' },
//   { email: 'your.name@ostinfinity.net',path:"/", group: 1, lastActivity: '18 hours ago',MFA:'/', passwordAge: 'Yesterday', signIn: 'June 23, 2025' },
//    { email: 'your.name@ostinfinity.net',path:"/", group: 1, lastActivity: '7 hours ago',MFA:'/', passwordAge: '7 hours', signIn: 'June 24, 2025' },
//   { email: 'your.name@ostinfinity.net',path:"/", group: 1, lastActivity: '18 hours ago',MFA:'/', passwordAge: 'Yesterday', signIn: 'June 23, 2025' },
//    { email: 'your.name@ostinfinity.net',path:"/", group: 1, lastActivity: '7 hours ago',MFA:'/', passwordAge: '7 hours', signIn: 'June 24, 2025' },
//   { email: 'your.name@ostinfinity.net',path:"/", group: 1, lastActivity: '18 hours ago',MFA:'/', passwordAge: 'Yesterday', signIn: 'June 23, 2025' },

// ];


const [sortConfig, setSortConfig] = useState({
  key: null,
  direction: 'ascending'
});

const handleSort = (key) => {
  setSortConfig(prev => ({
    key,
    direction: prev.key === key && prev.direction === 'ascending' 
      ? 'descending' 
      : 'ascending'
  }));
};

  
// const handleDelete = () => {
//     onConfirm();
//     setIsOpen(false);
//   };

  const handleDelete = async () => {
   if (selectedUsers.length === 0) return;
   if (confirmDelete.trim().toLowerCase() !== 'confirm') {
     setConfirmDeleteError('Please type "confirm" to proceed with deletion.');
     return;
   }

  try {
    const res = await fetch(`${API_URL}/user/admin/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userIds: selectedUsers }),
    });

 

    const updated = users.filter(u => !selectedUsers.includes(u._id));
    setUsers(updated);
    setSelectedUsers([]);
    setIsOpen(false);
  } catch (err) {
    console.error('Delete error:', err);
    alert('Failed to delete users');
  }
};



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/user`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}` 
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log('Fetched jobs:', data.result);
        setUsers(data.result || []);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);



  function getLastActiveTime(lastLogin) {
  const now = new Date();
  const previous = new Date(lastLogin);
  const diff = now - previous;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months >= 1) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (weeks >= 1) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  if (days >= 1) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours >= 1) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes >= 1) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return 'just now';
}


   const filteredUsers = users.filter((user) =>
    user.email?.toLowerCase().includes(search.toLowerCase())
  );


  const [selectedUsers, setSelectedUsers] = useState([]);


const handleSelectAll = (checked) => {
  if (checked) {
    setSelectedUsers(filteredUsers.map(u => u._id));
  } else {
    setSelectedUsers([]);
  }
};


const selectedUserEmails = users
  .filter(u => selectedUsers.includes(u._id))
  .map(u => u.email);

  console.log("selectedUsers",selectedUserEmails);
  return (
   
    <div className={`min-h-[calc(100vh-4rem)]  bg-white relative z-0   p-6`}>
      {/* Header */}
      {/* <div className="mb-8 ">
        <h5 className='text-gray-800 mb-1'>Home</h5>
        <div className='flex justify-between'>
        <h1 className="text-2xl font-bold text-gray-800">Console Home</h1>


         <div className='flex gap-2'>
         <button className="px-4 py-2  border border-gray-700 text-gray-800  rounded  flex items-center">
           Reset to default Layout
         </button>
         <button className="px-4 py-2 bg-[#F98D11] text-white rounded hover:bg-[#F98D11] flex">
          + Add Widget
        </button>
        </div>
       </div>
      </div> */}

    

      {/* <div className=" text-white p-4 rounded shadow-md"> */}
      <div className="flex justify-between mb-4">
        <div>
        <h2 className="text-xl font-semibold text-gray-800">Users</h2>
        <p className='text-gray-800 mb-2'>An IAM user is an identity with long-term credentials that is used to interact with AWS in an account</p>

        <div className="relative w-full  hidden md:block">
            <Search className="absolute left-3 top-2.5 text-gray-800 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-24 py-2 rounded border text-gray-800  border-gray-700  text-sm focus:outline-none placeholder:text-gray-800"
            />
           
          </div>

        </div>
        <div className="flex items-center gap-2">
   <button
      className="p-1 rounded-full border border-[#199AE2]   
                 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Refresh"
    >
      <RefreshCw className="w-4 h-4  text-[#199AE2]" />
    </button>
    
  <button className="px-3 py-1 text-gray-800 border border-gray-700 rounded " 
  onClick={() => setIsOpen(true)}>
    Delete
  </button>
  <button className="px-3 py-1 text-white bg-orange-500 rounded ">
    Create User
  </button>
</div>
       
      </div>

      <table className="min-w-full text-sm ">
        <thead className='text-gray-800 mb-20'>
         
          <tr >
  <th className="w-10">
    <div className='border-r border-gray-700'>
    <input 
      type="checkbox" 
      className="h-3 w-3 rounded border-gray-600 focus:ring-blue-500"
      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
      onChange={(e) => handleSelectAll(e.target.checked)}
    />
    </div>
  </th>
  <th className='p-2'>
    <button 
      className="flex items-center  w-full justify-between border-r border-gray-700"
      onClick={() => handleSort('username')}
    >
      <span>User Name</span>
      <ChevronDown className="h-6 w-6 pr-2" />
    </button>
  </th>
  <th className="p-2">
    <button 
      className="flex items-center  w-full justify-between border-r border-gray-700"
      onClick={() => handleSort('path')}
    >
      <span>Path</span>
      <ChevronDown className="h-6 w-6 pr-2" />
    </button>
  </th>
  <th className="p-2 ">
    <button 
      className="flex items-center w-full justify-between border-r  border-gray-700"
      onClick={() => handleSort('group')}
    >
      <span>Group</span>
      <ChevronDown className="h-6 w-6 pr-2" />
    </button>
  </th>
  <th className="p-2">
    <button 
      className="flex items-center  w-full justify-between border-r  border-gray-700"
      onClick={() => handleSort('lastActivity')}
    >
      <span>Last Activity</span>
      <ChevronDown className="h-6 w-6 pr-2" />
    </button>
  </th>
  <th className="p-2">
    <button 
      className="flex items-center  w-full justify-between border-r  border-gray-700"
      onClick={() => handleSort('mfa')}
    >
      <span>MFA</span>
      <ChevronDown className="h-6 w-6 pr-2" />
    </button>
  </th>
  <th className="p-2">
    <button 
      className="flex items-center  w-full justify-between border-r  border-gray-700"
      onClick={() => handleSort('passwordAge')}
    >
      <span>Password Age</span>
      <ChevronDown className="h-6 w-6 pr-2" />
    </button>
  </th>
  <th className="p-2">
    <button 
      className="flex items-center  w-full justify-between border-r  border-gray-700"
      onClick={() => handleSort('consoleSignIn')}
    >
      <span>Console Last Sign-in</span>
      <ChevronDown className="h-6 w-6 pr-2" />
    </button>
  </th>
</tr>
        </thead>
        <tbody>
          {filteredUsers.map((u, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="text-center text-gray-800"><input type="checkbox" 
               checked={selectedUsers.includes(u._id)}
  onChange={(e) => {
    if (e.target.checked) {
      setSelectedUsers(prev => [...prev, u._id]);
    } else {
      setSelectedUsers(prev => prev.filter(id => id !== u._id));
    }
  }}
  /></td>
              <td className="p-2  text-blue-400 underline ">{u.email}</td>
              <td className="text-gray-800">{u.path}</td>
              <td className="text-gray-800">{u.permission}</td>
              <td className="text-green-400">{getLastActiveTime(u.lastLogin)}</td>
              <td className="text-gray-800">{u.mfa}</td>
              <td className="text-green-400">{getLastActiveTime(u.lastLogin)}</td>
              <td className="text-gray-800">{u.consoleSignIn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    {/* </div> */}
    

    {/* start delete modal */}

          {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800/50 bg-opacity-50 z-50  flex items-center justify-center p-4">
          {/* Modal Container */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl  w-full">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Delete myo@ostinfinity.net
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                Delete {selectedUserEmails.length} user{selectedUserEmails.length > 1 ? 's' : ''} permanently?
                This will also delete all its user data,security credentails and inline policies.
              </p>
              <p className="flex items-center text-gray-800 dark:text-gray-300 border-b border-gray-700 pb-2 mb-6">
  <span className="font-medium">User Name</span>
  <span className="font-medium flex-1 text-center"> | Last Activity</span>
</p>
              <p className='flex text-blue-400 dark:text-gray-300 mb-4'>
                {/* <span>myo@ostinfinity.net</span> */}
                 <div className='text-blue-400 dark:text-gray-300 mb-4'>
                     {selectedUserEmails.map(email => (
                        <div key={email} className="mb-1">{email}</div>
                     ))}
                 </div>

                <span> </span>
                <span></span>
              </p>

              <p className="text-gray-800 dark:text-gray-300 mb-4">
               Note: Recent activity usually appears within 4 hours. Data is stored for a maximum 
               of 365 days depending when your region began supporting this feature.
               <a href="#" className='text-orange-300'>Learn More</a>
              </p>

              <p className="text-gray-800 dark:text-gray-300 mb-4">
                To avoid accidental deletions, we ask you to provide additional written consent.
              </p>

              <p className="text-gray-800 dark:text-gray-300 mb-4 text-bold">
                To confirm this deletion, type “confirm”
              </p>


              <p className="text-gray-800 dark:text-gray-300 mb-4 text-bold">
               <input
              type="text"
              value={confirmDelete}
              onChange={(e) => setConfirmDelete(e.target.value)}
              placeholder="confirm"
              className="w-full pl-2 pr-24 py-2 rounded border text-gray-800  border-gray-700  text-sm focus:outline-none placeholder:text-gray-800"
            />
              </p>
                {confirmDeleteError && <p className="text-red-500 text-sm mt-2">{confirmDeleteError}</p>}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-4 border-t dark:border-gray-700">
              <button
                onClick={() => {
                   setIsOpen(false);
                    setSelectedUsers([]);
                }}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}


    {/* end delete modal */}
      


      
    </div>
    
  );
}