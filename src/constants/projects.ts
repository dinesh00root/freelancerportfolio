import {
  Truck,
  Leaf,
  ShoppingCart,
  Coins,
  Users,
  LucideIcon,
} from "lucide-react";

export interface Project {
  title: string;
  icon: LucideIcon;
  tech: string[];
  desc: string;
  type: string;
  deliveryTime: string;
  metrics?: {
    performance?: string;
    transactions?: string;
    uptime?: string;
    users?: string;
    orders?: string;
    rating?: string;
  };
  testimonial?: string;
  client: string;
  demoUrl: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Merchant Loyalty App",
    icon: Coins,
    tech: [
      "React Native",
      "Express.js",
      "Postgresql",
      "firebase",
      "Typescript",
      "Tailwind CSS",
      "Node.js",
    ],
    desc: "A loyalty app for merchants to manage customer rewards and transactions. Features include real-time transaction tracking, customer management, and analytics dashboard.",
    type: "Full Stack Project",
    deliveryTime: "3 weeks",
    metrics: {
      performance: "60% faster processing",
    },
    testimonial: '"Features are good need to improve UI"',
    client: "Loyalty App Client",
    demoUrl:
      "https://drive.google.com/file/d/14AiDsGd-_MazwMG6KoZR8N5nA8Utw4NV/view?usp=sharing",
    caseStudyUrl: "#",
  },
  {
    title: "Customer Loyalty App",
    icon: Coins,
    tech: [
      "React Native",
      "Express.js",
      "Postgresql",
      "firebase",
      "Typescript",
      "Tailwind CSS",
      "Node.js",
    ],
    desc: "A loyalty app for merchants to manage customer rewards and transactions. Features include real-time transaction tracking, customer management, and analytics dashboard.",
    type: "Full Stack Project",
    deliveryTime: "3 weeks",
    metrics: {
      performance: "60% faster processing",
    },
    testimonial: '"Features are good need to improve UI"',
    client: "Loyalty App Client",
    demoUrl:
      "https://drive.google.com/file/d/1Y_BPG9JRrk4Gox3GeaMnLiLgQPznOn0L/view?usp=sharing",
    caseStudyUrl: "#",
  },
  {
    title: "Truck Management System",
    icon: Truck,
    tech: ["React", "Typescript", "Tailwind CSS", "Node.js"],
    desc: "Streamlined logistics operations for a delivery company serving 5+ daily customers. Reduced manual processing by 60% and improved delivery tracking accuracy.",
    type: "Frontend Project",
    deliveryTime: "3 weeks",
    metrics: {
      performance: "40% faster processing",
      transactions: "1000+ daily",
      uptime: "99.9%",
    },
    testimonial:
      '"Delivered ahead of schedule with excellent API performance."',
    client: "Logistics Company",
    demoUrl: "https://fleetmanagementsyetem.vercel.app/",
    caseStudyUrl: "#",
  },
  {
    title: "E-Commerce App for Retail Store",
    icon: ShoppingCart,
    tech: ["React Js", "Redux", "Firebase", "Tailwind CSS"],
    desc: "Full-featured retail shopping app with sleek UI, seamless cart/checkout flow, and secure payment integration. Increased client sales by 35%.",
    type: "Client Project",
    deliveryTime: "7 weeks",
    testimonial: '"Professional delivery and excellent post-launch support."',
    client: "Retail Business",
    demoUrl: "https://e-commerce-website-xi-blue.vercel.app/",
    githubUrl: "https://github.com/Dinesh-78/E-commerce-website",
    caseStudyUrl: "#",
  },
  {
    title: "Agro Mart (React Native App)",
    icon: Leaf,
    tech: ["React Native", "Express.js", "MongoDB", "Real-time"],
    desc: "Connected 200+ farmers with consumers through mobile platform. Features include product listing, order management, and community support with real-time tracking.",
    type: "Mobile App",
    deliveryTime: "4 weeks",
    metrics: {
      users: "200+ farmers",
      orders: "500+ processed",
      rating: "4.8/5 stars",
    },
    testimonial:
      '"Intuitive design and smooth user experience. Highly recommended!"',
    client: "Agricultural Startup",
    demoUrl:
      "https://drive.google.com/file/d/1Gm_VRXkGUfuNejHvpDlqCcUn3fAZdxHA/view?usp=sharing",
    githubUrl: "https://github.com/Dinesh-78/Agromart-react-native",
    caseStudyUrl: "#",
  },
  {
    title: "Driver React Native App",
    icon: Users,
    tech: ["React Native", "Express.js", "MongoDB", "Real-time"],
    desc: "Connected 200+ farmers with consumers through mobile platform. Features include product listing, order management, and community support with real-time tracking.",
    type: "Mobile App",
    deliveryTime: "4 weeks",
    metrics: {
      users: "200+ farmers",
      orders: "500+ processed",
      rating: "4.8/5 stars",
    },
    testimonial:
      '"Intuitive design and smooth user experience. Highly recommended!"',
    client: "Agricultural Startup",
    demoUrl:
      "https://drive.google.com/file/d/15DRWES9buH5xNST5cAvejllGU4TEUE8Z/view?usp=sharing",
  },
];
