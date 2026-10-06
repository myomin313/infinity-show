import React from "react";
import { Search } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    partnerName: "First United Bank & Trust",
    partnerLogo: "/assets/images/logos/first-united-bank.svg",
    title: "FIRST UNITED BANK & TRUST",
    description:
      "First United Bank & Trust is a full-service community bank with 25 branches serving customers in Maryland and West Virginia.",
    industry: "Banking",
  },
  {
    id: 2,
    partnerName: "Centogene Medical",
    partnerLogo: "/assets/images/logos/centogene-medical.svg",
    title: "CENTOGENE MEDICAL",
    description:
      "Headquartered in Rostock, Germany, Centogene Medical is a manufacturing company of fixed and mobile workstations for electronic data capture that increases the productivity of customer organizations.",
    industry: "Healthcare",
  },
  {
    id: 3,
    partnerName: "Ulster Bank",
    partnerLogo: "/assets/images/logos/ulster-bank.svg",
    title: "ULSTER BANK",
    description:
      "Ulster Bank are the third largest commercial bank in Ireland with over 3,000 employees, 1.9 million customers and a balance sheet of over €20 billion. Founded in 1836, Ulster Bank is a subsidiary of UK head-quartered NatWest, one of the top ten banks in the world.",
    industry: "Banking",
  },
  {
    id: 4,
    partnerName: "Parramatta Leagues Club",
    partnerLogo: "/assets/images/logos/parramatta-leagues.svg",
    title: "PARRAMATTA LEAGUES CLUB",
    description:
      "Parra Leagues is a community club within Parramatta, a suburb of Sydney, that aims to provide a place where locals can enjoy delicious food at various bars and restaurants, and great entertainment in a family-friendly atmosphere.",
    industry: "Hospitality",
  },
  {
    id: 5,
    partnerName: "Southampton FC",
    partnerLogo: "/assets/images/logos/southampton-fc.svg",
    title: "SOUTHAMPTON FOOTBALL CLUB",
    description:
      "Based in Southampton, Hampshire, England, Southampton Football Club is a professional football club, consisting of a men’s team that plays in the Premier League and a women’s team that plays in the Women’s Championship league.",
    industry: "Sports",
  },
  {
    id: 6,
    partnerName: "Eden Prairie Schools",
    partnerLogo: "/assets/images/logos/eden-prairie-schools.svg",
    title: "EDEN PRAIRIE SCHOOLS",
    description:
      "From early childhood programs through high school, Eden Prairie Schools has a strong reputation for academic excellence, personalized opportunities for all students, and supportive school communities.",
    industry: "Education",
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="container px-6 py-10 mx-auto md:px-16">
    <h1>Case Studies</h1>
    <p>Read about companies like yours who found success with Ost Infinity</p>
      <div className="flex flex-col items-center mb-8 space-x-5 space-y-4 md:flex-row md:space-y-0">
        <div className="relative w-full md:w-1/3">
            <span className="absolute inset-y-0 flex items-center left-3">
                <Search className="w-5 h-5 text-white" />
            </span>
            <input
                type="text"
                placeholder="Search products"
                className="
                w-full h-10 pl-10 pr-4
                bg-[#611C7E] bg-opacity-10 placeholder-white text-white
                focus:outline-none focus:ring-2 focus:ring-blue-400
                "
            />
            </div>
            <select
            className="w-full px-4 py-2 bg-transparent border md:w-1/4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
            <option value="">All Industries</option>
            <option value="Banking">Banking</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Sports">Sports</option>
            <option value="Education">Education</option>
            </select>
        </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseItem) => (
          <div key={caseItem.id} className="p-[1px] rounded-xl bg-gradient-to-tr from-[#F98D11] to-[#199AE2]">
            <div className="bg-gradient-to-tr from-[#0D0F49] to-[#0448AD] p-6 rounded-lg h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <img
                  src="/assets/images/logo-color-footer.svg"
                  alt="ST INFINITY"
                  className="w-auto h-6"
                />
                <img
                  src={caseItem.partnerLogo}
                  alt={caseItem.partnerName}
                  className="w-auto h-6"
                />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">
                {caseItem.title}
              </h3>

              <p className="flex-grow text-sm text-white/90">
                {caseItem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
