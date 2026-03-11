import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Heart, Star, ArrowDown, X, Instagram, Facebook } from 'lucide-react';

// --- Theme Configuration ---
const theme = {
  colors: {
    primary: "text-rose-900",
    secondary: "text-stone-600",
    accent: "text-amber-600",
    bgSoft: "bg-rose-50",
    bgCream: "bg-[#FDFBF7]",
    cardBg: "bg-white",
    gold: "border-amber-200",
  },
  fonts: {
    heading: "font-playfair",
    body: "font-poppins",
  }
};

// --- Reusable Animation Components ---
const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  };

  return (
    <motion.div
      initial={directions[direction]}
      whileInView={{ y: 0, x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// --- Section 1: Hero Section ---
const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Decorative Background Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 flex justify-center"
        >
          <span className="px-4 py-1 rounded-full border border-rose-200 bg-white/60 backdrop-blur-sm text-rose-800 text-sm tracking-widest uppercase">
            You are invited
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`${theme.fonts.heading} text-5xl md:text-7xl lg:text-8xl font-bold text-rose-900 mb-6 leading-tight`}
        >
          Cradle Ceremony <br />
          <span className="italic text-amber-600">Celebration</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`${theme.fonts.body} text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed`}
        >
          With immense joy and love, we warmly invite you to celebrate the cradle ceremony of our beloved little one.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-400"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

// --- Section 2: Invitation Message ---
const InvitationMessage = () => {
  return (
    <section className="py-20 px-4 bg-cream-50 relative">
      <div className="max-w-3xl mx-auto relative">
        <FadeIn>
          <div className="relative p-8 md:p-12 bg-white rounded-2xl shadow-xl border border-rose-100 text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-rose-500 text-white p-3 rounded-full shadow-lg">
              <Heart size={24} fill="currentColor" />
            </div>

            <h2 className={`${theme.fonts.heading} text-3xl md:text-4xl text-rose-900 mb-8`}>
              A New Beginning
            </h2>
            <p className={`${theme.fonts.body} text-stone-600 text-lg leading-relaxed mb-6`}>
              "With hearts full of happiness and gratitude, we invite you to join us in celebrating the cradle ceremony of our little bundle of joy. Your presence will add warmth and blessings to this beautiful occasion."
            </p>
            <div className="w-16 h-1 bg-amber-300 mx-auto rounded-full"></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Section 3: Parents Invitation ---
const ParentsSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h3 className={`${theme.fonts.heading} text-3xl text-center text-stone-800 mb-12`}>
            Cordially Invited By
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Mr. Naveen & Mrs. Sandhya", role: "Parents", icon: "👨‍👩‍👧" },
            { name: "Mr.Sathyanarayana & Mrs. Aruna", role: "Grandparents", icon: "👴👵" }
          ].map((parent, idx) => (
            <FadeIn key={idx} delay={idx * 0.2}>
              <div className="group relative bg-rose-50 p-8 rounded-xl border border-rose-100 hover:border-rose-300 transition-all duration-300 hover:shadow-lg text-center">
                <div className="text-4xl mb-4">{parent.icon}</div>
                <h4 className={`${theme.fonts.heading} text-2xl text-rose-900 mb-2`}>{parent.name}</h4>
                <p className={`${theme.fonts.body} text-stone-500 text-sm uppercase tracking-wider`}>{parent.role}</p>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Heart size={64} className="text-rose-900" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 4: Grandparents Blessings ---
const GrandparentsSection = () => {
  return (
    <section className="py-16 px-4 bg-amber-50/30">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className={`${theme.fonts.body} text-stone-500 mb-4`}>Celebrated with the loving blessings of</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl mb-2">👨‍👩‍👧‍👦</div>
              <span className={`${theme.fonts.heading} text-lg text-stone-800`}>Family</span>
            </div>
            <div className="h-12 w-px bg-rose-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl mb-2">✨👫</div>
              <span className={`${theme.fonts.heading} text-lg text-stone-800`}>Friends</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Section 5: Event Details ---
const EventDetails = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn direction="right">
          <div className="space-y-8">
            <h2 className={`${theme.fonts.heading} text-4xl text-rose-900`}>Event Details</h2>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-rose-100 rounded-full text-rose-600">
                <Calendar size={24} />
              </div>
              <div>
                <h4 className={`${theme.fonts.heading} text-xl text-stone-800`}>Date</h4>
                <p className={`${theme.fonts.body} text-stone-600`}>Sunday, 15th March 2026</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                <Clock size={24} />
              </div>
              <div>
                <h4 className={`${theme.fonts.heading} text-xl text-stone-800`}>Time</h4>
                <p className={`${theme.fonts.body} text-stone-600`}>10:00 AM - 01:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-stone-100 rounded-full text-stone-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className={`${theme.fonts.heading} text-xl text-stone-800`}>Venue</h4>
                <p className={`${theme.fonts.body} text-stone-600`}>
                  Akaram,Dubbak,Siddipet<br />
                  Telangana,India<br />
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2}>
          <div className="relative h-[400px] w-full bg-stone-200 rounded-2xl overflow-hidden shadow-lg group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1220.2092493653668!2d78.59308885902618!3d18.189600623854947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1773242937615!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none"></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Section 6: Name Poll ---
const NamePoll = () => {
  return (
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className={`${theme.fonts.heading} text-3xl md:text-4xl text-rose-900 mb-6`}>Help Us Choose a Name!</h2>
          <p className={`${theme.fonts.body} text-stone-600 mb-8 max-w-xl mx-auto`}>
            We have narrowed down our favorite names for the baby, but we'd love to hear your thoughts. Vote for your favorite below!
          </p>
          
          <div className="bg-stone-50 p-2 md:p-8 rounded-2xl shadow-inner border border-stone-200 overflow-hidden flex justify-center w-full max-w-full">
            <div className="w-full overflow-x-auto custom-scrollbar flex justify-center">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdBlN6FHKDSSJlwcfkD30Akm_Es-IkTFCm1-JGXdX13w6hhMw/viewform?embedded=true" 
                width="640" 
                height="583" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                className="max-w-full md:w-auto"
                style={{ maxWidth: '100%' }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Section 7: RSVP ---
const RSVPSection = () => {
  return (
    <section className="py-20 px-4 bg-rose-50/50">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className={`${theme.fonts.heading} text-3xl md:text-4xl text-rose-900 mb-6`}>We would love to see you there</h2>
          <p className={`${theme.fonts.body} text-stone-600 mb-8`}>"Your presence is the only gift we need to make this party a success—be there on 15th March to help us celebrate!"</p>
        </FadeIn>
      </div>
    </section>
  );
};

// --- Main App Component ---
function App() {
  return (
    <div className={`min-h-screen ${theme.colors.bgCream} text-stone-800 overflow-x-hidden`}>
      <HeroSection />
      <InvitationMessage />
      <ParentsSection />
      <GrandparentsSection />
      <EventDetails />
      <NamePoll />
      <RSVPSection />

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8 text-center pt-12 pb-12">
        <p className={`${theme.fonts.body} text-sm flex items-center justify-center gap-2`}>
          Made with <Heart size={14} className="text-rose-500" fill="currentColor" /> by the family
        </p>
      </footer>
    </div>
  );
}

export default App;