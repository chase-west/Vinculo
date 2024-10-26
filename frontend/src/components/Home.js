import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart, Code, Users } from 'lucide-react';

// Custom backdrop blur component
const BlurredBackdrop = ({ className = "" }) => (
  <div className={`absolute inset-0 backdrop-blur-3xl bg-black/10 ${className}`} />
);

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer First",
      description: "Build groundbreaking solutions with a cutting-edge tech stack."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Impact Driven",
      description: "Create meaningful change through innovative technology."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Network",
      description: "Connect with forward-thinking developers worldwide."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Led",
      description: "Shape the future of nonprofit tech solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white" onMouseMove={handleMouseMove}>
      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, #FF0080 0%, transparent 50%)',
              'radial-gradient(circle at 60% 40%, #7928CA 0%, transparent 50%)',
              'radial-gradient(circle at 40% 60%, #FF0080 0%, transparent 50%)'
            ],
            transition: { duration: 10, repeat: Infinity, repeatType: "reverse" }
          }}
        />

        <div className="absolute top-8 left-8 text-3xl font-bold text-white bg-gradient-to-r from-[#FF0080] to-[#7928CA] bg-clip-text text-transparent">
          Vinculo
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center">
              <motion.div 
                className="inline-block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="px-4 py-1 text-sm font-mono bg-white/10 rounded-full backdrop-blur-sm">
                  Open Source × Nonprofit Technology
                </span>
              </motion.div>

              <motion.h1 
                className="mt-8 text-6xl md:text-8xl font-bold tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Build
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7928CA]"> the future </span>
                of impact
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Join a network of developers creating next-generation open-source solutions for nonprofits.
              </motion.p>

              <motion.div 
                className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="/projects"
                  className="group relative px-8 py-4 text-lg backdrop-blur-sm bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF0080] to-[#7928CA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'blur(12px)' }}
                  />
                </motion.a>
                <motion.a
                  href="/contribute"
                  className="px-8 py-4 text-lg border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Contributing
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-32 relative">
        <BlurredBackdrop />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Why Join Vinculo
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Be part of the next wave of nonprofit innovation.
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#FF0080] to-[#7928CA]">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="relative py-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <BlurredBackdrop className="bg-gradient-to-r from-[#FF0080]/20 to-[#7928CA]/20" />
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold tracking-tight"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ready to make an impact?
          </motion.h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Join our community of innovators today.
          </p>
          <motion.a
            href="/signup"
            className="mt-8 inline-block px-8 py-4 text-lg bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
