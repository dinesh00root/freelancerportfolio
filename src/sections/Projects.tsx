'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Leaf, ShoppingCart, ExternalLink, Calendar, Users, Zap, Award, MessageCircle } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce App for Retail Store',
    icon: <ShoppingCart className="h-6 w-6 text-pink-600" />,
    tech: ['React Native CLI', 'Redux', 'Firebase', 'Payment Gateway'],
    desc: 'Full-featured retail shopping app with sleek UI, seamless cart/checkout flow, and secure payment integration. Increased client sales by 35%.',
    type: 'Client Project',
    deliveryTime: '7 weeks',
    
    testimonial: '"Professional delivery and excellent post-launch support."',
    client: 'Retail Business',
    demoUrl: 'https://e-commerce-website-xi-blue.vercel.app/',
    githubUrl: 'https://github.com/Dinesh-78/E-commerce-website',
    caseStudyUrl: '#'
  },
  {
    title: 'Courier Management System',
    icon: <Truck className="h-6 w-6 text-blue-600" />,
    tech: ['Spring Boot', 'MySQL', 'Java', 'REST API'],
    desc: 'Streamlined logistics operations for a delivery company serving 500+ daily customers. Reduced manual processing by 60% and improved delivery tracking accuracy.',
    type: 'Backend Project',
    deliveryTime: '3 weeks',
    metrics: {
      performance: '40% faster processing',
      transactions: '1000+ daily',
      uptime: '99.9%'
    },
    testimonial: '"Delivered ahead of schedule with excellent API performance."',
    client: 'Logistics Company',
    demoUrl: 'https://github.com/Dinesh-78/CourierManagementSystem',
    githubUrl: 'https://github.com/Dinesh-78/CourierManagementSystem',
    caseStudyUrl: '#'
  },
  {
    title: 'Agro Mart (React Native App)',
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    tech: ['React Native', 'Express.js', 'MongoDB', 'Real-time'],
    desc: 'Connected 200+ farmers with consumers through mobile platform. Features include product listing, order management, and community support with real-time tracking.',
    type: 'Mobile App',
    deliveryTime: '4 weeks',
    metrics: {
      users: '200+ farmers',
      orders: '500+ processed',
      rating: '4.8/5 stars'
    },
    testimonial: '"Intuitive design and smooth user experience. Highly recommended!"',
    client: 'Agricultural Startup',
    demoUrl: 'https://drive.google.com/file/d/1Gm_VRXkGUfuNejHvpDlqCcUn3fAZdxHA/view?usp=sharing',
    githubUrl: 'https://github.com/Dinesh-78/Agromart-react-native',
    caseStudyUrl: '#'
  },
 
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">3 Successful Projects Completed</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Full-stack web applications and mobile solutions built with modern technologies. 
            Each project delivered on time with 100% client satisfaction.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-green-600">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">100% On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <Users className="h-5 w-5" />
              <span className="font-semibold">100% Quality Assurance</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600">
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30">
                      {project.icon}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800"
                    >
                      ✅ {project.type}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
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

                {/* Key Metrics */}
                {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Results:</h4>
                  <div className="space-y-1 text-sm">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold text-green-600 dark:text-green-400">{value}</span>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Client Testimonial */}
                {/* <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-2">
                    <MessageCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-1">
                        {project.testimonial}
                      </p>
                      <p className="text-xs text-gray-500">- {project.client}</p>
                    </div>
                  </div> 
                </div> */}

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
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
                    target='_blank'
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                Join satisfied clients who have transformed their ideas into successful digital products.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">⚡ Next Available: This Week</span>
                </div>
               
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918374330906?text=Can%20we%20meet"
                  target='_blank'
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Me Now
                </a>
                <a
                  href="https://wa.me/+918374330906?text=Can%20we%20meet%20in%20Google%20Meet%20https%3A%2F%2Fmeet.google.com%2Fzsz-aatg-wqo"
                  target='_blank'
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
                >
                  📅 Schedule Free Consultation
                </a>
              </div>
              
              <p className="text-sm  mt-4">
                 30-day bug-fix guarantee •  Free project estimation • 100% satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>

        {/* Availability Banner */}
        <div className="mt-12 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 text-green-700 dark:text-green-300">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse "></div>
            <span className="font-semibold">Currently Available for New Projects</span>
          </div>
          <p className="text-green-600 dark:text-green-400 mt-2">
            Accepting  new clients this month • Response within 2 hours
          </p>
        </div>
      </div>
    </section>
  );
}