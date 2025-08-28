"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Truck,
  Leaf,
  ShoppingCart,
  ExternalLink,
  Calendar,
  Users,
  Zap,
  Award,
  MessageCircle,
  Coins,
} from "lucide-react";

const projects = [
  {
    title: "Merchant Loyalty App",
    icon: <Coins className="h-6 w-6 text-black dark:text-white" />,
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
    icon: <Coins className="h-6 w-6 text-black dark:text-white" />,
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
    icon: <Truck className="h-6 w-6 text-black dark:text-white" />,
    tech: ["React", "Typescript", "Tailwind CSS", "Node.js"],
    desc: "Streamlined logistics operations for a delivery company serving 5+ daily customers. Reduced manual processing by 60% and improved delivery tracking accuracy. ",
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
    icon: <ShoppingCart className="h-6 w-6 text-black dark:text-white" />,
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
    icon: <Leaf className="h-6 w-6 text-black dark:text-white" />,
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
    icon: <Users className="h-6 w-6 text-black dark:text-white" />,
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

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4 text-white dark:text-black" />
            <span className="text-sm font-medium text-white dark:text-black">
              3 Successful Projects Completed
            </span>
          </div>

          <h2 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Featured{" "}
            <span className="text-black dark:text-white">Projects</span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Full-stack web applications and mobile solutions built with modern
            technologies. Each project delivered on time with 100% client
            satisfaction.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-black dark:text-white">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">100% On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-black dark:text-white">
              <Users className="h-5 w-5" />
              <span className="font-semibold">100% Quality Assurance</span>
            </div>
            <div className="flex items-center gap-2 text-black dark:text-white">
              <Award className="h-5 w-5" />
              <span className="font-semibold">100% Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card
              key={i}
              className="group hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500 border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                      {project.icon}
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    >
                      {project.type}
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                  {project.title}
                </CardTitle>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Delivered in {project.deliveryTime}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-black dark:text-white mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-black text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="">
            <div className="" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Join satisfied clients who have transformed their ideas into
                successful digital products.
              </p>

       
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918374330906?text=Can%20we%20meet"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white px-8 py-4 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Me Now
                </a>
               
              </div>

             
            </div>
          </div>
        </div>

        {/* Availability Banner */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
            <div className="w-3 h-3 bg-black dark:bg-white rounded-full animate-pulse "></div>
            <span className="font-semibold">
              Currently Available for New Projects
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Accepting new clients this month • Response within 2 hours
          </p>
        </div>
      </div>
    </section>
  );
}
