"use client";
import React, { useState, useEffect } from "react";

const Info = () => {
  const text = `
Shiksha Mahakumbh Abhiyan: A National Movement for Global Educational Transformation

Shiksha Mahakumbh Abhiyan is a visionary multi-edition national movement conceptualised by visionary ISRO scientist and accomplished author Dr Thakur SKR under the guidance of Mr Vijay Nadda, Visionary Educationist and Social Reformer that unites leaders from across education, policy, industry, civil society, and the youth to reimagine and reform the Indian education system—while contributing to the evolution of a globally equitable, future-ready learning ecosystem.

Rooted in Indian knowledge systems and aligned with global educational priorities, this initiative serves as a vibrant platform for collaboration, innovation, and action. It is designed to influence educational transformation not only in India but across the globe—bringing together insights from local classrooms and global think tanks alike.

At the heart of Shiksha Mahakumbh Abhiyan lies an ambitious yet grounded vision: to help shape an inclusive, interdisciplinary, ethical, and resilient global education framework. It emphasizes:

Integration of global best practices with Indian values

Innovative pedagogies and future-ready curriculum

Harnessing technology and digital learning to enhance accessibility and relevance

The initiative focuses on urgent educational priorities including:

Inclusivity and universal access to quality learning

Teacher training, capacity building, and professional growth

Policy alignment with UN SDGs and national development goals

Cultural preservation and global exchange

Bridging the digital divide through EdTech

Flexible, skill-based, and multidisciplinary learning models

Promotion of ethical, sustainable, and local-context education

Each edition of the Mahakumbh is designed not just for discussion but to generate actionable insights, policy roadmaps, and community-driven solutions. Each edition of the Abhiyan builds upon the outcomes of the previous, weaving a continuous thread of innovation, implementation, and impact:

🔹 1st Edition – NIT Jalandhar | 9–11 June 2023

Theme: Recent Advances in School Education (RASE)

Impact: Initiated national dialogue on foundational reforms, introduced community-driven school models, and generated a best practices compendium on K–12 innovations.

🔹 2nd Edition – NIT Kurukshetra | 20 December 2023
Theme: Role of Academic-Driven Startups in the Economy (RASE)

Impact: Sparked nationwide collaboration between academia and entrepreneurship, resulting in MoUs, startup incubation, and industry-institution integration plans.

🔹 3rd Edition – NIT Srinagar | 29–30 June 2024
Theme: Academic Innovation for the Economic Development of J&K

Impact: Focused on peace-building and economic empowerment through education in conflict-prone zones; initiated local skilling programs and startup mentorship cells.

🔹 4th Edition – Kurukshetra University | 16–17 December 2024
Theme: Indian Education System for Global Development

Impact: Developed a national vision document for India as a global education hub, rooted in NEP 2020 and Indian knowledge systems.

🔹 5th Edition – NIPER Mohali | 31 Oct – 2 Nov 2025
Theme: Empowering Global Health through Pharma Innovation and Education

Expected Impact: Strategic roadmap for linking pharmaceutical education, R&D, and global health; building India's role in global medical innovation and knowledge exchange.

Shiksha Mahakumbh Abhiyan is not just a conference series—it is a national implementation accelerator. Each edition contributes to:

Actionable frameworks for educational institutions and policy bodies

Cross-sector partnerships between academia, industry, NGOs, and government

White papers, manuals, and policy briefs for stakeholders

Formation of task forces and working groups for follow-through and monitoring

What sets Shiksha Mahakumbh Abhiyan apart is its commitment to deep inclusion. It moves beyond academic silos to engage:

School teachers, principals, and university leaders

Youth changemakers, students, and researchers

Rural educators, grassroots innovators, and panchayat leaders

Policymakers, industry professionals, and technologists

NGOs, CSR heads, international diplomats, and media voices

This whole-of-society approach ensures that reforms are not only visionary but also practical, inclusive, and community-driven. The Shiksha Mahakumbh Abhiyan is a clarion call to every citizen, policymaker, and thought leader.
  `

  const [isTextExpanded, setIsTextExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile layout

  const toggleText = () => {
    setIsTextExpanded(!isTextExpanded);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const isMobileScreen = () => window.innerWidth < 640;
      // Update isMobile based on screen width
      setIsMobile(isMobileScreen());
    };

    // Check window size initially
    handleWindowResize();

    // Add a listener for window resize events
    window.addEventListener('resize', handleWindowResize);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Empty dependency array to run this effect only once

  // Define the text class based on isMobile
  const textClass = isMobile ? 'text-l' : 'text-l';
  const textClassHeading = isMobile ? 'text-xl' : 'text-xl';

  // Split text at the point where the "Read More" button should appear
  const splitIndex = text.indexOf('progressive and prosperous path') + 600; // Length of "progressive and prosperous path"

  const textBefore = text.slice(0, splitIndex);
  const textAfter = text.slice(splitIndex);

  return (
    <div className="bg-white px-4 py-2 flex flex-col justify-between items-start">
      <h1 className={`${textClassHeading} py-2 text-[#502a2a] font-bold text-2xl`}>
        About Shiksha Mahakumbh Abhiyan
      </h1>
      <div className={`mb-4 whitespace-pre-line text-justify text-black`}>
        <div
          dangerouslySetInnerHTML={{ __html: isTextExpanded ? text : `${textBefore}.....` }}
        />
        <button
          onClick={toggleText}
          className={`text-[#502a2a] font-bold mt-2`}
        >
          {isTextExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default Info;