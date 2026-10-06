import { Search } from "lucide-react"

const userGroups = [
  { groupName: 'vixa_dev', userCount: 5, attachedPolicies: 'ViXaThreatDection', createdAt: '2025-06-02 (22 days ago)' },
  { groupName: 'vixa_super_admin', userCount: 3, attachedPolicies: 'ViXaThreatDection', createdAt: '2025-06-02 (22 days ago)' },
  { groupName: 'vixa_sys_admin', userCount: 10, attachedPolicies: 'ViXaThreatDection', createdAt: '2025-06-02 (22 days ago)' }
];

export default function AdminSetupPermissionPanel() {
  return <div className={`min-h-[calc(100vh-4rem)]  bg-white   p-6`}>
    <p className="text-gray-800">IAM {'>'} Users {'>'} Create User</p>
    <h3 className="text-gray-800 text-2xl my-2">Set Permissions</h3>
    <p className="text-gray-800 text-sm">Add user to an existing group or create a new one. Using groups is a best-practice way to manage user’s permission by job functions. <span className="cursor-pointer text-[#F98D11]">Learn more</span></p>
    <div className="border border-gray-400 rounded-md p-4 mt-6">
      <h3 className="text-gray-800 text-lg my-2">Permission Options</h3>
      <div className="flex justify-between items-stretch gap-4">
        <div className="p-4 cursor-pointer border border-[#F98D11] rounded-md flex-1">
          <h3 className="text-gray-800 text-lg my-2">Add user to the group</h3>
          <p className="text-gray-800 text-sm">Add user to an existing groups, or create a new group. We recommend using groups to manage user permissions by job function.</p>
        </div>
        <div className="p-4 cursor-pointer border border-gray-400 rounded-md flex-1">
          <h3 className="text-gray-800 text-lg my-2">Copy permissions</h3>
          <p className="text-gray-800 text-sm">Copy all groups memberships, attached managed policies and inline policies from an existing user.</p>
        </div>
        <div className="p-4 cursor-pointer border border-gray-400 rounded-md flex-1">
          <h3 className="text-gray-800 text-lg my-2">Attach policies directly</h3>
          <p className="text-gray-800 text-sm">Attach a managed policy directly fo a user. As a last practice, we recommended attaching policies to a group invented. Then add the user to the appropriate groups.</p>
        </div>
      </div>
    </div>
    <div className="border border-gray-400 rounded-md p-4 mt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-800 text-2xl my-2">User Group (1/3)</h3>
        <button className="bg-[#F98D11] px-4 py-2 rounded-sm">Create Group</button>
      </div>
      <div className="relative w-full  hidden md:block my-4">
        <Search className="absolute left-3 top-2.5 text-gray-800 w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-24 py-2 rounded border text-gray-800  border-gray-700  text-sm focus:outline-none placeholder:text-gray-800"
        />

      </div>
      <table className="min-w-full text-sm border border-gray-700">
        <thead className='text-gray-800'>
          <tr>
            <th><input type="checkbox" /></th>
            <th className="p-2">Group Name</th>
            <th>Users</th>
            <th>Attached policies</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {userGroups.map((u, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="text-center text-gray-800"><input type="checkbox" /></td>
              <td className="p-2 text-center text-blue-400 underline ">{u.groupName}</td>
              <td className="text-center text-gray-800">{u.userCount}</td>
              <td className="text-center text-blue-400 underline">{u.attachedPolicies}</td>
              <td className="text-center text-gray-800">{u.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-end items-center gap-2 mt-4">
      <button className="px-2 py-1 text-gray-800">Cancel</button>
      <button className="border border-gray-400 px-2 py-1 rounded-sm text-gray-800">Previous</button>
      <button className="bg-[#F98D11] px-2 py-1 rounded-sm">Next</button>
    </div>
  </div>
}