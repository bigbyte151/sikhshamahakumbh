import React from "react";

const ProgrammesPage = () => {
  const thematicConclaves = [
    {
      title: "1. National Education Leadership Conclave",
      who: "Who: Vice-Chancellors, Directors, NEP Experts",
      focus: "Focus: Institutional autonomy, global standards",
      outcome: "Outcome: Vision Charter for Higher Education @2047"
    },
    {
      title: "2. School Transformation & Leadership Conclave",
      who: "Who: Principals, DEOs, Edu Officers",
      focus: "Focus: Leadership, foundational literacy",
      outcome: "Outcome: Model School Leadership Toolkit"
    },
    {
      title: "3. Teachers of Bharat Conclave",
      who: "Who: Teachers across all levels, para-educators",
      focus: "Focus: Pedagogy, multilingual teaching, tech in classrooms",
      outcome: "Outcome: 21st Century Bharat Shikshak Framework"
    },
    {
      title: "4. Global Partnerships & Knowledge Diplomacy Conclave",
      who: "Who: Foreign universities, diplomats",
      focus: "Focus: Academic mobility, international collaboration",
      outcome: "Outcome: Global Education Roadmap for Bharat"
    },
    {
      title: "5. Policy, Governance & Innovation Conclave",
      who: "Who: Bureaucrats, think tanks, edu-startups",
      focus: "Focus: Digital education governance, startup synergy",
      outcome: "Outcome: Edu-Governance Reform Blueprint"
    },
    {
      title: "6. Social Responsibility & Equity Conclave",
      who: "Who: CSR leaders, NGOs, grassroots edu-activists",
      focus: "Focus: Access, gender equity, underserved communities",
      outcome: "Outcome: Inclusive Education Investment Charter"
    },
    {
      title: "7. Student Changemakers Conclave",
      who: "Who: NSS/NCC leaders, youth entrepreneurs",
      focus: "Focus: Youth governance, mental wellness",
      outcome: "Outcome: Bharat Yuva Education Manifesto"
    },
    {
      title: "8. Research, Science & Knowledge Systems Conclave",
      who: "Who: Scientists, scholars, R&D teams",
      focus: "Focus: Interdisciplinary research, patents, Indic knowledge",
      outcome: "Outcome: Research-to-Policy Action Guide"
    },
    {
      title: "9. Media, Narratives & Digital Influence Conclave",
      who: "Who: Edufluencers, journalists, storytellers",
      focus: "Focus: Narrative building, responsible digital communication",
      outcome: "Outcome: Shiksha Media Ethics & Impact Code"
    },
    {
      title: "10. Grassroots & Community Education Conclave",
      who: "Who: Rural educators, Panchayat leaders, Anganwadi workers",
      focus: "Focus: Contextual curriculum, regional learning",
      outcome: "Outcome: Jan Shiksha Innovation Compendium"
    },
    {
      title: "11. Inclusion & Differently-Abled Learning Conclave",
      who: "Who: Special educators, inclusive tech startups",
      focus: "Focus: Universal Design of Learning (UDL), accessibility",
      outcome: "Outcome: Inclusive Bharat Education Charter"
    },
    {
      title: "12. Parents & Civil Society Conclave",
      who: "Who: PTA members, community parents",
      focus: "Focus: Digital parenting, school-community linkages",
      outcome: "Outcome: Home-School Engagement Guidelines"
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-950 mb-6 uppercase">
          PROGRAMMES @ SHIKSHA MAHAKUMBH 2025
        </h2>
        <p className="text-center text-lg font-medium mb-8 text-gray-700">
          A multi-dimensional educational experience packed with insight, innovation, and inspiration.
        </p>

        {/* Key Programme Segments */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-red-950 mb-4">◆ Key Programme Segments</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Conclaves on Education, Innovation, Governance & Inclusion",
              "Research Paper Presentations",
              "National Competitions for School Students",
              "Showcasing Startups & Innovations",
              "Exhibitions of Student Projects",
              "Sharing of Best Practices",
              "Recognition of Emerging Talents",
              "Awards for Excellence in Education & Social Service",
              "Cultural Performances",
              "Pitching Sessions for Innovators",
              "Branding & Business Promotion Opportunities",
              "Public Relations & Media Engagements",
              "Signing of Strategic MoUs"
            ].map((segment, index) => (
              <div key={index} className="bg-red-50 p-4 rounded shadow-md">
                {segment}
              </div>
            ))}
          </div>
        </div>

        {/* Thematic Conclaves */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-red-950 mb-4">◆ THEMATIC CONCLAVES</h3>
          <div className="grid grid-cols-2 gap-4">
            {thematicConclaves.map((item, index) => (
              <div key={index} className="bg-red-50 p-4 rounded shadow-md">
                <h4 className="font-bold text-red-950">{item.title}</h4>
                <p>{item.who}</p>
                <p>{item.focus}</p>
                <p className="font-medium">{item.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For School Students */}
        <div>
          <h3 className="text-2xl font-semibold text-red-950 mb-4">◆ For School Students</h3>

          <div className="mb-6 text-gray-700">
            <h4 className="font-bold text-red-950 mb-1">🛠 National Tinkering Challenge – Bharat ke Navachar</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Objective: Encourage community-focused innovations</li>
              <li>Themes: Climate, Agriculture, Disability Tech, Drug Delivery, Rural Ed</li>
              <li>Format: Prototype building + video pitching</li>
              <li>Outcome: Top entries receive incubation support and mentorship</li>
            </ul>
          </div>

          <div className="text-gray-700">
            <h4 className="font-bold text-red-950 mb-1">🤝 Innovation Club Meet-up</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Participants: ATL, CBSE Innovation Clubs, NCF Pilots</li>
              <li>Activities: Peer learning, innovation showcase</li>
              <li>Special: Meet & Learn from Teacher-Innovators</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesPage;
