export interface ProjectParagraph {
  type: 'paragraph' | 'heading' | 'list';
  level?: number;
  text?: string;
  items?: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  capacity?: string;
  technology?: string;
  commissioned?: string;
  images: string[];
  content: ProjectParagraph[];
  keyFeatures?: string[];
  scopeOfWork?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    slug: "al-ghurair-foods-dubai-uae",
    title: "Al Ghurair Foods, Dubai, UAE",
    subtitle: "14-Chakki Digital Whole Wheat Flour Mill Plant",
    client: "Al Ghurair Foods",
    location: "Dubai, United Arab Emirates",
    capacity: "14-Chakki Digital Plant",
    technology: "Choyal Wondermills Technology",
    commissioned: "2025",
    images: [
      "/images/projects/al-ghurair-foods-1.jpg",
      "/images/projects/al-ghurair-foods-2.jpg",
      "/images/projects/al-ghurair-foods-3.jpg",
      "/images/projects/al-ghurair-foods-4.jpg",
      "/images/projects/al-ghurair-foods-5.jpg",
      "/images/projects/al-ghurair-foods-6.jpg",
      "/images/projects/al-ghurair-foods-7.jpg",
      "/images/projects/al-ghurair-foods-8.jpg"
    ],
    content: [
      {
        type: "paragraph",
        text: "Al Ghurair Foods, one of the most renowned food manufacturing companies in the Middle East, has further strengthened its production capabilities with the installation of a state-of-the-art 14-Chakki Digital Whole Wheat Flour Mill Plant at its Dubai facility."
      },
      {
        type: "paragraph",
        text: "This advanced milling plant is equipped with a fully automated process control system and reflects Al Ghurair's commitment to innovation, quality, and efficiency in food production. With the ability to monitor and control operations remotely via mobile, the facility offers unmatched convenience and precision."
      },
      {
        type: "paragraph",
        text: "Supplied and commissioned by Choyal, the project is a significant leap in smart milling technology, reinforcing our long-standing partnership with leading global food brands."
      },
      {
        type: "paragraph",
        text: "Our association included multiple technical discussions with Al Ghurair's expert team, culminating in a tailored milling solution powered by Choyal Wondermills Technology. The Choyal School of Milling Technology also proudly supports skill development with hands-on training for operators and technical teams."
      },
      {
        type: "paragraph",
        text: "Together, we are setting new benchmarks in whole wheat flour production across the Gulf and beyond."
      }
    ],
    keyFeatures: [
      "Automated Process Control System",
      "Remote Monitoring and Control via Mobile Devices",
      "Optimized Whole Wheat Cleaning System",
      "Precision Milling with Patented Wonder Mill Technology",
      "Advanced Grain Storage and Handling Solutions",
      "User-Friendly Interface for Seamless Operations"
    ]
  },
  {
    slug: "carrs-flour-uk",
    title: "Carrs Flour - UK",
    subtitle: "Fully Automatic Chakki Atta Plant in Maldon",
    client: "Carr's Flour Mills Ltd",
    location: "Maldon, United Kingdom",
    capacity: "High-Capacity Automatic Atta Line",
    technology: "Automatic Chakki Atta Milling",
    commissioned: "2021",
    images: [
      "/images/projects/carrs-flour-1.jpg",
      "/images/projects/carrs-flour-2.jpg",
      "/images/projects/carrs-flour-3.jpg",
      "/images/projects/carrs-flour-4.jpg",
      "/images/projects/carrs-flour-5.jpg",
      "/images/projects/carrs-flour-6.jpg",
      "/images/projects/carrs-flour-7.jpg",
      "/images/projects/carrs-flour-8.jpg"
    ],
    content: [
      {
        type: "paragraph",
        text: "Carr's Flour is the leading flour milling company in the United Kingdom, having a 180-year-long history with its annual milling capacity over 300,000 tonnes of wheat per year, and continuously expanding its operations. The team at Carr's felt the evolving market shift of increase in the demand of chakki atta and were looking for a perfect solution for the chakki atta production matching their high quality standards."
      },
      {
        type: "paragraph",
        text: "We take pleasure in saying that their search for a fully automatic, hassle-free, ultra-modern, and hygienic chakki atta plant ended at the Choyal Facility Centre when the representatives from Carr's Flour, Maldon visited us. The Carr's team stayed for a week testing each and every aspect of chakki milling at our facility centre, reviewing minute details of chakki maintenance, automation, plant operations, and efficiency."
      },
      {
        type: "paragraph",
        text: "After their complete satisfaction and having developed full confidence in our technology, we are immensely delighted to have received their valuable order."
      },
      {
        type: "paragraph",
        text: "The Carr's project was completed well within the competent deadlines for the project. Choyal's Head of Design, Aniruddha Sharma, and Head of Automation, Mr. Deepak Mahawar, along with the Executive Director RS Choyal and team, went to the Maldon site and conducted successful trials before handing over the plant to Mr. Matthew Chick of Carr's Flour, Maldon."
      }
    ]
  },
  {
    slug: "bakhresa-group-tanzania",
    title: "Bakhresa Group – Tanzania",
    subtitle: "Dar Es Salaam Fully Automatic Chakki Atta Plant",
    client: "Said Salim Bakhresa & Co Ltd (SSB)",
    location: "Dar Es Salaam, Tanzania",
    capacity: "Automatic Wondermills Plant",
    technology: "Fully Automatic Wondermills System",
    commissioned: "2013",
    images: [
      "/images/projects/bakhresa-group-1.jpg",
      "/images/projects/bakhresa-group-2.jpg",
      "/images/projects/bakhresa-group-3.jpg",
      "/images/projects/bakhresa-group-4.jpg"
    ],
    content: [
      {
        type: "paragraph",
        text: "Bakhresa Group is one of the leading Industrial Houses in Tanzania, East Africa. It is now recognized as one of the prominent family-owned business groups in the region. The Group has its operations spread in Tanzania Mainland & Zanzibar, Kenya, Uganda, Malawi, Mozambique, Zambia, Rwanda, Burundi, and in South Africa, with plans in place to expand to other countries. The Group boasts a turnover of more than 800 Million USD and is a proud employer of more than 8,000 people. There are a range of companies under its umbrella, with investments primarily in the Food and Beverage Sector, Packaging, Logistics, Marine Passenger Services, Petroleum, and Entertainment."
      },
      {
        type: "paragraph",
        text: "Said Salim Bakhresa & Co Ltd is the flagship Company of the Bakhresa Group. Established in 1983 in the city of Dar Es Salaam, Tanzania, SSB has the largest wheat milling and storage capacity in East Africa. SSB has wheat mills in Dar Es Salaam with a combined milling capacity of 2,500 tons per day and storage capacity of 160,000 tons. It also has a maize mill of 100 tons per day and a rice mill of 50 tons per day capacity."
      },
      {
        type: "paragraph",
        text: "SSB supplies consistent high-quality products to its customers and is a leading exporter of flour and by-products. Their product range consists of Wheat Flours, Wheat Bran Pellets, Semolina, Maize Flour, Maize Bran, and Rice for domestic and international markets. SSB enjoys more than 60% market share in Tanzania and also exports wheat products to DRC, Burundi, Rwanda, the Middle East, and Far East."
      },
      {
        type: "paragraph",
        text: "Choyal takes immense pride in having associated with such a reputed group. We have supplied a fully automatic chakki atta plant consisting of fully automatic Wondermills at Dar-es-Salaam. Team Choyal was responsible for successful trial and production at their site in 2013, and the plant has been running successfully since then."
      }
    ]
  },
  {
    slug: "patanjali-ayurveda-haridwar",
    title: "Patanjali Ayurveda, Haridwar",
    subtitle: "200 TPD Digitally Operated Multi-Grain Atta Mill",
    client: "Patanjali Ayurved Limited",
    location: "Haridwar, Uttarakhand, India",
    capacity: "200 TPD Atta + 50 TPD Dalia + 30 TPD Besan + 20 TPD Spices",
    technology: "Digitally Operated Wonder Mills Plant",
    commissioned: "2010",
    images: [
      "/images/projects/patanjali-ayurveda-1.jpg",
      "/images/projects/patanjali-ayurveda-2.jpg",
      "/images/projects/patanjali-ayurveda-3.jpg",
      "/images/projects/patanjali-ayurveda-4.jpg",
      "/images/projects/patanjali-ayurveda-5.jpg",
      "/images/projects/patanjali-ayurveda-6.jpg"
    ],
    content: [
      {
        type: "paragraph",
        text: "PATANJALI AYURVED LIMITED, a Company registered under the Company's Act, 1956 having its Registered Office at Delhi and Works: 1. Unit-I at Haridwar; 2. Unit-II at Yogpeeth, Haridwar; and 3. Unit-III at Padartha, Haridwar, Uttarakhand, India. The Company was originally formed as a Private Limited Company on 13th January, 2006 and subsequently converted into a Public Limited Company on 25th June, 2007. Presently, the Board of Directors of the Company is managed by Sri Acharya Balkrishnaji as its Managing Director along with Swami Muktanandji."
      },
      {
        type: "paragraph",
        text: "The Vision of Respected Swami Ramdevji Maharaj, the renowned Yoga Guru, and Sri Acharya Balkrishnaji, brought the concept into reality through the formation of 'PATANJALI AYURVED LIMITED'. A holistic approach to improve the quality of life of all beings, world over, is the purpose behind their being. Getting rid of the pollutants in the food we consume (in the form of poisonous pesticides and chemical fertilizers that farmers use) is a goal they strive to achieve by providing eatables cultivated with organic and natural manures. The combination of Ayurvedic medicines, Yoga, pure food, and natural drinks is a package the world was waiting for, brought forward by the two saints."
      },
      {
        type: "paragraph",
        text: "The Flour Mill unit at Patanjali Ayurved Limited consists of the following production setups:"
      },
      {
        type: "list",
        items: [
          "200 TPD Multi Grain Atta (Digitally Operated Wonder Mills Plant)",
          "50 TPD Wheat Daliya and Multi Grain Daliya Plant (Digitally Operated Plant)",
          "30 TPD Pulse and Besan Plant",
          "20 TPD Spice Plant"
        ]
      },
      {
        type: "paragraph",
        text: "The Mega Food Park (MFP) has been envisaged to help in creation of enabling infrastructure for food processing and a comprehensive 'farm-to-plate' supply chain system. These Parks provide state-of-the-art infrastructure for food processing on a pre-identified cluster basis. This is aimed at reducing waste and ensuring value addition, especially in perishables like fruits and vegetables, while reviving the agricultural sector by increasing returns for farmers and generating rural employment."
      },
      {
        type: "heading",
        level: 3,
        text: "Project Breakdown & Highlights"
      },
      {
        type: "paragraph",
        text: "Multi Grain Atta (Digitally Operated Wonder Mills Plant) - Capacity of the plant is 200 TPD. This is the world's first digitally operated Chakki Atta Plant fitted with 20 Wondermills with a digital controller. Cleaning of all 9 grains is fully integrated, and the blending system of all grains is digitally controlled."
      },
      {
        type: "paragraph",
        text: "Wheat Dalia and Multi Grain Dalia Plant (Digitally Operated Plant) - Capacity of the plant is 50 TPD. Wheat Dalia is made by the Wonder Mill section, and the rest of the multi-grains are cleaned and blended by a separate system incorporated in the digital controller."
      },
      {
        type: "paragraph",
        text: "Pulse and Besan Plant - The flour mill unit also consists of a Chickpea Pulse plant. Raw chickpea cleaning and processing are done here to make high-quality pulses, alongside a besan grinding plant with Wondermills, Pin Mills, and Pulverizers for manufacturing all types of Gram Flour (Besan)."
      },
      {
        type: "paragraph",
        text: "Spice Plant - The Spice Section came into continuation with the purchase order on 9th March 2010. It was the fastest completed plant that came into running condition; it was first tested on 31st March 2010 and successfully commissioned in just 13 days. More than 30 spices are processed as solo or pre-mix recipes, with a digitally operated weighing and mixing solution provided by us to make over 30 types of pre-mixed masalas."
      }
    ],
    scopeOfWork: [
      "Preparation of technical details of the project",
      "Selection of Machines, Material, and Manpower",
      "Erection and Fabrication of processing lines",
      "Transfer of Technical know-how",
      "Final Trials and commissioning"
    ]
  },
  {
    slug: "prima-group-sri-lanka",
    title: "Prima Group, Sri Lanka",
    subtitle: "40 TPD Chakki Atta Plant in Trincomalee",
    client: "Prima Ceylon Ltd",
    location: "Trincomalee, Sri Lanka",
    capacity: "40 TPD Chakki Atta Unit",
    technology: "Choyal Wondermills Technology",
    commissioned: "2016",
    images: [
      "/images/projects/prima-group-1.jpg",
      "/images/projects/prima-group-2.jpg",
      "/images/projects/prima-group-3.jpg",
      "/images/projects/prima-group-4.jpg",
      "/images/projects/prima-group-5.jpg"
    ],
    content: [
      {
        type: "paragraph",
        text: "Prima Group is a leader in the South Asian market in the field of Wheat products, having one of their major production units at Trincomalee, Sri Lanka. The highly strategic harbour of Trincomalee is the location of Prima Ceylon Ltd.'s unique flour milling complex. Completely self-contained, it provides modern facilities for the loading and unloading of wheat grain, flour, and by-products directly onto and from the ships docking at its private wharf/jetty. A modern transport network serves the fully-integrated mill, with road, rail, and sea access."
      },
      {
        type: "paragraph",
        text: "When completed in 1980, the flour milling complex in Trincomalee was the world's largest flourmill under one roof. Its milling capacity has now expanded to 3,600 MT of wheat per day and silo capacity to over 200,000 MT. The extended and upgraded jetty can now berth up to 100,000 MT of 'Cape-size' bulk carriers. Prima's newly completed inner, multi-purpose wharf can handle containerised vessels to help increase South Asian trade. Its fleet of more than 20 state-of-the-art prime movers is ready to be deployed for island-wide distribution."
      },
      {
        type: "heading",
        level: 3,
        text: "Milling Technologies & Standards"
      },
      {
        type: "paragraph",
        text: "The fully automated milling process is operated by the latest milling technology. Prima imports state-of-the-art milling equipment from Buhler (Switzerland) and Choyal Wondermills (India), the most reputable names in their respective fields. The plant has received ISO9001:2000 and ISO22000:2005 certifications."
      },
      {
        type: "paragraph",
        text: "We take pride in supplying the prestigious group a fully automatic chakki atta unit after a series of meetings and discussions of the highly qualified technical staff of Prima at the Choyal facility centre. Choyal School of Milling Technology also serves the honor of training the technical personnel of Prima Ceylon at its own facility centre at Arjunpura, Ajmer, Rajasthan, INDIA."
      }
    ]
  }
];
