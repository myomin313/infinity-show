'use client'

import { useState } from 'react'
import { Search, LayoutList, LayoutGrid, Filter, ChevronDown } from 'lucide-react'

export default function JobListSection() {
  const [search, setSearch] = useState('')

  const jobs = [
    {
      href: '/careers/position-details',
      title: 'Secure Access Expert - IAM, PAM, PKI',
      posted: 'Posted more than 30 days ago',
      closeDate: 'Close Date: 26th April 2025'
    },
    {
      href: '/careers/position-details',
      title: 'Director of Audit Compliance',
      posted: 'Posted more than 30 days ago',
      closeDate: 'Close Date: 26th April 2025'
    },
  ]

  return (
    <section className="px-6 text-white pt-30 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg mb-15">
          To review the job posting details, click on the job title of the position for which you are interested.
          <br />
          Or please use search button by providing the job titles and job details.
        </p>

        <div className="flex flex-col items-start justify-between gap-4 pb-4 border-b md:flex-row md:items-center border-white/20">
          <div className="relative w-full max-w-sm">
            <Search className="absolute w-4 h-4 text-white top-3 left-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 text-white placeholder-white/70 bg-[#882C8E] rounded-sm outline-none"
            />
          </div>

          <div className="flex items-center space-x-6 text-sm text-white/90">
            <span>{jobs.length} jobs found</span>
            <LayoutList className="w-5 h-5 cursor-pointer" />
            <LayoutGrid className="w-5 h-5 cursor-pointer" />
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Sort</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Filter className="w-4 h-4" />
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="pb-4 border-b border-white/20">
              <a href={`${job.href}`} className="text-lg font-semibold text-orange-400 hover:underline">
                {job.title}
              </a>
              <div className="flex flex-col justify-end mt-1 space-x-8 text-sm md:flex-row text-white/80">
                <span>{job.posted}</span>
                <span>{job.closeDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
