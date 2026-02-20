import React from 'react';
const SkillsSection: React.FC = () => {
  return (
    <section id="skills">
      <h2>Technologies & Skills</h2>
      <dl>
        <dt><strong>Frontend</strong></dt>
        <dd>
          React.js, Next.js, Context API, JavaScript (ES6+), TypeScript,
          Tailwind CSS, HTML5, CSS3
        </dd>
        <dt><strong>Backend</strong></dt>
        <dd>
          Node.js, Express.js, RESTful APIs, Authentication, Authorization
        </dd>
        <dt><strong>Databases</strong></dt>
        <dd>
          MongoDB (NoSQL)
        </dd>
        <dt><strong>Tools & Platforms</strong></dt>
        <dd>
          Git & GitHub, Postman, FileZilla, Figma
        </dd>
        <dt><strong>AI Tools</strong></dt>
        <dd>
          v0, Lovable
        </dd>
      </dl>
    </section>
  );
};
export default SkillsSection;