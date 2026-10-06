import React from 'react'
import Image from 'next/image'
import { BASE_IMAGE_URL } from "@/pages/api/endpoint";
import { Download } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    partnerName: "First United Bank & Trust",
    partnerLogo: `${BASE_IMAGE_URL}/case-studies/first-united.png`,
    title: "FIRST UNITED BANK & TRUST",
    description:
      "First United Bank & Trust is a full-service community bank with 25 branches serving customers in Maryland and West Virginia.",
    industry: "Banking",
  },
  {
    id: 2,
    partnerName: "Centogene Medical",
    partnerLogo: `${BASE_IMAGE_URL}/case-studies/centogene.png`,
    title: "CENTOGENE MEDICAL",
    description:
      "Headquartered in Rostock, Germany, Centogene Medical is a manufacturing company of fixed and mobile workstations for electronic data capture that increases the productivity of customer organizations.",
    industry: "Healthcare",
  },
  {
    id: 3,
    partnerName: "Ulster Bank",
    partnerLogo: `${BASE_IMAGE_URL}/case-studies/ulster-bank.png`,
    title: "ULSTER BANK",
    description:
      "Ulster Bank are the third largest commercial bank in Ireland with over 3,000 employees, 1.9 million customers and a balance sheet of over €20 billion. Founded in 1836, Ulster Bank is a subsidiary of UK head-quartered NatWest, one of the top ten banks in the world.",
    industry: "Banking",
  },
  {
    id: 4,
    partnerName: "Parramatta Leagues Club",
    partnerLogo: `${BASE_IMAGE_URL}/case-studies/parra-league.png`,
    title: "PARRAMATTA LEAGUES CLUB",
    description:
      "Parra Leagues is a community club within Parramatta, a suburb of Sydney, that aims to provide a place where locals can enjoy delicious food at various bars and restaurants, and great entertainment in a family-friendly atmosphere.",
    industry: "Hospitality",
  },
  {
    id: 5,
    partnerName: "Southampton FC",
    partnerLogo: `${BASE_IMAGE_URL}/case-studies/sothampton.png`,
    title: "SOUTHAMPTON FOOTBALL CLUB",
    description:
      "Based in Southampton, Hampshire, England, Southampton Football Club is a professional football club, consisting of a men’s team that plays in the Premier League and a women’s team that plays in the Women’s Championship league.",
    industry: "Sports",
  },
  {
    id: 6,
    partnerName: "Eden Prairie Schools",
    partnerLogo: `${BASE_IMAGE_URL}/case-studies/eden-prairie.png`,
    title: "EDEN PRAIRIE SCHOOLS",
    description:
      "From early childhood programs through high school, Eden Prairie Schools has a strong reputation for academic excellence, personalized opportunities for all students, and supportive school communities.",
    industry: "Education",
  },
];



export default function CaseStudyInfo({data}) {
  return (
    <section className="container  py-12 mx-auto sm:px-8 md:px-16">
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div
            key={item.title}
            className="w-full p-0.5 rounded-3xl min-h-[456px] max-w-[345px]"
          >
            <div className="bg-[#111865] rounded-3xl  flex flex-col space-y-6 min-h-[456px]">
              {/* Logo container with flex justify-between */}
              <div className="flex rounded-t-2xl   justify-between items-center bg-gradient-to-tr from-[#12145E] to-[#0543A6] min-h-[152px]">
                {/* OST Infinity logo on left */}
                <div className="w-[126px] h-[50px] relative ml-6">
                  <Image
                    src={`${BASE_IMAGE_URL}/global/ost-infinity-logo.svg`}
                    alt="OST INFINITY"
                    fill
                    style={{ objectFit: 'contain'}}
                  />
                </div>
                
                {/* Partner logo on right */}
                <div className="w-[126px] h-[50px] relative mr-6">
                  <Image
                    src={item.partnerLogo}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
              <div className='px-5'>
              <h4 className="text-2xl font-semibold text-white mb-3">{item.title}</h4>
              <p className="text-white/80 flex-grow">{item.description}</p>
               <div className="flex items-center mt-5 text-[#C67323]">
      <Download fontSize="small" />
      <span className="ml-2">Download File</span>
    </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}