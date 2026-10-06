// components/AdminSidebar.jsx
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Search,
  Home, 
  Shield, 
  Settings, 
  Users, 
  FileText, 
  BarChart2,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu
} from 'lucide-react';
import { useTheme } from '@/components/ConsoleLayout'

export default function AdminSidebar({isCollapsed,setIsCollapsed}) {
  const [expandedItems, setExpandedItems] = useState({
    products: false,
    security: false,
    analytics: false
  });

//   const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
     const { darkMode } = useTheme();
  

  // Check if mobile view on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [setIsCollapsed]);

  const toggleExpand = (item) => {
    setExpandedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      href: "/"
    },
    // {
    //   name: "Products",
    //   icon: <Shield className="w-5 h-5" />,
    //   href: "#",
    //   subItems: [
    //     { name: "Managed Security", href: "/products/security" },
    //     { name: "Infrastructure", href: "/products/infrastructure" },
    //     { name: "Vulnerability Mgmt", href: "/products/vulnerability" }
    //   ],
    //   expandKey: "products"
    // },
    {
      name: "Access Managemenet",
      icon: <Users className="w-5 h-5" />,
      href: "#",
      subItems: [
        { name: "User Groups", href: "/security/threats" },
        { name: "Users", href: "/security/incidents" },
        { name: "Roles", href: "/security/incidents" },
        { name: "Policies", href: "/security/incidents" },
        { name: "Identity Providers", href: "/security/incidents" },
        { name: "Account Setting", href: "/security/incidents" },
        { name: "Root access Management", href: "/security/incidents" }
      ],
    },
    {
      name: "Access Reports",
      icon: <Shield className="w-5 h-5" />,
      href: "#",
      subItems: [
        { name: "Access Analyzer", href: "/security/threats" },
        { name: "Credential report", href: "/security/incidents" },
        { name: "Organization Activity", href: "/security/incidents" },
        { name: "Service Control policies Activity", href: "/security/incidents" }
      ],
      expandKey: "security"
    }
    
  ];

  return (
    <>
      {/* Mobile Toggle Button (only visible on mobile) */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed z-50 bottom-4 right-4 p-3 bg-[#12145E] text-white rounded-full shadow-lg md:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Sidebar */}
      <div 
        className={`
            bg-[#12145E] dark:bg-gray-800 text-white dark:text-gray-200 
            h-screen fixed overflow-y-auto transition-all duration-300 z-40
            ${isCollapsed ? 'w-20' : 'w-64'}
          
        `}
      >
        {/* Sidebar Header */}

         <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            {!isMobile && (
            <button 
              onClick={toggleSidebar}
              className="p-1 rounded-full"
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <Menu  className="w-5 h-5" />
              ) : (
                <Menu  className="w-5 h-5" />
              )}
            </button>
          )}
          </div>
        <div className="p-4  flex items-center justify-between">


          {!isCollapsed ? (
            <h1 className="text-xl font-bold flex items-center gap-2">
              
             Ost Infinity
            </h1>
          ) : (
            <div className="flex justify-center w-full">
              <Shield className="text-blue-400 w-6 h-6" />
            </div>
          )}
          
          
        </div>

        <div className="p-4 flex items-center justify-between">


         <div className="relative border border-gray-500 rounded w-full max-w-md hidden md:block">
            <Search className="absolute left-3 top-2.5 text-white/80 w-4 h-4" />
            <input
              type="text"
              placeholder="Search IAM"
              className="w-full pl-10 pr-24 py-2 rounded  text-sm focus:outline-none placeholder:text-white/60"
            />
          </div>
          
        </div>
        
        {/* Navigation Items */}
        <nav className="p-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleExpand(item.expandKey)}
                      className={`
                        flex items-center w-full p-3 rounded-lg transition-colors
                        ${isCollapsed ? 'justify-center' : 'justify-between'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                         {!isCollapsed && (
                        expandedItems[item.expandKey] ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )
                      )}

                        {!isCollapsed && <span>{item.name}</span>}
                      </div>
                     
                    </button>
                    
                    {!isCollapsed && expandedItems[item.expandKey] && (
                      <ul className="mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="flex items-center gap-3 p-2 pl-4 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`
                      flex items-center p-3 rounded-lg transition-colors
                      ${isCollapsed ? 'justify-center' : 'gap-3'}
                    `}
                  >
                    {!isCollapsed && <span>{item.name}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Collapsed Tooltips */}
        {isCollapsed && (
          <div className="hidden md:block">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative group"
              >
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}