export interface NewsParagraph {
  type: 'paragraph' | 'heading' | 'list';
  level?: number; // for headings (e.g., 2 for h2, etc.)
  text?: string;
  items?: string[]; // for lists
}

export interface NewsImage {
  original_url: string;
  local_path: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  images: NewsImage[];
  content: NewsParagraph[];
}

export const newsData: NewsItem[] = [
  {
    "title": "3rd Annual Edition of International SME Convention, 2023",
    "slug": "3rd-annual-edition-of-international-sme-convention-2023",
    "date": "2023-03-21",
    "images": [
      {
        "original_url": "https://rschoyalgroup.com/wp-content/uploads/2023/03/ISF-Event.jpg",
        "local_path": "/images/news/3rd-annual-edition-of-international-sme-convention-2023.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Recently, Mr. Radhey Shyam Choyal was invited to attend a panel discussion at the 3rd Edition of the International SME Convention 2023 held on 21 March 2023. Mr. Choyal was invited to share his experience and expertise on the topic of \"Opportunities in India: Rural, Agro, Food Processing & Services\". The event was organized by The India SME Forum, the largest non-profit organization for Small & Medium Enterprises in India."
      },
      {
        "type": "paragraph",
        "text": "Mr. Choyal discussed the following:"
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Public-private partnership model for farmers' growth"
      },
      {
        "type": "paragraph",
        "text": "The panel discussion focused on the challenges faced by grain farmers in India and how the public-private partnership model can be utilized to create opportunities in rural areas for agro, food processing, and services. Mr. Choyal emphasized the importance of value addition at the farm level, which can help in creating new opportunities in rural India. The panel also discussed strategies for effective rural marketing of these products and how forward and backward integration can be utilized to tap into the opportunities in rural India and create products that cater to both domestic and export markets."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Importance of R&D"
      },
      {
        "type": "paragraph",
        "text": "Mr. Choyal also discussed the importance of R&D in maintaining quality standards and how companies can make their R&D infrastructure more globally suited to meet national standards across all manufacturing industries. He highlighted the fact that the Choyal Group has given high importance to R&D, which has resulted in six patented technologies that have helped the company meet the quality standards in more than 20 countries."
      },
      {
        "type": "heading",
        "level": 3,
        "text": "Focus on innovation, quality, and customer satisfaction"
      },
      {
        "type": "paragraph",
        "text": "Finally, the panelists shared their views on the opportunities in the food processing industry in India and how SMEs can leverage these opportunities to grow their businesses and contribute to the country's economic development. Mr. Choyal emphasized the need for SMEs to focus on innovation, quality, and customer satisfaction, which can help them to stand out in the competitive market."
      },
      {
        "type": "paragraph",
        "text": "Choyal Group has been at the forefront of innovation in the food processing industry in India. We have successfully completed various projects using innovative milling technologies and have installed nearly 200 turnkey projects, and developed more than 45 milling innovations. The company has received several awards and recognitions for its contributions to the food processing industry in India."
      },
      {
        "type": "paragraph",
        "text": "In conclusion, Mr. Radhey Shyam Choyal's participation in the panel discussion at the International SME Convention 2023 highlighted the importance of creating new opportunities in rural India for agro, food processing, and services. It also emphasized the need for companies to focus on innovation, quality, and customer satisfaction to grow their businesses and contribute to the country's economic development. The Choyal Group's commitment to R&D and quality standards has made it one of the leading companies in the food processing industry in India."
      }
    ]
  },
  {
    "title": "GRAINTECH INDIA EXHIBITION 2015",
    "slug": "graintech-india-exhibition-2015",
    "date": "2015-08-15",
    "images": [
      {
        "original_url": "https://rschoyalgroup.com/wp-content/uploads/2021/03/grain-tech-india-e1615885880898.jpg",
        "local_path": "/images/news/graintech-india-exhibition-2015.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Graintech India Exhibition is India's largest Grain Milling Industry Event. This event is held in Bangalore every year in the month of August. This event is an International Exhibition on Food Processing & Packaging Machinery and Allied Industries focusing on numerous food Products, Technologies and value addition."
      },
      {
        "type": "paragraph",
        "text": "CHOYAL was one of the participating companies of Graintech 2015 among more than 200+ Participants. CHOYAL had marked its presence with 200+ exhibitors in the 6th Edition of India's largest Grain Milling industry event - Graintech India Exhibition 2015 at Bangalore."
      },
      {
        "type": "paragraph",
        "text": "With a huge crowd of outstanding exhibitors, visitors, entrepreneurs and general masses from 30 countries around the world, Choyal was the most desirable and appreciated Brand among all the Flour Milling Companies."
      },
      {
        "type": "paragraph",
        "text": "“Wonder Mill” a patented product of Choyal's and the 1st automatic chakki of India was the center of attraction for its power saving features, fully-automatic operations, solid and robust build quality and its unique design."
      },
      {
        "type": "paragraph",
        "text": "The three days exhibition provided an ample number of Business Opportunities not only to the visitors but also highlighted the business opportunities in Flour Milling."
      },
      {
        "type": "paragraph",
        "text": "Choyal received an overwhelming response from their visitors and the Brand was highly appreciated among the exhibitors."
      }
    ]
  },
  {
    "title": "Grain Africa Congress",
    "slug": "grain-africa-congress",
    "date": "2014-10-29",
    "images": [
      {
        "original_url": "https://rschoyalgroup.com/wp-content/uploads/2021/03/Africa1.jpg",
        "local_path": "/images/news/grain-africa-congress.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "Grain Africa Congress began in Addis Ababa, Ethiopia. \"GRAIN AFRICA – Africa Grain, Pulses and Technologies Congress\", which Parantez Group organized with the cooperation of the Ethiopian Ministry of Agriculture and Addis Ababa University, began on 29th October 2014."
      },
      {
        "type": "paragraph",
        "text": "The opening of the congress was performed by H.E. President of the FDR of Ethiopia Dr. Mulatu TESHOME, Tefera DEREBEW, H.E. Ambassador of Republic of Turkey Mr. Osman Rıza YAVUZALP, Scientific Director of AAiT of Addis Ababa University Prof. Young Kyun KIM and General Director of Parantez Group Mrs. Zübeyde Kavraz."
      },
      {
        "type": "paragraph",
        "text": "AFRICA GRAIN, PULSES AND TECHNOLOGIES CONGRESS aimed to bring together senior officials and ministers in 54 African countries and grain sector representatives with the world's leading technology companies. It was held in the African Union Conference Hall from 29th October 2014 until 31st October 2014."
      },
      {
        "type": "paragraph",
        "text": "During the intense participation at the African Grain Congress, Mr. R.S. Choyal from India presented a discourse on Organic Milling and the new technology developments in organic stone-ground Flour mills. He presented the new digitally operated stone mill \"Wonder Mill\" and stone dressing machine."
      },
      {
        "type": "paragraph",
        "text": "Mr. Choyal explained the various issues regarding modern Milling versus conventional Milling. He enlightened the house on the issues of skill development as well as small business entrepreneurship. He invited African millers and research fellows to the Choyal School of Milling Technology under a cultural exchange program. Many participants greeted Mr. Choyal for a most practical presentation for farmers and youth."
      }
    ]
  },
  {
    "title": "In-Bound Trade Mission – Australia",
    "slug": "in-bound-trade-mission-australia",
    "date": "2016-01-24",
    "images": [
      {
        "original_url": "https://rschoyalgroup.com/wp-content/uploads/2021/03/aust-e1615884993976.jpg",
        "local_path": "/images/news/in-bound-trade-mission-australia.jpg"
      }
    ],
    "content": [
      {
        "type": "paragraph",
        "text": "The Government of South Australia hosted an In-Bound Trade Mission with the Government of India starting from 24th January, 2016. Mr. R.S. Choyal, executive director and Mr. Yash Vardhan Choyal, management trainee, represented CHOYAL in this mission."
      },
      {
        "type": "paragraph",
        "text": "They had meetings and technical discussions about organic and chakki milling with Flinders Ranges Premium Grain Pvt. Ltd. to mark new footsteps of Indian milling in South Australia, including various other flour mills."
      },
      {
        "type": "paragraph",
        "text": "The Australia India Business Council SA Chapter worked with the Department of State Development in organizing this inbound India Trade Mission to South Australia."
      },
      {
        "type": "paragraph",
        "text": "The visit was timed to coincide with the Australia-India T20 cricket match at the Adelaide Oval on 26 January 2016, which was also attended by His Excellency Mr. Navdeep Suri, High Commissioner of India."
      },
      {
        "type": "paragraph",
        "text": "The inbound mission provided an ideal opportunity for AIBC members and others interested in fostering business links between South Australia and India to take part in business matching programs organized by DSD."
      }
    ]
  }
];
