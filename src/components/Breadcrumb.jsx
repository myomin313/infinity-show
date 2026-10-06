export default function Breadcrumb() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b bg-white">
      <div className="text-sm text-gray-500 space-x-1">
        <span className="font-medium ml-2 text-gray-700">User: Myo</span>
        
      </div>
      <div className="text-sm text-gray-700">
        <a href="#" className="text-orange-500">Logout</a></div>
    </div>
  )
}
