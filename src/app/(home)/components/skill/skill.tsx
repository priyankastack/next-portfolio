import React from 'react';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills">
      <h2>Technologies & Skills</h2>
      <dl>
        <dt><strong>Frontend</strong></dt>
        <dd>React.js,Redux,JavaScript (ES6+),Tailwind CSS,HTML5, CSS3,Three.js,GSAP</dd>

        <dt><strong>Backend</strong></dt>
        <dd>Node.js,Express.js,RESTful APIs</dd>

        <dt><strong>Databases</strong></dt>
        <dd>MongoDB, MySQL</dd>

        <dt><strong>Tools & Platforms</strong></dt>
        <dd>Git & GitHub,Figma</dd>

        <dt><strong>Programming & Core Concepts</strong></dt>
        <dd>JAVA, C++,OOPs, Data Structures & Algorithms (DSA)</dd>
      </dl>
    </section>
  );
};

export default SkillsSection;