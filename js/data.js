/* ============================================================
   APEX MOTO — Site Data
   js/data.js
   ============================================================ */

'use strict';

const APEXMOTO_DATA = {

  business: {
    name: 'Apex Moto',
    tagline: 'Factory-certified auto repair since 1998',
    phone: '(760) 555-0182',
    email: 'service@apexmoto.com',
    address: {
      street: '2140 Industrial Blvd, Unit 4',
      city: 'San Marcos',
      state: 'CA',
      zip: '92069',
      full: '2140 Industrial Blvd, Unit 4, San Marcos, CA 92069',
    },
    hours: [
      { day: 'Monday',    open: '7:00 AM', close: '6:00 PM', closed: false },
      { day: 'Tuesday',   open: '7:00 AM', close: '6:00 PM', closed: false },
      { day: 'Wednesday', open: '7:00 AM', close: '6:00 PM', closed: false },
      { day: 'Thursday',  open: '7:00 AM', close: '6:00 PM', closed: false },
      { day: 'Friday',    open: '7:00 AM', close: '6:00 PM', closed: false },
      { day: 'Saturday',  open: '8:00 AM', close: '4:00 PM', closed: false },
      { day: 'Sunday',    open: null,       close: null,      closed: true  },
    ],
    social: {
      facebook:  'https://facebook.com',
      instagram: 'https://instagram.com',
      yelp:      'https://yelp.com',
      google:    'https://google.com',
    },
  },

  stats: [
    { value: 26,    suffix: '+',  label: 'Years in Business' },
    { value: 18000, suffix: '+',  label: 'Vehicles Serviced' },
    { value: 4.9,   suffix: '★', label: 'Avg Rating',        decimal: true },
    { value: 97,    suffix: '%',  label: 'Repeat Customers' },
    { value: 24,    suffix: 'h',  label: 'Avg Turnaround' },
  ],

  services: [
    {
      icon: '🔧',
      title: 'Engine Diagnostics',
      description: 'Advanced OBD-II scanning, compression tests, and full engine analysis. We identify root causes — not symptoms — using factory-level diagnostic tools.',
      price: 'From $89',
      tags: ['Check Engine Light', 'Performance', 'Fuel Systems'],
    },
    {
      icon: '⚙️',
      title: 'Transmission Service',
      description: 'Fluid flushes, filter replacement, clutch adjustments, and full rebuilds on automatic and manual transmissions. Every make and model.',
      price: 'From $149',
      tags: ['Auto & Manual', 'CVT', 'Fluid Flush'],
    },
    {
      icon: '🛞',
      title: 'Brake Systems',
      description: 'Complete brake inspection, pad and rotor replacement, fluid flush, and caliper service. Stop safely — every time.',
      price: 'From $129',
      tags: ['Pads & Rotors', 'ABS', 'Calipers'],
    },
    {
      icon: '🔩',
      title: 'Suspension & Steering',
      description: 'Shocks, struts, control arms, tie rod ends, wheel alignments, and full suspension rebuilds. Get your handling back.',
      price: 'From $169',
      tags: ['Alignment', 'Shocks & Struts', 'Steering'],
    },
    {
      icon: '⚡',
      title: 'EV & Hybrid Service',
      description: 'Certified EV and hybrid technicians handling battery diagnostics, electric motor service, regenerative braking, and high-voltage systems.',
      price: 'From $99',
      tags: ['Battery Health', 'Regen Braking', 'Charging'],
    },
    {
      icon: '🌡️',
      title: 'Heating & Cooling',
      description: 'A/C recharge, compressor replacement, radiator flush, coolant system repair, and thermostat service. Stay comfortable year-round.',
      price: 'From $79',
      tags: ['A/C Recharge', 'Radiator', 'Coolant'],
    },
    {
      icon: '🔋',
      title: 'Electrical Systems',
      description: 'Battery replacement, alternator and starter repair, wiring harness diagnostics, and complete electrical troubleshooting.',
      price: 'From $69',
      tags: ['Battery', 'Alternator', 'Wiring'],
    },
    {
      icon: '🛢️',
      title: 'Preventive Maintenance',
      description: 'Oil changes, tire rotations, filter replacements, fluid top-offs, and factory-scheduled maintenance to keep your warranty intact.',
      price: 'From $49',
      tags: ['Oil Change', 'Tire Rotation', 'Scheduled'],
    },
    {
      icon: '🚗',
      title: 'Pre-Purchase Inspection',
      description: 'Comprehensive 150-point inspection for used vehicles. Know exactly what you\'re buying before you sign anything.',
      price: 'From $119',
      tags: ['Used Car', '150-Point Check', 'Report'],
    },
  ],

  team: [
    {
      initials: 'MR',
      name: 'Mike Reyes',
      role: 'Owner & Master Technician',
      bio: '26 years diagnosing the unfixable. ASE Master certified with OEM training from Ford and Toyota.',
      certifications: ['ASE Master', 'OEM Ford', 'OEM Toyota'],
      gradient: ['#C94208', '#F5A623'],
    },
    {
      initials: 'SC',
      name: 'Sofia Chen',
      role: 'EV & Hybrid Specialist',
      bio: 'Former Tesla service tech. Handles all high-voltage and electric drivetrain work with zero compromise.',
      certifications: ['EV Certified', 'ASE L3', 'High Voltage'],
      gradient: ['#185FA5', '#5DCAA5'],
    },
    {
      initials: 'DM',
      name: 'Derek Monroe',
      role: 'Transmission Specialist',
      bio: 'Rebuilt over 1,200 transmissions. If it shifts, he knows it.',
      certifications: ['ATSG Certified', 'ASE A2', 'CVT'],
      gradient: ['#3B6D11', '#F5A623'],
    },
    {
      initials: 'LP',
      name: 'Luis Perez',
      role: 'Alignment & Suspension',
      bio: 'Hunter alignment certified. Former motorsport crew chief with a thing for perfect geometry.',
      certifications: ['Hunter Cert.', 'ASE A4', 'ASE A5'],
      gradient: ['#533DAB', '#D4537E'],
    },
  ],

  reviews: [
    {
      stars: 5,
      text: '"These guys saved me from a $4,000 dealership quote. Mike found the real issue in 20 minutes — a cracked vacuum line. Cost me $85. Honest, fast, and incredibly skilled."',
      name: 'Rachel T.',
      vehicle: '2019 Honda Accord',
      initials: 'RT',
    },
    {
      stars: 5,
      text: '"Brought my Model 3 in when no one else in town would touch it. Sofia diagnosed a charging issue that Tesla\'s own app missed. Back on the road same day. Phenomenal."',
      name: 'James W.',
      vehicle: '2022 Tesla Model 3',
      initials: 'JW',
    },
    {
      stars: 5,
      text: '"The free 27-point inspection caught two issues I had no idea about. Preventive repair cost $340. The alternative would have been a blown engine. Worth every cent."',
      name: 'Maria G.',
      vehicle: '2017 Toyota 4Runner',
      initials: 'MG',
    },
    {
      stars: 5,
      text: '"Transmission rebuild done in 3 days — they gave me a loaner vehicle and texted me updates throughout. Derek really knows his craft. My truck shifts like new."',
      name: 'Carlos P.',
      vehicle: '2015 Ford F-150',
      initials: 'CP',
    },
    {
      stars: 5,
      text: '"I\'ve been coming here for 8 years. Never once tried to upsell me on something I didn\'t need. That kind of honesty is rare in this industry. Family for life."',
      name: 'Sharon K.',
      vehicle: '2020 Subaru Outback',
      initials: 'SK',
    },
    {
      stars: 5,
      text: '"Best pre-purchase inspection in the county. Their report saved me from a flood-damaged car the dealer was trying to pass off as clean. Detailed, thorough, worth every penny."',
      name: 'Tom H.',
      vehicle: 'Pre-Purchase Inspection',
      initials: 'TH',
    },
  ],

  pricing: [
    {
      name: 'Basic Service',
      price: 49,
      period: 'per visit',
      features: [
        'Full synthetic oil change',
        'Tire rotation & pressure check',
        'Visual safety inspection',
        'Fluid level check & top-off',
        'Battery health test',
      ],
      featured: false,
    },
    {
      name: 'Complete Care',
      price: 149,
      period: 'per visit',
      features: [
        'Everything in Basic Service',
        '27-point digital inspection',
        'Brake system inspection',
        'Air & cabin filter check',
        'Wiper blade check',
        'Alignment angle inspection',
        'Priority scheduling',
      ],
      featured: true,
    },
    {
      name: 'Elite Annual',
      price: 499,
      period: 'per year',
      features: [
        'Everything in Complete Care',
        '4× oil changes per year',
        'Unlimited tire rotations',
        'Free loaner vehicle',
        'Emergency roadside support',
        'Annual alignment check',
        'Dedicated service advisor',
      ],
      featured: false,
    },
  ],

  faqs: [
    {
      question: 'Do you work on all vehicle makes and models?',
      answer: 'Yes — we service all domestic and import makes including Toyota, Honda, Ford, Chevrolet, BMW, Mercedes-Benz, Audi, Subaru, Tesla, and more. Our technicians have OEM training across multiple manufacturers.',
    },
    {
      question: 'How long does a typical repair take?',
      answer: 'Most maintenance services (oil changes, brakes, tire rotations) are completed same-day, often within 2–3 hours. Complex repairs like transmission rebuilds or engine work typically take 2–4 business days. We\'ll give you an accurate time estimate after initial inspection.',
    },
    {
      question: 'Do you offer loaner vehicles?',
      answer: 'Yes — free loaner vehicles are available for all repairs estimated to take longer than 4 hours, subject to availability. Please request a loaner when booking your appointment.',
    },
    {
      question: 'Are your repairs covered by warranty?',
      answer: 'All parts and labor are covered by our 24-month / 24,000-mile warranty — whichever comes first. This is honored nationwide. If a covered repair fails, we fix it at no cost to you.',
    },
    {
      question: 'Will servicing my car here void my manufacturer warranty?',
      answer: 'No. Under the Magnuson-Moss Warranty Act, manufacturers cannot void your warranty simply because you had service performed at an independent shop, as long as the service meets manufacturer specifications — which ours does.',
    },
    {
      question: 'How do I know what my car actually needs vs. what\'s being upsold?',
      answer: 'We use digital multi-point inspections with photos sent directly to your phone. You see exactly what we see, with a clear breakdown of what\'s urgent, what\'s recommended, and what can wait. No pressure, no guesswork.',
    },
  ],

};
