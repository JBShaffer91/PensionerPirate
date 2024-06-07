import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  console.log("AboutPage component rendered");
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>Welcome to Pensioner Pirate</h1>
        <p>Your ultimate escape from the mundane. Whether you’re planning your next adventure or reminiscing about past trips, we’re here to ignite your spirit of wanderlust and help you live life to the fullest.</p>
      </section>
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to inspire and equip individuals to balance work and play by providing comprehensive travel planning tools and fostering a community of like-minded adventurers.</p>
      </section>
      <section className="about-story">
        <h2>Our Story</h2>
        <p>Pensioner Pirate was born from a love of adventure, a desire to explore the unknown, and the joy of sharing those experiences with others. Inspired by the laid-back vibes of Sublime and the thrill of surfing by the Ventura Pier, we wanted to create a space where people could find inspiration, plan their travels, and connect with a community that shares their passion for exploration.</p>
      </section>
      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Adventure:</strong> Embrace the thrill of exploring new places and trying new things.</li>
          <li><strong>Community:</strong> Foster a supportive and engaging community of adventurers.</li>
          <li><strong>Balance:</strong> Promote a healthy balance between work and leisure.</li>
          <li><strong>Inspiration:</strong> Inspire others to live life to the fullest and seek out new experiences.</li>
          <li><strong>Sustainability:</strong> Encourage sustainable travel practices to protect our beautiful planet.</li>
        </ul>
      </section>
      <section className="about-team">
        <h2>Meet the Team</h2>
        <p>Our team is made up of passionate travelers, adventure seekers, and storytellers who are dedicated to helping you plan the perfect escape. We believe in the power of community and the joy of sharing our experiences with others. Meet the team that makes it all happen!</p>
      </section>
      <section className="about-cta">
        <h2>Join Us</h2>
        <p>Ready to start your next adventure? Join our community, explore our articles, and use our adventure planner to create unforgettable memories. Let's make your next escape the best one yet!</p>
      </section>
    </div>
  );
};

export default AboutPage;
