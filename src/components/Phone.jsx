
import React, { useState, useEffect, useRef, forwardRef } from 'react';

const PhoneSelect = forwardRef(({ phone, setPhone }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const phones = [
  { code: 'AF', name: '+93' },
  { code: 'AL', name: '+355' },
  { code: 'DZ', name: '+213' },
  { code: 'AS', name: '+1684' },
  { code: 'AD', name: '+376' },
  { code: 'AO', name: '+244' },
  { code: 'AI', name: '+1264' },
  { code: 'AQ', name: '+1268' },
  { code: 'AG', name: '+54' },
  { code: 'AR', name: '+374' },
  { code: 'AM', name: '+61' },
  { code: 'AW', name: '+43' },
  { code: 'AU', name: '+994' },
  { code: 'AT', name: '+1242' },
  { code: 'AZ', name: '+973' },
  { code: 'BS', name: '+880' },
  { code: 'BH', name: '+1246' },
  { code: 'BD', name: '+375' },
  { code: 'BB', name: '+32' },
  { code: 'BY', name: '+501' },
  { code: 'BE', name: '+229' },
  { code: 'BZ', name: '+975' },
  { code: 'BJ', name: '+591' },
  { code: 'BM', name: '+387' },
  { code: 'BT', name: '+267' },
  { code: 'BO', name: '+55' },
  { code: 'BA', name: '+673' },
  { code: 'BW', name: '+359' },
  { code: 'BR', name: '+226' },
  { code: 'BN', name: '+257' },
  { code: 'BG', name: '+855' },
  { code: 'BF', name: '+237' },
  { code: 'BI', name: '+1' },
  { code: 'KH', name: '+238' },
  { code: 'CM', name: '+1345' },
  { code: 'CA', name: '+236' },
  { code: 'CV', name: '+235' },
  { code: 'CF', name: '+56' },
  { code: 'TD', name: '+86' },
  { code: 'CL', name: '+57' },
  { code: 'CN', name: '+269' },
  { code: 'CO', name: '+506' },
  { code: 'KM', name: '+385' },
  { code: 'CG', name: '+53' },
  { code: 'CD', name: '+357' },
  { code: 'CR', name: '+420' },
  { code: 'HR', name: '+45' },
  { code: 'CY', name: '+253' },
  { code: 'CZ', name: '+1809/829/849' },
  { code: 'DK', name: '+670' },
  { code: 'DJ', name: '+593' },
  { code: 'DM', name: '+20' },
  { code: 'DO', name: '+503' },
  { code: 'EC', name: '+240' },
  { code: 'EG', name: '+291' },
  { code: 'SV', name: '+372' },
  { code: 'GQ', name: '+251' },
  { code: 'ER', name: '+679' },
  { code: 'EE', name: '+358' },
  { code: 'SZ', name: '+33' },
  { code: 'ET', name: '+241' },
  { code: 'FJ', name: '+220' },
  { code: 'FI', name: '+995' },
  { code: 'FR', name: '+49' },
  { code: 'GA', name: '+233' },
  { code: 'GM', name: '+30' },
  { code: 'GE', name: '+502' },
  { code: 'DE', name: '+224' },
  { code: 'GH', name: '+245' },
  { code: 'GR', name: '+592' },
  { code: 'GD', name: '+509' },
  { code: 'GT', name: '+504' },
  { code: 'GN', name: '+852' },
  { code: 'GY', name: '+36' },
  { code: 'HT', name: '+354' },
  { code: 'HN', name: '+91' },
  { code: 'HK', name: '+62' },
  { code: 'HU', name: '+98' },
  { code: 'IS', name: '+964' },
  { code: 'IN', name: '+353' },
  { code: 'ID', name: '+972' },
  { code: 'IR', name: '+39' },
  { code: 'IQ', name: '+1876' },
  { code: 'IE', name: '+81' },
  { code: 'IL', name: '+962' },
  { code: 'JM', name: '+254' },
  { code: 'JP', name: '+82' },
  { code: 'JO', name: '+965' },
  { code: 'KZ', name: '+996' },
  { code: 'KE', name: '+856' },
  { code: 'KR', name: '+371' },
  { code: 'KW', name: '+961' },
  { code: 'LV', name: '+266' },
  { code: 'LB', name: '+231' },
  { code: 'LY', name: '+218' },
  { code: 'LT', name: '+370' },
  { code: 'LU', name: '+352' },
  { code: 'MG', name: '+853' },
  { code: 'MW', name: '+389' },
  { code: 'MY', name: '+261' },
  { code: 'MV', name: '+265' },
  { code: 'ML', name: '+60' },
  { code: 'MT', name: '+960' },
  { code: 'MX', name: '+223' },
  { code: 'MD', name: '+356' },
  { code: 'MC', name: '+692' },
  { code: 'MN', name: '+230' },
  { code: 'ME', name: '+52' },
  { code: 'MA', name: '+373' },
  { code: 'MZ', name: '+377' },
  { code: 'MM', name: '+976' },
  { code: 'NA', name: '+382' },
  { code: 'NP', name: '+212' },
  { code: 'NL', name: '+258' },
  { code: 'NZ', name: '+95' },
  { code: 'NG', name: '+264' },
  { code: 'MK', name: '+977' },
  { code: 'NO', name: '+31' },
  { code: 'OM', name: '+64' },
  { code: 'PK', name: '+505' },
  { code: 'PA', name: '+227' },
  { code: 'PG', name: '+234' },
  { code: 'PY', name: '+47' },
  { code: 'PE', name: '+968' },
  { code: 'PH', name: '+92' },
  { code: 'PL', name: '+507' },
  { code: 'PT', name: '+51' },
  { code: 'QA', name: '+63' },
  { code: 'RO', name: '+48' },
  { code: 'RU', name: '+351' },
  { code: 'SA', name: '+974' },
  { code: 'SN', name: '+40' },
  { code: 'RS', name: '+7' },
  { code: 'SG', name: '+250' },
  { code: 'SK', name: '+966' },
  { code: 'SI', name: '+221' },
  { code: 'ZA', name: '+381' },
  { code: 'ES', name: '+65' },
  { code: 'LK', name: '+421' },
  { code: 'SE', name: '+386' },
  { code: 'CH', name: '+27' },
  { code: 'TW', name: '+34' },
  { code: 'TZ', name: '+94' },
  { code: 'TH', name: '+249' },
  { code: 'TR', name: '+597' },
  { code: 'UG', name: '+46' },
  { code: 'UA', name: '+41' },
  { code: 'AE', name: '+963' },
  { code: 'GB', name: '+886' },
  { code: 'US', name: '+992' },
  { code: 'UY', name: '+255' },
  { code: 'UZ', name: '+66' },
  { code: 'VE', name: '+228' },
  { code: 'VN', name: '+676' },
  { code: 'YE', name: '+1868' },
  { code: 'ZM', name: '+216' },
  { code: 'ZW', name: '+90' },
  { code: 'ZM', name: '+993' },
  { code: 'ZM', name: '+256' },
  { code: 'ZM', name: '+380' },
  { code: 'ZM', name: '+44' },
   { code: 'ZM', name: '+598' },
   { code: 'ZM', name: '+998' },
   { code: 'ZM', name: '+678' },
   { code: 'ZM', name: '+379' },
   { code: 'ZM', name: '+58' },
   { code: 'ZM', name: '+84' },
   { code: 'ZM', name: '+967' },
    { code: 'ZM', name: '+260' },
    { code: 'ZM', name: '+263' },
];

  // Initialize selected option
  useEffect(() => {
    if (phone) {
      const option = phones.find(p => `${p.name}` === phone);
      setSelectedOption(option);
    }
  }, [phone]);

  // Filter options based on search term
  const filteredPhones = phones.filter(phone => 
    phone.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    phone.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (phone) => {
    setPhone(`${phone.name}`);
    setSelectedOption(phone);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Custom select button */}
      <button
        type="button"
        className="flex items-center justify-between w-full px-3 py-2 text-left border border-gray-300 rounded-l-md bg-[#132170] focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
        ref={ref}
      >
        <span>{selectedOption ? `${selectedOption.name}` : 'country'}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#132170] border border-gray-300 rounded-md shadow-lg">
          {/* Search input */}
          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Search country code..."
              className="w-full p-2 border border-gray-300 rounded"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          
          {/* Options list */}
          <div className="max-h-60 overflow-y-auto">
            {filteredPhones.length > 0 ? (
              filteredPhones.map((phone) => (
                <div
                  key={`${phone.code}-${phone.name}`}
                  className={`p-3 cursor-pointer hover:bg-[#132170] ${selectedOption?.name === phone.name ? 'bg-[#132170] text-white' : 'bg-[#132170]'}`}
                  onClick={() => handleSelect(phone)}
                >
                  {phone.name}
                </div>
              ))
            ) : (
              <div className="p-3 text-white">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

// Your phones array remains the same...

export default PhoneSelect;
