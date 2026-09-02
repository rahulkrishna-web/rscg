export interface BookVariant {
  label: string;
  image: string;
  slugSuffix: string;
}

export interface Book {
  slug: string;
  title: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  aboutBook: string;
  aboutAuthor: string;
  variants?: BookVariant[];
}

export const booksData: Book[] = [
  {
    slug: "basics-of-chakki-milling",
    title: "Basics of Chakki Milling",
    image: "/images/books/basics_of_chakkimilling.png",
    originalPrice: 9900,
    salePrice: 6900,
    variants: [
      { label: "English Version", image: "/images/books/basics_of_chakkimilling.png", slugSuffix: "english" },
      { label: "Hindi Version", image: "/images/books/attachakkimlilling.png", slugSuffix: "hindi" }
    ],
    aboutBook: `**Basics of Chakki Milling** is a practical and comprehensive guide to traditional stone milling and modern flour milling technology. Covering every stage of the milling process, the book explains wheat quality, grain structure, chakki and roller milling, emery stones, flour testing, fortification, mill planning, automation, maintenance, and marketing strategies.\nWith **22 insightful chapters**, it combines technical expertise with practical guidance on flour storage, equipment selection, baking applications, and real-world industry practices. An essential resource for mill owners, food technologists, bakers, entrepreneurs, researchers, and students, this book provides the knowledge needed to achieve high-quality flour production while preserving nutrition and authentic taste.`,
    aboutAuthor: `**Prof. R.S. Choyal** is a distinguished industrialist, innovator, educator, and thought leader with over three decades of experience in industry, technology, entrepreneurship, and management. He is the **Chairman & Managing Director of the R.S. Choyal Group**, a globally recognized organization specializing in flour milling technologies, food processing solutions, automation, engineering, and sustainable industrial innovation.\nA visionary leader, Prof. Choyal has driven the transformation of traditional milling through innovation, automation, and digital technologies, leading the development of several patented solutions that enhance productivity, quality, and sustainability.\nA **Doctorate in Business Administration** and **Professor of Practice**, he actively bridges academia and industry by mentoring students, researchers, startups, and entrepreneurs.\nProf. Choyal is also a **TEDx Speaker, author, and leadership mentor**, inspiring audiences through his talks on entrepreneurship, innovation, leadership, and personal development. His notable books include *Basics of Chakki Milling*, *Marvel Treasure*, and *Main, Mera Mann, Meri Manzil*.\nThrough his contributions to education, industry, and social development, Prof. R.S. Choyal continues to inspire innovation, entrepreneurship, and sustainable growth while empowering future generations to create meaningful impact.`
  },
  {
    slug: "wholesome-flour",
    title: "Wholesome Flour",
    image: "/images/books/wholesome_flour.png",
    originalPrice: 9900,
    salePrice: 6900,
    aboutBook: `**Wholesome Flour: A Guide to Nourishing & Tasty Flours** is an essential resource for understanding the nutritional benefits, milling techniques, and culinary applications of various flours. It explores traditional and modern milling practices, focusing on stone grinding, cold milling, and specialized formulations that preserve nutrients, fiber, and authentic taste.\nThe book provides deep insights into wheat, millets, gluten-free grains, and multigrain blends, offering scientific knowledge and practical recipes for creating healthy, high-quality flour products. Ideal for millers, bakers, food technologists, entrepreneurs, and health-conscious consumers, it bridges the gap between milling science and nutritious baking, promoting sustainable and wholesome dietary choices.`,
    aboutAuthor: `**Prof. R.S. Choyal** is a distinguished industrialist, innovator, educator, and thought leader with over three decades of experience in industry, technology, entrepreneurship, and management. He is the **Chairman & Managing Director of the R.S. Choyal Group**, a globally recognized organization specializing in flour milling technologies, food processing solutions, automation, engineering, and sustainable industrial innovation.\nA visionary leader, Prof. Choyal has driven the transformation of traditional milling through innovation, automation, and digital technologies, leading the development of several patented solutions that enhance productivity, quality, and sustainability.\nA **Doctorate in Business Administration** and **Professor of Practice**, he actively bridges academia and industry by mentoring students, researchers, startups, and entrepreneurs.\nProf. Choyal is also a **TEDx Speaker, author, and leadership mentor**, inspiring audiences through his talks on entrepreneurship, innovation, leadership, and personal development. His notable books include *Basics of Chakki Milling*, *Marvel Treasure*, and *Main, Mera Mann, Meri Manzil*.\nThrough his contributions to education, industry, and social development, Prof. R.S. Choyal continues to inspire innovation, entrepreneurship, and sustainable growth while empowering future generations to create meaningful impact.`
  },
  {
    slug: "grain-goodness-healthy-flour-cereal-recipes",
    title: "Grain Goodness: Healthy Flour & Cereal Recipes",
    image: "/images/books/grain_goodness.png",
    originalPrice: 9900,
    salePrice: 6900,
    aboutBook: `**Grain Goodness: Healthy Flour & Cereal Recipes** is a practical guide that combines over three decades of milling expertise with the science of healthy nutrition. Focused on grains, millets, and multigrain formulations, the book explores stone milling, flour selection, and the nutritional benefits of freshly ground flour. It features scientifically developed recipes for multigrain atta, diabetic-friendly flour, high-protein blends, diet mixes, and healthy cereals. Designed for flour millers, food manufacturers, entrepreneurs, and health-conscious consumers, this book offers valuable insights into producing nutritious, high-quality grain products that support modern dietary and wellness needs.`,
    aboutAuthor: `**Prof. R.S. Choyal** is a distinguished industrialist, innovator, educator, and thought leader with over three decades of experience in industry, technology, entrepreneurship, and management. He is the **Chairman & Managing Director of the R.S. Choyal Group**, a globally recognized organization specializing in flour milling technologies, food processing solutions, automation, engineering, and sustainable industrial innovation.\nA visionary leader, Prof. Choyal has driven the transformation of traditional milling through innovation, automation, and digital technologies, leading the development of several patented solutions that enhance productivity, quality, and sustainability.\nA **Doctorate in Business Administration** and **Professor of Practice**, he actively bridges academia and industry by mentoring students, researchers, startups, and entrepreneurs.\nProf. Choyal is also a **TEDx Speaker, author, and leadership mentor**, inspiring audiences through his talks on entrepreneurship, innovation, leadership, and personal development. His notable books include *Basics of Chakki Milling*, *Marvel Treasure*, and *Main, Mera Mann, Meri Manzil*.\nThrough his contributions to education, industry, and social development, Prof. R.S. Choyal continues to inspire innovation, entrepreneurship, and sustainable growth while empowering future generations to create meaningful impact.`
  },
  {
    slug: "insights-of-flour-milling",
    title: "Insights of Flour Milling",
    image: "/images/books/insights_flourmilling.png",
    originalPrice: 9900,
    salePrice: 6900,
    variants: [
      { label: "English Version", image: "/images/books/insights_flourmilling.png", slugSuffix: "english" },
      { label: "Hindi Version", image: "/images/books/flourmilling_hindi.png", slugSuffix: "hindi" }
    ],
    aboutBook: `**Insights of Flour Milling** is a comprehensive guide to modern flour milling, covering every stage from grain storage, cleaning, conditioning, grinding, and sifting to quality control and final flour production. The book explores advanced milling technologies, innovative equipment, sustainable practices, mill engineering, laboratory techniques, and regulatory standards while explaining the science behind efficient milling operations. Designed for millers, engineers, entrepreneurs, students, and industry professionals, it combines technical expertise with practical insights to improve productivity, product quality, and operational efficiency. An essential resource, it empowers readers with the knowledge to excel in today's evolving flour milling industry.`,
    aboutAuthor: `**Prof. R.S. Choyal** is a distinguished industrialist, innovator, educator, and thought leader with over three decades of experience in industry, technology, entrepreneurship, and management. He is the **Chairman & Managing Director of the R.S. Choyal Group**, a globally recognized organization specializing in flour milling technologies, food processing solutions, automation, engineering, and sustainable industrial innovation.\nA visionary leader, Prof. Choyal has driven the transformation of traditional milling through innovation, automation, and digital technologies, leading the development of several patented solutions that enhance productivity, quality, and sustainability.\nA **Doctorate in Business Administration** and **Professor of Practice**, he actively bridges academia and industry by mentoring students, researchers, startups, and entrepreneurs.\nProf. Choyal is also a **TEDx Speaker, author, and leadership mentor**, inspiring audiences through his talks on entrepreneurship, innovation, leadership, and personal development. His notable books include *Basics of Chakki Milling*, *Marvel Treasure*, and *Main, Mera Mann, Meri Manzil*.\nThrough his contributions to education, industry, and social development, Prof. R.S. Choyal continues to inspire innovation, entrepreneurship, and sustainable growth while empowering future generations to create meaningful impact.`
  }
];
