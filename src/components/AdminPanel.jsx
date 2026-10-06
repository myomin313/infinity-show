// components/AdminPanel.jsx
import Link from "next/link";
import {
  Plus,
  Search,
  ChevronDown,
  Globe,
  HelpCircle,
  LayoutGrid,
  Clock,
  BookOpen,
  Bell,
  TrendingUp,
  Shield,
  CreditCard,
  ChevronRight,
  LayoutTemplate,
  ChevronLeft,
} from "lucide-react";
import { BASE_IMAGE_URL } from "@/pages/api/endpoint";

import { useState, useEffect } from "react";
// import { useTheme } from '@/components/PanelLayout';

export default function AdminPanel() {
  // const { darkMode } = useTheme();

  return (
    <div className={`min-h-[calc(100vh-4rem)]  bg-white   p-6`}>
      {/* Header */}
      <div className="mb-8 ">
        <h5 className="text-gray-800 mb-1">Home</h5>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Console Home</h1>

          <div className="flex gap-2">
            <button className="px-4 py-2  border border-gray-700 text-gray-800  rounded  flex items-center">
              Reset to default Layout
            </button>
            <button className="px-4 py-2 bg-[#F98D11] text-white rounded hover:bg-[#F98D11] flex">
              + Add Widget
            </button>
          </div>
        </div>
      </div>

      {/* Additional Sections Below */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray p-6 rounded-lg shadow relative">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-800 mb-4 ">
              Welcome to OST Infinity
            </h1>
            <div className="space-y-4">
              <div className="pt-4 border-t border-gray-200">
                <div className="mb-4 flex items-start gap-6">
                  {/* Image on the left */}
                  <img
                    src={`${BASE_IMAGE_URL}/admin-console/rocket.svg`}
                    alt="rocket"
                    className="w-20 h-20 mt-1" // Added mt-1 for better vertical alignment
                  />

                  {/* Text content on the right */}
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Getting started with VXA Identify First Platform
                    </h3>
                    <p className="text-gray-800">
                      Find out the fundamentals and
                      <br />
                      valuable information to get the
                      <br />
                      most out of VXA Platform.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="mb-4 flex items-start gap-6">
                  <img
                    src={`${BASE_IMAGE_URL}/admin-console/cert.svg`}
                    alt="rocket"
                    className="w-20 h-20 mt-1" // Added mt-1 for better vertical alignment
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Training and Certification
                    </h3>
                    <p className="text-gray-800 text-sm">
                      Learn from AWS experts and
                      <br />
                      advance your skills and
                      <br />
                      knowledge.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-4 flex items-start gap-6">
                    <img
                      src={`${BASE_IMAGE_URL}/admin-console/light.svg`}
                      alt="rocket"
                      className="w-20 h-20 mt-1" // Added mt-1 for better vertical alignment
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        What's new with OST Infinity?
                      </h3>
                      <p className="text-gray-800 text-sm">
                        Discover new AWS services,
                        <br />
                        features, and Regions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 
      <div className="dark:bg-amber-400  bg-white  p-6 rounded-lg shadow relative">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold text-gray-600">Recently Visited</h2>
  </div>
  
  <div className="rounded-lg p-4">
    <div className="flex items-center justify-center flex-col text-center py-6">
      
       
     
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.9084 12.7927C7.07699 12.4143 7.38897 12.1183 7.77574 11.9699C8.16251 11.8214 8.5924 11.8326 8.9709 12.0011L25.0021 19.1261L41.0355 12.0011C41.224 11.9101 41.4289 11.8579 41.6379 11.8476C41.847 11.8373 42.056 11.8691 42.2525 11.9412C42.4491 12.0132 42.6291 12.124 42.782 12.267C42.9349 12.41 43.0575 12.5822 43.1425 12.7735C43.2275 12.9648 43.2732 13.1712 43.277 13.3805C43.2807 13.5898 43.2423 13.7977 43.1641 13.9918C43.0859 14.186 42.9695 14.3625 42.8218 14.5108C42.6741 14.6591 42.4981 14.7762 42.3042 14.8552L25.6376 22.2615C25.4376 22.3505 25.2211 22.3965 25.0021 22.3965C24.7832 22.3965 24.5667 22.3505 24.3667 22.2615L7.70006 14.8552C7.32164 14.6866 7.02566 14.3746 6.87721 13.9879C6.72875 13.6011 6.73997 13.1712 6.9084 12.7927Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9792 4.24236C22.2449 3.67951 23.6147 3.38867 25 3.38867C26.3853 3.38867 27.7551 3.67951 29.0208 4.24236L39.4375 8.87361C41.1862 9.65122 42.6719 10.9192 43.7146 12.524C44.7574 14.1288 45.3124 16.0015 45.3125 17.9153V32.084C45.3124 33.9978 44.7574 35.8705 43.7146 37.4753C42.6719 39.0801 41.1862 40.3481 39.4375 41.1257L29.0208 45.7569C27.7551 46.3198 26.3853 46.6106 25 46.6106C23.6147 46.6106 22.2449 46.3198 20.9792 45.7569L10.5625 41.1278C8.8138 40.3502 7.3281 39.0822 6.28536 37.4774C5.24262 35.8726 4.68759 33.9999 4.6875 32.0861V17.9132C4.68759 15.9994 5.24262 14.1267 6.28536 12.5219C7.3281 10.9171 8.8138 9.64913 10.5625 8.87153L20.9792 4.24236ZM27.75 7.09861C26.8843 6.71382 25.9474 6.515 25 6.515C24.0526 6.515 23.1157 6.71382 22.25 7.09861L11.8333 11.7278C10.6362 12.2599 9.61906 13.1279 8.90537 14.2265C8.19168 15.3252 7.81204 16.6073 7.8125 17.9174V32.084C7.81245 33.3938 8.19227 34.6754 8.90593 35.7737C9.6196 36.8719 10.6365 37.7396 11.8333 38.2715L22.25 42.9007C24 43.6799 26 43.6799 27.75 42.9007L38.1667 38.2715C39.3635 37.7396 40.3804 36.8719 41.0941 35.7737C41.8077 34.6754 42.1876 33.3938 42.1875 32.084V17.9174C42.1876 16.6076 41.8077 15.326 41.0941 14.2277C40.3804 13.1295 39.3635 12.2618 38.1667 11.7299L27.75 7.09861Z" fill="#D9D9D9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 19.2715C25.4144 19.2715 25.8118 19.4361 26.1049 19.7291C26.3979 20.0222 26.5625 20.4196 26.5625 20.834V43.7507C26.5625 44.1651 26.3979 44.5625 26.1049 44.8555C25.8118 45.1485 25.4144 45.3132 25 45.3132C24.5856 45.3132 24.1882 45.1485 23.8951 44.8555C23.6021 44.5625 23.4375 44.1651 23.4375 43.7507V20.834C23.4375 20.4196 23.6021 20.0222 23.8951 19.7291C24.1882 19.4361 24.5856 19.2715 25 19.2715Z" fill="#D9D9D9"/>
</svg>

    
      <p className="text-gray-800 font-medium">No recently visited services</p>
      <p className="text-gray-500 text-sm mt-1">
        Explore one of these commonly visited OST Infinity services.
      </p>
    </div>
    
    <div className="grid grid-cols-2 gap-3 mt-4 text-center">
      <Link href="#" className="p-3">
        <div>
          <p className="font-medium text-[#AD6920]">Products and Services</p>
        </div>
      </Link>
      
      <Link href="#" className="p-3">
        <div>
          <p className="font-medium text-[#AD6920]">VXA Platform Studio</p>
        </div>
      </Link>
    </div>
  </div>
  <div className="absolute left-0 right-0 bottom-0 px-6 border-t-2 border-gray-200">
    <div className="p-2 flex justify-center">
      <Link href="#" className="text-sm text-[#AD6920] hover:text-[#8a541a] hover:underline flex items-center">
        View all services
      </Link>
    </div>
  </div> */}
        {/* </div> */}

        <div className="bg-gray p-6 rounded-lg shadow">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Applications (0)
              </h1>
              <div className="flex items-center mt-1 text-sm text-gray-800">
                <span>Region: EU (Germany)</span>
                <ChevronDown className="w-4 h-4 ml-1 text-gray-800" />
              </div>
            </div>
            <button className="px-4 py-2 text-gray-800  border border-gray-700 rounded hover:bg-blue-700 flex items-center">
              Create Application
            </button>
          </div>

          {/* Filters Section */}
          {/* Select Region Dropdown */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <select className="w-full px-4 py-2 border border-gray-300 rounded text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option
                  value=""
                  className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  Select Region
                </option>
                <option
                  value="eu"
                  className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  EU (Germany)
                </option>
                <option
                  value="us"
                  className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  US (N. Virginia)
                </option>
                <option
                  value="asia"
                  className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  Asia (Tokyo)
                </option>
              </select>
            </div>

            {/* Search Input */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-800" />
              </div>
              <input
                type="text"
                placeholder="Find applications"
                className="block text-gray-800 w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Table Headers */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-sm text-gray-800  font-medium border-b pb-3 mb-6">
            <div className="col-span-3 flex">
              Name <ChevronDown className="w-5 h-5 text-gray-800" />{" "}
            </div>
            <div className="col-span-3 flex">
              Description <ChevronDown className="w-5 h-5 text-gray-800" />
            </div>
            <div className="col-span-3 flex">
              Region <ChevronDown className="w-5 h-5 text-gray-800" />
            </div>
            <div className="col-span-3 flex">
              Origination <ChevronDown className="w-5 h-5 text-gray-800" />
            </div>
          </div>

          {/* Empty State */}
          <div className=" rounded-lg p-8 text-center">
            {/* <LayoutGrid className="w-10 h-10 mx-auto text-gray-400 mb-4" /> */}
            <h3 className="text-lg font-medium text-gray-800  mb-1">
              No applications
            </h3>
            <p className="text-gray-800  mb-4">
              Get started by creating an application
            </p>
            <button className="px-4 py-2 text-gray-800  border border-gray-700  rounded  flex items-center mx-auto">
              Create Application
            </button>
          </div>
        </div>
      </div>

      {/* Additional Sections Below */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Left Section - Welcome and Platform Health */}

        {/* Right Section - Applications */}
        <div className="bg-gray p-6 rounded-lg shadow relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                ViXa Platform Health
              </h1>
            </div>
          </div>

          <div>
            <p className="text-gray-800 text-sm">Open issues</p>

            <div className="flex justify-between items-center">
              <p className="text-2xl text-gray-800">0</p>
              <p className="text-gray-800 text-xs">Past 7 days</p>
            </div>
          </div>
          <div className="border-t-2 border-gray-200">
            <p className="text-gray-800  text-sm mt-2">Scheduled change</p>

            <div className="flex justify-between items-center">
              <p className="text-2xl text-gray-800">0</p>
              <p className="text-gray-800 text-xs">Upcoming and past 7 days</p>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 border-b-2">
            <p className="text-gray-800  text-sm mt-2">Other notifications</p>

            <div className="flex justify-between items-center">
              <p className="text-2xl text-gray-800 ">0</p>
              <p className="text-gray-800  text-xs">Past 7 days</p>
            </div>
          </div>

          <div className="absolute left-0 right-0 bottom-0 px-6 border-t-2 border-gray-200">
            {" "}
            {/* Matches widget padding */}
            <div className="p-2 flex justify-center">
              <Link
                href="#"
                className="text-sm text-[#AD6920] hover:text-[#8a541a] hover:underline flex items-center"
              >
                Go to Ost Infinity Health
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray p-6 rounded-lg shadow relative">
          {" "}
          {/* Added relative positioning */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Cost and Data
            </h2>
          </div>
          <div className="rounded-lg p-8">
            <div className="flex items-center justify-center flex-col text-center py-6">
              {/* <Clock className="w-6 h-6 text-gray-400 mb-2" /> */}
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.1178 29.097H30.8828C31.2698 29.097 31.5828 29.41 31.5828 29.797V49.3C31.5828 49.687 31.2698 50 30.8828 50H19.1178C18.7308 50 18.4177 49.687 18.4177 49.3V29.797C18.4177 29.41 18.7318 29.097 19.1178 29.097ZM40.1997 3.881V3.457C40.1997 3.07 40.5127 2.757 40.8997 2.757C41.2868 2.757 41.5998 3.07 41.5998 3.457V3.881C41.9308 3.991 42.2278 4.177 42.4698 4.419C42.8718 4.821 43.1198 5.376 43.1198 5.989C43.1198 6.376 42.8068 6.689 42.4198 6.689C42.0327 6.689 41.7198 6.376 41.7198 5.989C41.7198 5.763 41.6278 5.558 41.4798 5.409C41.3318 5.26 41.1268 5.169 40.8997 5.169C40.6737 5.169 40.4688 5.261 40.3198 5.409C40.2435 5.4851 40.1831 5.57552 40.1419 5.67505C40.1007 5.77459 40.0796 5.88128 40.0798 5.989C40.0798 6.594 40.5708 6.711 41.0608 6.828C42.0898 7.073 43.1198 7.318 43.1198 9.029C43.1198 9.642 42.8708 10.197 42.4698 10.599C42.2253 10.8433 41.9275 11.0275 41.5998 11.137V11.561C41.5998 11.948 41.2868 12.261 40.8997 12.261C40.5127 12.261 40.1997 11.948 40.1997 11.561V11.137C39.8687 11.027 39.5718 10.841 39.3298 10.599C38.9278 10.197 38.6798 9.642 38.6798 9.029C38.6798 8.642 38.9928 8.329 39.3798 8.329C39.7668 8.329 40.0798 8.642 40.0798 9.029C40.0798 9.255 40.1718 9.46 40.3198 9.609C40.4737 9.76259 40.6823 9.84885 40.8997 9.84885C41.1172 9.84885 41.3258 9.76259 41.4798 9.609C41.5562 9.53304 41.6167 9.44265 41.6579 9.34308C41.6991 9.24351 41.7202 9.13675 41.7198 9.029C41.7198 8.424 41.2288 8.307 40.7388 8.19C39.7098 7.945 38.6798 7.7 38.6798 5.989C38.6798 5.376 38.9278 4.821 39.3298 4.419C39.5718 4.177 39.8687 3.991 40.1997 3.881ZM40.8997 0C38.8268 0 36.9498 0.84 35.5908 2.199C34.2318 3.558 33.3918 5.435 33.3918 7.508C33.3918 9.581 34.2318 11.458 35.5908 12.817C36.9498 14.176 38.8268 15.016 40.8997 15.016C42.9727 15.016 44.8498 14.176 46.2088 12.817C47.5678 11.458 48.4078 9.581 48.4078 7.508C48.4078 5.435 47.5678 3.558 46.2088 2.199C44.8498 0.84 42.9727 0 40.8997 0ZM45.2188 3.189C44.1138 2.084 42.5868 1.4 40.8997 1.4C39.2127 1.4 37.6857 2.084 36.5807 3.189C35.4757 4.294 34.7918 5.821 34.7918 7.508C34.7918 9.195 35.4757 10.722 36.5807 11.827C37.6857 12.932 39.2127 13.616 40.8997 13.616C42.5868 13.616 44.1138 12.932 45.2188 11.827C46.3237 10.722 47.0078 9.195 47.0078 7.508C47.0078 5.821 46.3237 4.294 45.2188 3.189ZM24.3008 14.349V13.925C24.3008 13.538 24.6138 13.225 25.0008 13.225C25.3878 13.225 25.7008 13.538 25.7008 13.925V14.349C26.0317 14.459 26.3288 14.645 26.5708 14.887C26.9728 15.289 27.2208 15.844 27.2208 16.457C27.2208 16.844 26.9078 17.157 26.5208 17.157C26.1338 17.157 25.8208 16.844 25.8208 16.457C25.8208 16.231 25.7288 16.026 25.5807 15.877C25.4327 15.728 25.2278 15.637 25.0008 15.637C24.7748 15.637 24.5697 15.729 24.4207 15.877C24.3445 15.9531 24.2841 16.0435 24.2429 16.1431C24.2017 16.2426 24.1806 16.3493 24.1807 16.457C24.1807 17.062 24.6717 17.179 25.1617 17.296C26.1907 17.541 27.2208 17.786 27.2208 19.497C27.2208 20.11 26.9718 20.665 26.5708 21.067C26.3263 21.3113 26.0285 21.4955 25.7008 21.605V22.029C25.7008 22.416 25.3878 22.729 25.0008 22.729C24.6138 22.729 24.3008 22.416 24.3008 22.029V21.605C23.9698 21.495 23.6728 21.309 23.4307 21.067C23.0287 20.665 22.7808 20.11 22.7808 19.497C22.7808 19.11 23.0938 18.797 23.4807 18.797C23.8677 18.797 24.1807 19.11 24.1807 19.497C24.1807 19.723 24.2727 19.928 24.4207 20.077C24.5688 20.225 24.7738 20.317 25.0008 20.317C25.1085 20.3171 25.2151 20.2959 25.3146 20.2547C25.4142 20.2136 25.5046 20.1532 25.5808 20.077C25.6569 20.0008 25.7173 19.9104 25.7585 19.8109C25.7997 19.7114 25.8208 19.6047 25.8208 19.497C25.8208 18.892 25.3298 18.775 24.8398 18.658C23.8108 18.413 22.7808 18.168 22.7808 16.457C22.7808 15.844 23.0287 15.289 23.4307 14.887C23.6728 14.645 23.9698 14.459 24.3008 14.349ZM25.0008 10.468C22.9278 10.468 21.0508 11.308 19.6918 12.667C18.3328 14.026 17.4927 15.903 17.4927 17.976C17.4927 20.049 18.3328 21.926 19.6918 23.285C21.0508 24.644 22.9278 25.484 25.0008 25.484C27.0738 25.484 28.9508 24.644 30.3098 23.285C31.6688 21.926 32.5087 20.049 32.5087 17.976C32.5087 15.903 31.6688 14.026 30.3098 12.667C28.9508 11.309 27.0738 10.468 25.0008 10.468ZM29.3198 13.657C28.2148 12.552 26.6878 11.868 25.0008 11.868C23.3138 11.868 21.7868 12.552 20.6818 13.657C19.5768 14.762 18.8927 16.289 18.8927 17.976C18.8927 19.663 19.5768 21.19 20.6818 22.295C21.7868 23.4 23.3138 24.084 25.0008 24.084C26.6878 24.084 28.2148 23.4 29.3198 22.295C30.4248 21.19 31.1087 19.663 31.1087 17.976C31.1087 16.289 30.4248 14.762 29.3198 13.657ZM8.40175 6.612V6.188C8.40175 5.801 8.71475 5.488 9.10175 5.488C9.48875 5.488 9.80175 5.801 9.80175 6.188V6.612C10.1328 6.722 10.4298 6.908 10.6718 7.15C11.0738 7.552 11.3217 8.107 11.3217 8.72C11.3217 9.107 11.0087 9.42 10.6217 9.42C10.2347 9.42 9.92175 9.107 9.92175 8.72C9.92175 8.494 9.82975 8.289 9.68175 8.14C9.5278 7.98641 9.31921 7.90015 9.10175 7.90015C8.88429 7.90015 8.6757 7.98641 8.52175 8.14C8.44551 8.2161 8.38506 8.30651 8.34387 8.40605C8.30269 8.50559 8.28157 8.61228 8.28175 8.72C8.28175 9.325 8.77275 9.442 9.26275 9.559C10.2917 9.804 11.3217 10.049 11.3217 11.76C11.3217 12.373 11.0728 12.928 10.6718 13.33C10.4273 13.5743 10.1295 13.7585 9.80175 13.868V14.292C9.80175 14.679 9.48875 14.992 9.10175 14.992C8.71475 14.992 8.40175 14.679 8.40175 14.292V13.868C8.07075 13.758 7.77375 13.572 7.53175 13.33C7.12975 12.928 6.88175 12.373 6.88175 11.76C6.88175 11.373 7.19475 11.06 7.58175 11.06C7.96875 11.06 8.28175 11.373 8.28175 11.76C8.28175 11.986 8.37375 12.191 8.52175 12.34C8.6757 12.4936 8.88429 12.5798 9.10175 12.5798C9.31921 12.5798 9.5278 12.4936 9.68175 12.34C9.75799 12.2639 9.81844 12.1735 9.85963 12.0739C9.90082 11.9744 9.92193 11.8677 9.92175 11.76C9.92175 11.155 9.43075 11.038 8.94075 10.921C7.91175 10.676 6.88175 10.431 6.88175 8.72C6.88175 8.107 7.12975 7.552 7.53175 7.15C7.77375 6.908 8.06975 6.722 8.40175 6.612ZM9.10175 2.731C7.02875 2.731 5.15175 3.571 3.79275 4.93C2.43375 6.289 1.59375 8.166 1.59375 10.239C1.59375 12.312 2.43375 14.189 3.79275 15.548C5.15175 16.907 7.02875 17.747 9.10175 17.747C11.1748 17.747 13.0518 16.907 14.4108 15.548C15.7698 14.189 16.6098 12.312 16.6098 10.239C16.6098 8.166 15.7698 6.289 14.4108 4.93C13.0518 3.571 11.1748 2.731 9.10175 2.731ZM13.4207 5.92C12.3158 4.815 10.7888 4.131 9.10175 4.131C7.41475 4.131 5.88775 4.814 4.78275 5.92C3.67775 7.026 2.99375 8.552 2.99375 10.239C2.99375 11.926 3.67775 13.453 4.78275 14.558C5.88775 15.663 7.41475 16.347 9.10175 16.347C10.7888 16.347 12.3158 15.663 13.4207 14.558C14.5257 13.453 15.2098 11.926 15.2098 10.239C15.2087 8.552 14.5257 7.025 13.4207 5.92ZM3.21875 21.214H14.9837C15.3707 21.214 15.6837 21.527 15.6837 21.914V49.3C15.6837 49.687 15.3707 50 14.9837 50H3.21875C2.83175 50 2.51875 49.687 2.51875 49.3V21.914C2.51875 21.527 2.83275 21.214 3.21875 21.214ZM14.2847 22.614H3.91875V48.6H14.2838L14.2847 22.614ZM46.7828 50H35.0168C34.6297 50 34.3168 49.687 34.3168 49.3V20.045C34.3168 19.658 34.6297 19.345 35.0168 19.345H46.7817C47.1688 19.345 47.4818 19.658 47.4818 20.045V49.3C47.4827 49.687 47.1688 50 46.7828 50ZM35.7168 48.6H46.0818V20.745H35.7168V48.6ZM30.1838 30.497H19.8177V48.6H30.1828L30.1838 30.497Z"
                  fill="#D9D9D9"
                />
              </svg>

              <p className="text-gray-800 font-medium">Data unavailable</p>
              <p className="text-gray-800 text-sm mt-1 mb-4">
                You must have investment Explorer enabled to view your
                investment and usage data
              </p>
              <button className="px-4 py-2 text-gray-800 border border-gray-700 rounded  flex items-center mx-auto">
                Turn on Investment Explore
              </button>
            </div>
          </div>
          <div className="absolute left-0 right-0 bottom-0 px-6 border-t-2 border-gray-200">
            {" "}
            {/* Matches widget padding */}
            <div className="p-2 flex justify-center">
              <Link
                href="#"
                className="text-sm text-[#AD6920] hover:text-[#8a541a] hover:underline flex items-center"
              >
                Go to Ost Infinity Health
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray p-6 rounded-lg shadow relative">
          {" "}
          {/* Added relative positioning */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800 ">
              Product (8)
            </h2>
            <p className="text-sm  text-gray-800 ">
              Vetted Solutions from Ost Infinity for popular business and
              technical use cases.
            </p>
          </div>
          <div className="rounded-lg p-4">
            <div className="flex border-b-1 border-gray-600 items-center">
              <p className="font-medium text-gray-800">
                <ChevronLeft />
              </p>
              <p className="font-medium text-gray-800 text-nowrap  p-2 border-r border-gray-600">
                Managed security service
              </p>
              <p className="font-medium text-gray-800 text-nowrap p-2 border-r border-gray-600">
                Infrastructure
              </p>
              <p className="font-medium text-gray-800 text-nowrap p-2 border-r border-gray-600">
                Organization
              </p>
              <p className="font-medium text-gray-800 text-nowrap p-2 border-r border-gray-600">
                Ot ..
              </p>
              <p className="font-medium text-gray-800">
                <ChevronRight />
              </p>
            </div>

            <p className="font-medium text-orange-400 p-2 border-b-1 border-gray-600">
              Cybersecurity Operation Center
            </p>
            <p className="font-medium text-orange-400 p-2 border-b-1 border-gray-600">
              Incident Response
            </p>
            <p className="font-medium text-orange-400 p-2 border-b-1 border-gray-600">
              Managed Risk
            </p>
            <p className="font-medium text-orange-400 p-2 ">
              Vulnerability Management
            </p>
          </div>
          {/* Border and link container */}
          <div className="absolute left-0 right-0 bottom-0 px-6 border-t-2 border-gray-200">
            {" "}
            {/* Matches widget padding */}
            <div className="p-2 flex justify-center">
              <Link
                href="#"
                className="text-sm text-[#AD6920] hover:text-[#8a541a] hover:underline flex items-center"
              >
                Go to ViXa Identity-First Platform Studio
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray p-6 rounded-lg shadow">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Solution ViXa Identity-First Platform
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="space-y-4">
              <div>
                <h5 className="text-orange-400 text-sm">
                  Deploy LLMs with confidence
                </h5>
                <p className="text-gray-800 text-sm">
                  Transform your business with the right LLM and
                  price-performant, purpose-building
                  <br />
                </p>
              </div>
              {/* <div className="pt-4"> */}
              <div className="mt-12">
                <h5 className="text-orange-400 text-sm">ViXa AI Lofts</h5>
                <p className="text-gray-800 text-sm">
                  Build, Learn and connect at ViXa AL Lofts - coming to the
                  world's biggest technology.
                </p>
              </div>
              {/* </div> */}
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-orange-400 text-sm">
                  ViXa Platform Business Support limited time
                </h5>
                <p className="text-gray-800">
                  Find out the fundamentals and valuable information to get the
                  most out of ViXa Platform
                  <br />
                </p>
              </div>
              {/* <div className="pt-4"> */}
              <div className="mb-4">
                <h5 className="text-orange-400 text-sm">
                  Build generations AI apps
                </h5>
                <p className="text-gray-800 text-sm">
                  Discover 6 essential guidelines for building successful
                  generation AI applications with apps.
                </p>
              </div>
              {/* </div> */}
            </div>
          </div>

          {/* Filters Section */}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Section - Welcome and Platform Health */}
          <div className="bg-gray p-6 rounded-lg shadow relative">
            {/* Welcome Section */}

            <div className="justify-between items-center mb-4">
              <h2 className="text-md font-semibold text-gray-800">Security</h2>
              <p className="text-sm text-gray-800">Region: Europe(Frankfurt)</p>
            </div>

            <div className="rounded-lg p-8">
              <div className="flex items-center justify-center flex-col text-center py-6">
                {/* <Clock className="w-6 h-6 text-gray-400 mb-2" /> */}
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_607_38062)">
                    <path
                      d="M33.75 45.0005C33.6251 45.0005 33.5014 44.9757 33.3862 44.9274C32.94 44.738 22.5 40.2268 22.5 31.0055V23.1699C22.4999 22.9737 22.5613 22.7824 22.6757 22.6229C22.7901 22.4635 22.9516 22.344 23.1375 22.2812L33.45 18.7993C33.6446 18.7336 33.8554 18.7336 34.05 18.7993L44.3625 22.2812C44.5484 22.344 44.7099 22.4635 44.8243 22.6229C44.9387 22.7824 45.0001 22.9737 45 23.1699V31.0055C45 40.2268 34.56 44.738 34.1138 44.9274C33.9986 44.9757 33.8749 45.0005 33.75 45.0005ZM24.375 23.8449V31.0055C24.375 38.1005 31.9781 42.1768 33.75 43.0299C35.52 42.1749 43.125 38.0818 43.125 31.0055V23.8449L33.75 20.678L24.375 23.8449Z"
                      fill="#ADADAD"
                    />
                    <path
                      d="M32.8125 35.625L32.7619 35.6231C32.63 35.6163 32.5012 35.5816 32.3838 35.5211C32.2665 35.4606 32.1633 35.3759 32.0813 35.2725L28.3312 30.585C28.1758 30.3908 28.104 30.1428 28.1314 29.8956C28.1588 29.6485 28.2833 29.4223 28.4775 29.2669C28.6717 29.1115 28.9197 29.0396 29.1669 29.067C29.414 29.0944 29.6402 29.2189 29.7956 29.4131L32.8894 33.2812L38.7113 27.4613C38.8881 27.2905 39.1249 27.196 39.3707 27.1981C39.6165 27.2003 39.8516 27.2989 40.0255 27.4727C40.1993 27.6465 40.2979 27.8816 40.3 28.1274C40.3021 28.3732 40.2076 28.6101 40.0369 28.7869L33.4744 35.3494C33.3877 35.4367 33.2845 35.5059 33.1709 35.5532C33.0574 35.6005 32.9355 35.6249 32.8125 35.625ZM34.6875 15H6.5625C2.94375 15 0 12.0562 0 8.4375C0 4.81875 2.94375 1.875 6.5625 1.875H34.6875C38.3063 1.875 41.25 4.81875 41.25 8.4375C41.25 12.0562 38.3063 15 34.6875 15ZM6.5625 3.75C3.97688 3.75 1.875 5.85188 1.875 8.4375C1.875 11.0231 3.97688 13.125 6.5625 13.125H34.6875C37.2731 13.125 39.375 11.0231 39.375 8.4375C39.375 5.85188 37.2731 3.75 34.6875 3.75H6.5625Z"
                      fill="#ADADAD"
                    />
                    <path
                      d="M8.4375 11.25C6.88688 11.25 5.625 9.98812 5.625 8.4375C5.625 6.88687 6.88688 5.625 8.4375 5.625C9.98812 5.625 11.25 6.88687 11.25 8.4375C11.25 9.98812 9.98812 11.25 8.4375 11.25ZM8.4375 7.5C7.92188 7.5 7.5 7.92188 7.5 8.4375C7.5 8.95312 7.92188 9.375 8.4375 9.375C8.95312 9.375 9.375 8.95312 9.375 8.4375C9.375 7.92188 8.95312 7.5 8.4375 7.5ZM17.8125 11.25C16.2619 11.25 15 9.98812 15 8.4375C15 6.88687 16.2619 5.625 17.8125 5.625C19.3631 5.625 20.625 6.88687 20.625 8.4375C20.625 9.98812 19.3631 11.25 17.8125 11.25ZM17.8125 7.5C17.2969 7.5 16.875 7.92188 16.875 8.4375C16.875 8.95312 17.2969 9.375 17.8125 9.375C18.3281 9.375 18.75 8.95312 18.75 8.4375C18.75 7.92188 18.3281 7.5 17.8125 7.5ZM17.8125 26.25H6.5625C2.94375 26.25 0 23.3062 0 19.6875C0 17.9362 0.6825 16.29 1.92375 15.0487C3.165 13.8075 4.81125 13.125 6.5625 13.125H34.6875C36.1538 13.125 37.5356 13.5956 38.6775 14.4862C38.7746 14.562 38.8559 14.6561 38.9167 14.7632C38.9774 14.8703 39.0165 14.9884 39.0317 15.1106C39.0468 15.2328 39.0377 15.3568 39.005 15.4755C38.9722 15.5943 38.9163 15.7054 38.8406 15.8025C38.7649 15.8996 38.6708 15.9809 38.5637 16.0417C38.4566 16.1024 38.3385 16.1415 38.2163 16.1567C38.0941 16.1718 37.97 16.1627 37.8513 16.13C37.7326 16.0972 37.6215 16.0413 37.5244 15.9656C36.7143 15.3337 35.7148 14.9935 34.6875 15H6.5625C5.31375 15 4.13625 15.4894 3.24938 16.3744C2.3625 17.2594 1.875 18.4388 1.875 19.6875C1.875 22.2731 3.97688 24.375 6.5625 24.375H17.8125C18.0611 24.375 18.2996 24.4738 18.4754 24.6496C18.6512 24.8254 18.75 25.0639 18.75 25.3125C18.75 25.5611 18.6512 25.7996 18.4754 25.9754C18.2996 26.1512 18.0611 26.25 17.8125 26.25Z"
                      fill="#ADADAD"
                    />
                    <path
                      d="M8.4375 22.5C6.88688 22.5 5.625 21.2381 5.625 19.6875C5.625 18.1369 6.88688 16.875 8.4375 16.875C9.98812 16.875 11.25 18.1369 11.25 19.6875C11.25 21.2381 9.98812 22.5 8.4375 22.5ZM8.4375 18.75C7.92188 18.75 7.5 19.1719 7.5 19.6875C7.5 20.2031 7.92188 20.625 8.4375 20.625C8.95312 20.625 9.375 20.2031 9.375 19.6875C9.375 19.1719 8.95312 18.75 8.4375 18.75ZM17.8125 22.5C16.2619 22.5 15 21.2381 15 19.6875C15 18.1369 16.2619 16.875 17.8125 16.875C19.3631 16.875 20.625 18.1369 20.625 19.6875C20.625 21.2381 19.3631 22.5 17.8125 22.5ZM17.8125 18.75C17.2969 18.75 16.875 19.1719 16.875 19.6875C16.875 20.2031 17.2969 20.625 17.8125 20.625C18.3281 20.625 18.75 20.2031 18.75 19.6875C18.75 19.1719 18.3281 18.75 17.8125 18.75ZM17.8125 37.5H6.5625C2.94375 37.5 0 34.5562 0 30.9375C0 29.1862 0.6825 27.54 1.92375 26.2987C3.165 25.0575 4.81125 24.375 6.5625 24.375H17.8125C18.0611 24.375 18.2996 24.4738 18.4754 24.6496C18.6512 24.8254 18.75 25.0639 18.75 25.3125C18.75 25.5611 18.6512 25.7996 18.4754 25.9754C18.2996 26.1512 18.0611 26.25 17.8125 26.25H6.5625C5.31375 26.25 4.13625 26.7394 3.24938 27.6244C2.3625 28.5094 1.875 29.6888 1.875 30.9375C1.875 33.5231 3.97688 35.625 6.5625 35.625H17.8125C18.0611 35.625 18.2996 35.7238 18.4754 35.8996C18.6512 36.0754 18.75 36.3139 18.75 36.5625C18.75 36.8111 18.6512 37.0496 18.4754 37.2254C18.2996 37.4012 18.0611 37.5 17.8125 37.5Z"
                      fill="#ADADAD"
                    />
                    <path
                      d="M8.4375 33.75C6.88687 33.75 5.625 32.4881 5.625 30.9375C5.625 29.3869 6.88687 28.125 8.4375 28.125C9.98812 28.125 11.25 29.3869 11.25 30.9375C11.25 32.4881 9.98812 33.75 8.4375 33.75ZM8.4375 30C7.92188 30 7.5 30.4219 7.5 30.9375C7.5 31.4531 7.92188 31.875 8.4375 31.875C8.95312 31.875 9.375 31.4531 9.375 30.9375C9.375 30.4219 8.95312 30 8.4375 30ZM17.8125 33.75C16.2619 33.75 15 32.4881 15 30.9375C15 29.3869 16.2619 28.125 17.8125 28.125C19.3631 28.125 20.625 29.3869 20.625 30.9375C20.625 32.4881 19.3631 33.75 17.8125 33.75ZM17.8125 30C17.2969 30 16.875 30.4219 16.875 30.9375C16.875 31.4531 17.2969 31.875 17.8125 31.875C18.3281 31.875 18.75 31.4531 18.75 30.9375C18.75 30.4219 18.3281 30 17.8125 30Z"
                      fill="#ADADAD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_607_38062">
                      <rect width="45" height="45" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="text-gray-800 font-medium">No Security Data</p>
                <p className="text-gray-800 text-sm mt-1 mb-4">
                  Access Security Finding and Improve
                </p>
              </div>

              <div className="absolute left-0 right-0 bottom-0 px-6 border-t-2 border-gray-200">
                {" "}
                {/* Matches widget padding */}
                <div className="p-2 flex justify-center">
                  <Link
                    href="#"
                    className="text-sm text-[#AD6920] hover:text-[#8a541a] hover:underline flex items-center"
                  >
                    Go to Ost Infinity Health
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Applications */}
          <div className="bg-gray p-6 rounded-lg shadow relative">
            {/* Welcome Section */}

            <div className="justify-between items-center mb-4">
              <h2 className="text-md font-semibold text-gray-800">
                Trusted Adviser
              </h2>
            </div>

            <div className="rounded-lg p-8 mt-8">
              <div className="flex items-center justify-center flex-col text-center py-6">
                {/* <Clock className="w-6 h-6 text-gray-400 mb-2" /> */}
                <svg
                  width="42"
                  height="47"
                  viewBox="0 0 42 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 23.8535H37.1103L41 30.5908H24.8897L21 23.8535ZM21 23.8535H4.88973L1 30.5908H17.1103L21 23.8535ZM37.1103 31.0453V45.5444H4.88973V31.0453M21 24.3081V45.0899"
                    stroke="#ADADAD"
                    stroke-width="1.5"
                    stroke-miterlimit="2.6131"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.4634 7.5L23.4219 4.22664C23.4005 2.541 22.7912 1.25 20.6854 1L19.6021 5.04309L17.4516 8.78964L16.8432 8.95273M22.5125 7.95464H28.047C28.8276 7.95464 29.4663 8.59327 29.4663 9.374C29.4663 11.036 30.6017 10.9535 30.6017 12.8435C30.6017 14.7335 28.8985 15.1058 28.8985 17.8899C28.8985 18.6705 28.2597 19.3092 27.4793 19.3092H20.8087C18.7111 19.3092 18.8353 18.1587 16.7786 18.0661M11.3984 7.95464H16.508V19.3092H11.3984V7.95464Z"
                    stroke="#F98D11"
                    stroke-width="1.5"
                    stroke-miterlimit="2.6131"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-gray-800 font-medium">No Recommendations</p>
                <p className="text-gray-800 text-sm mt-1 mb-4">
                  You don't have permission to access Trusted Adviser
                </p>
              </div>

              <div className="absolute left-0 right-0 bottom-0 px-6 border-t-2 border-gray-200">
                {" "}
                {/* Matches widget padding */}
                <div className="p-2 flex justify-center">
                  <Link
                    href="#"
                    className="text-sm text-[#AD6920] hover:text-[#8a541a] hover:underline flex items-center"
                  >
                    Go to Trusted Adviser
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Added relative positioning */}
        {/* Left Section - Welcome and Platform Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray p-6  shadow relative">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-md font-bold text-gray-800 mb-4">
                Latest announcements
              </h1>
              <div className="space-y-4">
                <p className="text-gray-800">
                  Ost Infinity now supports automatic synchronization from Git
                  to S3
                  <br />
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-4">
                    <p className="text-gray-800 text-sm">
                      Ost Infinity for OpenZFS now supports ViXa identity-First
                      Platform
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 px-6 border-t-2 border-gray-200">
              {" "}
              {/* Matches widget padding */}
              <div className="p-2 flex justify-center">
                <Link
                  href="#"
                  className="text-sm text-[#AD6920] hover:text-[#8a541a] hover:underline flex items-center"
                >
                  view all announcements
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Applications */}
          <div className="bg-gray p-6 rounded-lg shadow relative">
            <div className="mb-8">
              <h5 className="text-md font-bold text-gray-800 mb-4">
                Recent Ost Infinity blog posts
              </h5>
              <div className="space-y-4">
                <p className="text-gray-800">
                  Use ViXa platform to test the resilience of self-management
                  Cassandra
                  <br />
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="mb-4">
                    <p className="text-gray-800 text-sm">
                      Ost Infinity for OpenZFS now supports ViXa identity-First
                      Platform without any data movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 px-6 border-t-2 border-gray-200">
              {" "}
              {/* Matches widget padding */}
              <div className="p-2 flex justify-center">
                <Link
                  href="#"
                  className="text-sm text-[#AD6920] hover:text-[#8a541a] hover:underline flex items-center"
                >
                  view all blogs posts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
