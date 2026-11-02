import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import image5 from "../images/5.png";
import image6 from "../images/6.png";
import image7 from "../images/7.png";
import image8 from "../images/8.png";
import image9 from "../images/9.png";
import image10 from "../images/10.png";
import image11 from "../images/11.png";

export const products = [
  {
    id: 1,
    slug: 'fiber-laser-single-pallet',
    name: 'Fiber Laser Cutting Machine – Single Pallet',
    shortName: 'Single Pallet Fiber Laser',
    category: 'Fiber Laser Cutting',
    tag: 'Industrial Laser',
    image: image1,
    description:
      'Highly efficient fiber laser cutting machines designed for flexible production requirements and precision metal fabrication.',
    intro:
      'Fiber laser cutting technology is increasingly important in the metal fabrication industry. Bachan Industries offers single pallet machines designed for a wide range of industrial applications, from signage and interior decoration to automotive components and sheet metal manufacturing.',
    applications: [
      'Metal signage',
      'Interior decoration',
      'Engineering components',
      'Sheet metal cabinets',
      'Automobile industry',
      'Advertising industry',
      'Kitchenware and home appliances',
      'Doors and windows',
    ],
    features: [
      'Highly efficient fiber laser technology',
      'Precision metal cutting',
      'Flexible production capabilities',
      'Autofocus OSPRI cutting head',
      'IPG / Max laser source compatibility',
      'High-speed machine movement',
    ],
    specifications: [
      { label: 'Working Area X Axis', values: ['1550mm', '2050mm', '2050mm', '2050mm'] },
      { label: 'Working Area Y Axis', values: ['3050mm', '4050mm', '6050mm', '6550mm'] },
      { label: 'Z Axis', values: ['120mm', '120mm', '120mm', '120mm'] },
      { label: 'Laser Source', values: ['IPG / Max', 'IPG / Max', 'IPG / Max', 'IPG / Max'] },
      { label: 'Cutting Head', values: ['Autofocus OSPRI', 'Autofocus OSPRI', 'Autofocus OSPRI', 'Autofocus OSPRI'] },
      { label: 'Max Acceleration', values: ['1.4G', '1.4G', '1.4G', '1.4G'] },
      { label: 'Max Moving Speed', values: ['140m/min', '140m/min', '140m/min', '140m/min'] },
      { label: 'Position Accuracy', values: ['0.03mm', '0.03mm', '0.03mm', '0.03mm'] },
      { label: 'Repeat Position Accuracy', values: ['0.02mm', '0.02mm', '0.02mm', '0.02mm'] },
    ],
    models: ['B1 3015', 'B1 4020', 'B1 6020', 'B1 6520'],
  },

  {
    id: 2,
    slug: 'plasma-cutting-bi-2108',
    name: 'Plasma Cutting Machine BI-2108',
    shortName: 'Plasma Cutting BI-2108',
    category: 'Plasma Cutting',
    tag: 'Heavy Duty',
    image: image2,
    description:
      'A heavy-duty plasma cutting solution combining efficient cutting performance with low power consumption and maintenance.',
    intro:
      'The BI-2108 plasma cutting machine is designed for industrial metal cutting applications. Its heavy-duty T-rail construction, servo-driven movement and integrated electrical panel support smooth and efficient operations.',
    features: [
      'Low power consumption',
      'Cutting capacity up to 16mm',
      'Heavy-duty T-rails for smooth operation',
      'Integrated electrical panel system',
      'High accuracy torch station',
      'Oxy-fuel attachment available as an option',
      'High-speed servo motor and gears',
      'Low maintenance requirements',
    ],
    specifications: [
      { label: 'Model', value: 'BI-2108' },
      { label: 'Cutting Thickness', value: 'Up to 16mm' },
      { label: 'Effective Cutting Size', value: '7000mm × 2550mm' },
      { label: 'Rail System', value: 'Heavy-duty T-Rails' },
      { label: 'Torch Station', value: 'High accuracy' },
      { label: 'Oxy-Fuel Attachment', value: 'Optional' },
      { label: 'Drive System', value: 'Servo Motor & Gears' },
    ],
  },

  {
    id: 3,
    slug: 'laser-head-pinion',
    name: 'Laser Head & Pinion',
    shortName: 'Laser Head & Pinion',
    category: 'Laser Accessories',
    tag: 'Precision Components',
    image: image3,
    gallery: [
      'https://bachancnc.com/wp-content/uploads/2023/02/2-2-1.png',
      'https://bachancnc.com/wp-content/uploads/2023/02/1-1.png',
    ],
    intro:
      'Bachan Industries offers laser cutting components and accessories designed to support precision, machine performance and reliable operation.',
    description:
      'Explore intelligent autofocus cutting head technology and precision components from established manufacturers.',
    features: [
      'High-speed automatic focusing',
      'Servo motor controlled focusing',
      'Dust-proof three-window protection design',
      'QBH and QD connector compatibility',
      'Modular cartridge for convenient maintenance',
      'Optics temperature monitoring',
      'Air leakage monitoring',
      'Protection window monitoring',
    ],
    specifications: [
      { label: 'Cutting Head Models', value: 'LC608 / LC808' },
      { label: 'Laser Power', value: 'Up to 15000W' },
      { label: 'Focusing', value: 'Intelligent Auto Focus' },
      { label: 'Connector', value: 'QBH / QD' },
      { label: 'Protection', value: 'Three protection windows' },
    ],
    components: [
      {
        name: 'Intelligent Autofocus Cutting Head',
        image: 'https://bachancnc.com/wp-content/uploads/2023/02/4-2.png',
      },
      {
        name: 'Hiwin Taiwan',
        image: 'https://bachancnc.com/wp-content/uploads/2023/02/2-2-1.png',
      },
      {
        name: 'YYC Taiwan',
        image: 'https://bachancnc.com/wp-content/uploads/2023/02/1-1.png',
      },
    ],
  },

  {
    id: 4,
    slug: 'special-fiber-fusion-splicer-fsm-100',
    name: 'Special Fiber Fusion Splicer FSM-100 Series',
    shortName: 'FSM-100 Series',
    category: 'Fiber Technology',
    tag: 'Advanced Technology',
    image: image5,
    description:
      'Advanced specialty fiber splicing technology for manufacturing, laboratory and research applications.',
    intro:
      'Bachan offers a complete solution for fiber splicing. The Fujikura FSM-100 series incorporates innovative technologies to address the growing splicing requirements of factories, manufacturing facilities, laboratories and R&D applications.',
    features: [
      'Optimal Plasma Zone Control',
      'Patented Split V-groove technology',
      'Observation method for fiber rotation alignment',
      'Enhanced Sweep Plasma',
      'Enhanced Power Calibrations',
      'Dual Splice Loss Estimation',
      'USB Communication',
      'GPIB Communication',
    ],
    applications: [
      'Specialty fiber splicing',
      'Large diameter fibers (LDFs)',
      'Polarization maintaining fibers (PMFs)',
      'Manufacturing facilities',
      'Laboratory applications',
      'Research and development',
    ],
  },

  {
    id: 5,
    slug: 'plasma-cutting-bi-1405',
    name: 'Plasma Cutting Machine BI-1405',
    shortName: 'Plasma Cutting BI-1405',
    category: 'Plasma Cutting',
    tag: 'Industrial Performance',
    image: image6,
    description:
      'An industrial plasma cutting solution with high dynamic performance, integrated suction and an efficient smoke exhaust system.',
    intro:
      'The BI-1405 plasma cutting machine is designed for demanding cutting environments. Its heavy-duty linear motion guides, attached suction system and segmented smoke exhaust support effective industrial operation.',
    features: [
      'Low power consumption',
      'Cutting capacity up to 16mm',
      'Heavy-duty LM guides',
      'Attached suction system and blower',
      'Segmented smoke exhaust',
      'High dynamic performance',
      'Integrated electrical panel',
      'High accuracy torch station',
      'Optional oxy-fuel attachment',
      'Servo motor and gear drive',
      'Protective machine cover',
      'Low maintenance',
    ],
    specifications: [
      { label: 'Model', value: 'BI-1405' },
      { label: 'Cutting Thickness', value: 'Up to 16mm' },
      { label: 'Effective Cutting Size', value: '6350mm × 1550mm' },
      { label: 'Guide System', value: 'Heavy-duty LM Guides' },
      { label: 'Smoke Management', value: 'Segmented Smoke Exhaust' },
      { label: 'Suction System', value: 'Attached Suction & Blower' },
      { label: 'Drive System', value: 'Servo Motor & Gears' },
    ],
  },

  {
    id: 6,
    slug: 'handheld-laser-welding',
    name: 'Handheld Laser Welding Machine',
    shortName: 'Handheld Laser Welding',
    category: 'Laser Welding',
    tag: '1000W / 1500W',
    image: image7,
    description:
      'Compact handheld laser welding technology designed for efficient, precise and versatile metal joining applications.',
    intro:
      'Bachan Industries offers handheld laser welding machines in 1000W and 1500W configurations. These machines are suitable for various welding applications across metal fabrication and manufacturing industries.',
    features: [
      'Precise and stable welding',
      'High safety performance',
      'High efficiency and quality',
      'Easy maintenance',
      'Low energy consumption',
      'Long service life',
      'Easy-to-hold design',
      'Compact construction',
    ],
    applications: [
      'Building materials welding',
      'Precision welding',
      'Sheet metal welding',
      'Home appliance welding',
      'Hardware and kitchenware welding',
      'Pipe welding',
    ],
    materials: [
      'Carbon steel',
      'Stainless steel',
      'Aluminium alloy',
      'Brass',
      'Copper',
      'Galvanized sheet',
      'Silicon steel sheet',
      'Titanium alloy',
      'Manganese alloy',
    ],
    specifications: [
      { label: 'Available Power', value: '1000W / 1500W' },
      { label: 'Machine Type', value: 'Handheld Laser Welding' },
      { label: 'Design', value: 'Compact and Portable' },
    ],
  },

  {
    id: 7,
    slug: 'professional-laser-tube-cutting',
    name: 'Professional Laser Tube Cutting Machine',
    shortName: 'Laser Tube Cutting',
    category: 'Fiber Laser Cutting',
    tag: 'Tube Processing',
    image: image9,
    gallery: [
      'https://bachancnc.com/wp-content/uploads/2023/02/16.png',
    ],
    description:
      'A professional fiber laser tube cutting solution featuring two pneumatic chucks for efficient tube processing.',
    intro:
      'This professional fiber laser tube cutting machine is designed to process different tube profiles and shapes with high precision. Its two pneumatic chuck configuration supports tube handling across a range of industrial applications.',
    features: [
      'Two pneumatic chuck system',
      'Professional fiber laser technology',
      'Supports different tube profiles',
      'Multiple chuck diameter options',
      '6-metre tube length',
      'Precision positioning',
    ],
    applications: [
      'C channel',
      'I channel',
      'L channel',
      'Rectangle tubes',
      'Round and oval tubes',
      'Square tubes',
    ],
    specifications: [
      { label: 'Laser Source', value: 'IPG / Max' },
      { label: 'Laser Power', value: '1500W – 4000W' },
      { label: 'Laser Wavelength', value: '1060–1080nm' },
      { label: 'Chuck Diameter', value: '160mm / 220mm / 320mm' },
      { label: 'Tube Length', value: '6M' },
      { label: 'Application Graphic Formats', value: 'IGS, ZX' },
      { label: 'Y-axis Repeat Positioning Accuracy', value: '±0.05mm' },
      { label: 'U-axis Rotation Positioning Accuracy', value: '<5 arc minutes' },
    ],
  },

  {
    id: 8,
    slug: 'dual-pallet-fiber-laser',
    name: 'Dual Pallet Fiber Laser Cutting Machine',
    shortName: 'Dual Pallet Fiber Laser',
    category: 'Fiber Laser Cutting',
    tag: 'High Productivity',
    image: 'https://bachancnc.com/wp-content/uploads/2023/02/5.png',
    description:
      'A fiber laser cutting solution designed for industrial production with high movement speeds and precision.',
    intro:
      'The dual pallet fiber laser cutting machine offers industrial fiber laser cutting capabilities with high-speed motion and precision. Its configuration is designed to support demanding metal fabrication environments.',
    features: [
      'Dual pallet machine configuration',
      'IPG / Max laser source compatibility',
      'Autofocus OSPRI cutting head',
      'High acceleration performance',
      'Maximum moving speed of 170m/min',
      'Precision positioning',
    ],
    specifications: [
      { label: 'Working Area X Axis', values: ['1550mm', '2050mm', '2050mm', '2050mm'] },
      { label: 'Working Area Y Axis', values: ['3050mm', '4050mm', '6050mm', '6550mm'] },
      { label: 'Z Axis', values: ['120mm', '120mm', '120mm', '120mm'] },
      { label: 'Laser Source', values: ['IPG / Max', 'IPG / Max', 'IPG / Max', 'IPG / Max'] },
      { label: 'Cutting Head', values: ['Autofocus OSPRI', 'Autofocus OSPRI', 'Autofocus OSPRI', 'Autofocus OSPRI'] },
      { label: 'Max Acceleration', values: ['1.5G', '1.5G', '1.5G', '1.5G'] },
      { label: 'Max Moving Speed', values: ['170m/min', '170m/min', '170m/min', '170m/min'] },
      { label: 'Position Accuracy', values: ['0.03mm', '0.03mm', '0.03mm', '0.03mm'] },
      { label: 'Repeat Position Accuracy', values: ['0.02mm', '0.02mm', '0.02mm', '0.02mm'] },
    ],
    models: ['B1 3015', 'B1 4020', 'B1 6020', 'B1 6520'],
  },

  {
    id: 9,
    slug: 'fiber-laser-elite-era',
    name: 'Fiber Laser Cutting Machine Elite-Era',
    shortName: 'Elite-Era Fiber Laser',
    category: 'Fiber Laser Cutting',
    tag: 'Elite Series',
    image: image11,
    gallery: [
      'https://bachancnc.com/wp-content/uploads/2023/02/10.png',
    ],
    description:
      'An industrial fiber laser cutting machine combining high-speed movement, accuracy and advanced cutting technology.',
    intro:
      'The Elite-Era fiber laser cutting machine is designed for metal fabrication and industrial cutting applications. Its specifications include an autofocus OSPRI cutting head, IPG / Max laser source compatibility and high-speed movement.',
    features: [
      'Industrial fiber laser cutting',
      'IPG / Max laser source compatibility',
      'Autofocus OSPRI cutting head',
      'Maximum acceleration of 1.5G',
      'Maximum moving speed of 170m/min',
      'Position accuracy of 0.03mm',
      'Repeat positioning accuracy of 0.02mm',
    ],
    specifications: [
      { label: 'Working Area X Axis', values: ['1550mm', '2050mm', '2050mm', '2050mm'] },
      { label: 'Working Area Y Axis', values: ['3050mm', '4050mm', '6050mm', '6550mm'] },
      { label: 'Z Axis', values: ['120mm', '120mm', '120mm', '120mm'] },
      { label: 'Laser Source', values: ['IPG / Max', 'IPG / Max', 'IPG / Max', 'IPG / Max'] },
      { label: 'Cutting Head', values: ['Autofocus OSPRI', 'Autofocus OSPRI', 'Autofocus OSPRI', 'Autofocus OSPRI'] },
      { label: 'Max Acceleration', values: ['1.5G', '1.5G', '1.5G', '1.5G'] },
      { label: 'Max Moving Speed', values: ['170m/min', '170m/min', '170m/min', '170m/min'] },
      { label: 'Position Accuracy', values: ['0.03mm', '0.03mm', '0.03mm', '0.03mm'] },
      { label: 'Repeat Position Accuracy', values: ['0.02mm', '0.02mm', '0.02mm', '0.02mm'] },
    ],
    models: ['B1 3015', 'B1 4020', 'B1 6020', 'B1 6520'],
  },
   {
    id: 10,
    slug: 'fiber-laser-marking-machine',
    name: 'Fiber Laser Marking Machine',
    shortName: 'Fiber Laser Marking',
    category: 'Laser Marking',
    tag: 'Permanent Marking',
    image: image10,
    gallery: [],
    desc: 'High-speed laser marking technology for permanent and precise product identification.',
    description: 'A fiber laser marking solution designed for permanent, high-speed marking across metal, non-metal, ceramic and plastic materials.',
    intro: 'The fiber laser marking machine provides efficient and reliable marking for industrial production. Its online marking capability and high-speed processing make it suitable for mass production environments.',
    features: [
      'Low operating cost',
      'Zero maintenance cost as specified in product information',
      'Applicable to metal materials',
      'Suitable for non-metal materials',
      'Compatible with ceramics and plastics',
      'Permanent marking process',
      'Online marking capability',
      'High-speed marking for mass production',
      'Minimizes product damage',
      'Helps enhance product quality'
    ],
    specifications: [
      { label: 'Machine Type', value: 'Fiber Laser Marking Machine' },
      { label: 'Marking Process', value: 'Permanent Laser Marking' },
      { label: 'Production Capability', value: 'Online Marking / Mass Production' },
      { label: 'Operating Cost', value: 'Low Operating Cost' },
      { label: 'Maintenance', value: 'Zero Maintenance Cost (as stated in source)' }
    ],
    materials: [
      'Metal',
      'Non-metal',
      'Ceramics',
      'Plastics'
    ],
    applications: [
      'Industrial Product Identification',
      'Permanent Product Marking',
      'Online Production Marking',
      'Mass Production',
      'Metal Marking',
      'Ceramic Marking',
      'Plastic Marking'
    ]
  },

    {
    id: 11,
    slug: 'aviation-aluminum-beam',
    name: '4th Generation Aviation Aluminum Beam',
    shortName: 'Aviation Aluminum Beam',
    category: 'Laser Components',
    tag: '4th Generation Technology',
    image: image4,
    gallery: [],
    desc: 'Lightweight, high-strength aluminum beam engineered for high-speed precision cutting.',
    description: 'The fourth-generation aviation aluminum beam combines lightweight construction, high strength and excellent dynamic performance to improve machine stability and cutting efficiency.',
    intro: 'Manufactured using thousand-ton extrusion equipment, the beam features uniform density and a strong structural design. Its lightweight and high-strength material characteristics support stable machine performance and demanding laser processing applications.',
    features: [
      'High strength and lightweight construction',
      'Advanced thousand-ton extrusion process',
      'Uniform material density',
      'Designed without pores and trachoma defects',
      'Finite element analysis optimized structure',
      'Excellent corrosion resistance',
      'High rigidity and dynamic performance',
      'High-speed precision cutting',
      'Improved processing efficiency',
      'Stable cutting quality'
    ],
    specifications: [
      { label: 'Generation', value: '4th Generation' },
      { label: 'Material', value: 'Aviation Aluminum Alloy' },
      { label: 'Manufacturing Process', value: 'Thousand-ton Extrusion Equipment' },
      { label: 'Structural Optimization', value: 'Finite Element Analysis' },
      { label: 'Key Properties', value: 'Lightweight, High Strength and High Rigidity' },
      { label: 'Performance', value: 'High-speed Precision Cutting' }
    ],
    applications: [
      'Fiber Laser Cutting Machines',
      'High-speed Laser Processing',
      'Industrial Metal Fabrication',
      'Precision Manufacturing'
    ]
  },

]

export const capabilities = [
  'CNC Fiber Laser Cutting',
  'CNC Plasma Cutting',
  'CNC Wood Router',
  'Industrial Laser Welding',
  'Precision Tube Cutting',
  'Machine Maintenance',
]
