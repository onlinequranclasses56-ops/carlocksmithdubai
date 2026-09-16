export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  longDescription: string
  icon: string
  href: string
  metaTitle: string
  metaDescription: string
  features: string[]
  faq: { question: string; answer: string }[]
}

export const SERVICES: Service[] = [
  {
    slug: 'car-key-service-dubai',
    title: 'Car Key Service Dubai',
    shortTitle: 'Car Key Service',
    description:
      'Professional car key cutting, duplication and programming for all vehicle makes and models across Dubai.',
    longDescription:
      'Our mobile car key service covers everything from basic key cutting and duplication to advanced transponder programming. We come to your location anywhere in Dubai — no need to call a tow truck or visit a dealership.',
    icon: 'key',
    href: '/car-key-service-dubai/',
    metaTitle: 'Car Key Service Dubai | Cutting, Duplication & Programming',
    metaDescription:
      'Professional car key service in Dubai. Key cutting, duplication and programming for all makes and models. Mobile service — we come to you. Call +971 52 642 6161.',
    features: [
      'Key cutting for all vehicle makes and models',
      'Spare key duplication',
      'Remote key fob service',
      'Transponder key service',
      'Smart key service',
      'Mobile service — we come to your location',
    ],
    faq: [
      {
        question: 'What types of car keys can you service in Dubai?',
        answer:
          'We service all types of car keys including standard metal keys, transponder chip keys, remote key fobs, flip keys, and smart proximity keys for most vehicle brands sold in the UAE.',
      },
      {
        question: 'Do you offer mobile car key service in Dubai?',
        answer:
          'Yes. Our technicians come to your location across Dubai. Whether you are at home, at work, or at the roadside, call us and we will dispatch a mobile unit.',
      },
      {
        question: 'How long does a car key service take?',
        answer:
          'Most key cutting and duplication jobs are completed in 30 to 60 minutes on-site. Transponder programming may take longer depending on the vehicle.',
      },
    ],
  },
  {
    slug: 'car-key-repair-dubai',
    title: 'Car Key Repair Dubai',
    shortTitle: 'Car Key Repair',
    description:
      'Repair broken, damaged or worn car keys in Dubai. We fix faulty remote buttons, damaged key shells, and malfunctioning transponder chips.',
    longDescription:
      'A damaged car key does not always mean a full replacement. Our technicians can often repair broken key shells, fix unresponsive remote buttons, replace worn key batteries, and troubleshoot faulty transponder chips — saving you time and cost.',
    icon: 'wrench',
    href: '/car-key-repair-dubai/',
    metaTitle: 'Car Key Repair Dubai | Fix Broken, Damaged & Faulty Keys',
    metaDescription:
      'Car key repair in Dubai. Fix broken key shells, faulty remote buttons, worn transponder chips and more. Mobile service. Call +971 52 642 6161.',
    features: [
      'Broken key shell replacement',
      'Key blade repair or replacement',
      'Remote button repair',
      'Key fob battery replacement',
      'Transponder chip diagnostics and repair',
      'Key cover replacement',
    ],
    faq: [
      {
        question: 'Can a damaged car key be repaired?',
        answer:
          'In many cases, yes. If the key blade is worn or chipped, the shell is cracked, or the remote buttons are unresponsive, our technicians can repair or replace the affected component without needing a full key replacement.',
      },
      {
        question: 'How do I know if my car key needs repairing or replacing?',
        answer:
          'Common signs that your car key needs attention include: the remote not responding, physical cracks or breaks in the key casing, difficulty turning the key in the ignition, or the vehicle failing to recognise the key. Contact us and we will assess the issue.',
      },
      {
        question: 'Is key repair cheaper than replacement?',
        answer:
          'Repair is generally more affordable than a full replacement when the issue is limited to the key shell, battery, or buttons. Our technicians will advise the most appropriate solution after assessment.',
      },
    ],
  },
  {
    slug: 'car-key-replacement-dubai',
    title: 'Car Key Replacement Dubai',
    shortTitle: 'Car Key Replacement',
    description:
      'Complete car key replacement for lost, broken or stolen keys. New keys cut and programmed on-site across Dubai.',
    longDescription:
      'Lost your car key or need a complete replacement? Our mobile technicians carry the equipment to cut and program new keys on-site for most vehicles. We will verify your ownership documents and complete the job at your location.',
    icon: 'refresh',
    href: '/car-key-replacement-dubai/',
    metaTitle: 'Car Key Replacement Dubai | Lost & Damaged Key Solutions',
    metaDescription:
      'Car key replacement in Dubai for lost, broken or stolen keys. New keys cut and programmed on-site. Mobile service all areas. Call +971 52 642 6161.',
    features: [
      'New key cutting and programming',
      'Replacement for lost or stolen keys',
      'All types: standard, transponder, smart key',
      'On-site service — no towing required',
      'Vehicle ownership verification',
      'Available across all Dubai areas',
    ],
    faq: [
      {
        question: 'What do I need for a car key replacement in Dubai?',
        answer:
          'You will need to provide your Emirates ID or passport, vehicle registration card (Mulkiya), and be present at the vehicle. These documents are required to verify ownership before any key is programmed to your car.',
      },
      {
        question: 'Can a locksmith replace a car key without the original?',
        answer:
          'Yes. Our technicians can cut and program a new key from your vehicle identification number (VIN) and the immobiliser system — even if you have no existing key to copy from. This requires ownership documentation.',
      },
      {
        question: 'How long does car key replacement take in Dubai?',
        answer:
          'Most replacements are completed in 45 to 90 minutes on-site. The exact time depends on the vehicle make, model, and key type required.',
      },
    ],
  },
  {
    slug: 'car-key-programming-dubai',
    title: 'Car Key Programming Dubai',
    shortTitle: 'Car Key Programming',
    description:
      'Professional transponder, smart key and remote key programming for all vehicle brands in Dubai. Dealer-level tools on-site.',
    longDescription:
      'Modern car keys contain electronic chips that must be programmed to match your vehicle\'s immobiliser. Our technicians carry professional-grade diagnostic and programming equipment to handle transponder keys, smart proximity keys, remote fobs, and push-start systems for most vehicle brands.',
    icon: 'chip',
    href: '/car-key-programming-dubai/',
    metaTitle: 'Car Key Programming Dubai | Transponder & Smart Key Experts',
    metaDescription:
      'Professional car key programming in Dubai. Transponder, smart key and remote fob programming for all brands. Mobile service. Call +971 52 642 6161.',
    features: [
      'Transponder chip programming',
      'Smart key and proximity key programming',
      'Remote key fob programming',
      'Push-start system programming',
      'Immobiliser synchronisation',
      'Professional diagnostic equipment',
    ],
    faq: [
      {
        question: 'What is car key programming?',
        answer:
          'Car key programming is the process of syncing an electronic chip inside your key (or key fob) to your vehicle\'s immobiliser. Without correct programming, the car will recognise the key shape but not start the engine.',
      },
      {
        question: 'Do I need to visit a dealer to program a car key in Dubai?',
        answer:
          'Not necessarily. Professional automotive locksmiths with the right equipment can program keys for most vehicles on-site, often faster and at lower cost than a main dealer. Bring your ownership documents.',
      },
      {
        question: 'Which vehicles can you program keys for?',
        answer:
          'We programme keys for most major brands available in the UAE including Toyota, Nissan, Honda, Hyundai, Kia, Mitsubishi, Ford, Chevrolet, BMW, Mercedes-Benz, Audi, Lexus and others. Contact us to confirm your specific model.',
      },
    ],
  },
  {
    slug: 'lost-car-keys-dubai',
    title: 'Lost Car Keys Dubai',
    shortTitle: 'Lost Car Keys',
    description:
      'Emergency service for lost car keys in Dubai. Our mobile technicians will reach you, verify your identity, and get you back on the road.',
    longDescription:
      'Losing your car keys in Dubai is stressful, but our mobile team can reach you wherever you are and provide a complete solution — from cutting a new key to programming it to your vehicle. We carry the equipment to help with most vehicle types without requiring a tow.',
    icon: 'search',
    href: '/lost-car-keys-dubai/',
    metaTitle: 'Lost Car Keys Dubai | Emergency Key Replacement Service',
    metaDescription:
      'Lost your car keys in Dubai? Our mobile technicians come to you, verify ownership, and cut and program a new key on-site. Call +971 52 642 6161.',
    features: [
      'Emergency response across all Dubai areas',
      'New key cut and programmed on-site',
      'No towing or dealer visit required',
      'Identity and ownership verification',
      'All vehicle types including transponder and smart keys',
      'Mobile service 24/7',
    ],
    faq: [
      {
        question: 'What should I do if I lose my car keys in Dubai?',
        answer:
          'Stay with your vehicle if safe to do so. Call a mobile car locksmith who can come to you with the right equipment. Have your Emirates ID and vehicle registration card (Mulkiya) ready to verify your ownership.',
      },
      {
        question: 'Can you make a car key without the original in Dubai?',
        answer:
          'Yes. Using your vehicle identification number (VIN) and professional diagnostic equipment, we can cut and programme a new key to your car without needing the original as a template.',
      },
      {
        question: 'Should I also change my car locks if my keys were stolen?',
        answer:
          'If your keys were stolen — as opposed to simply lost — it is worth considering rekeying or reprogramming your vehicle so any stolen keys no longer work. We can advise on the options for your specific vehicle.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
