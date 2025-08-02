import React from "react";

export default function AcademicSectionsCards() {
  const sections = [
    {
      id: 1,
      title: "Fundamental and Applied Sciences",
      chair: "Dr. Vipin Jain",
      team: [
        "Dr. Kapil",
        "Dr. Praveen Kumar",
        "Dr. Vijay Kumar",
        "Dr. Kamal Priya Singh",
        "Dr. V.K. Singhal",
        "Dr. Praveen Kumar (IACS)",
        "Dr. Pooja Sharma",
      ],
      subThemes: [
        "Physics, Chemistry, Biology, Mathematics",
        "Earth and Space Sciences",
        "Interdisciplinary Sciences (Biotechnology, Material Science, etc.)",
      ],
    },
    {
      id: 2,
      title: "Engineering and Technology",
      chair: "Dr. Anish Sachdeva",
      team: [
        "Dr. Intisar Qayiz",
        "Dr. Vikas (SLIET Longowal)",
        "Dr. Abhavesh Rana",
        "Dr. Pradip Praveen",
        "Dr. Pankaj (CU HP)",
        "Dr. Mohit Tyagi",
      ],
      subThemes: [
        "Core Engineering (Mechanical, Civil, Electrical, etc.)",
        "Emerging Technologies (AI, Robotics, Data Science, Quantum Tech)",
      ],
    },
    {
      id: 3,
      title: "EdTech and Digital Education",
      chair: "Dr. Rajneesh Talwar",
      team: ["Dr. Danvir Mandal", "Dr. Manvinder Sharma", "Dr. Satyajit Anand", "Dr. Pardeep Jindal"],
      subThemes: ["Education Technology Innovations", "Online & Blended Learning", "AI in Education", "Digital Literacy and Access"],
    },
    {
      id: 4,
      title: "Health Sciences and Traditional Medicine",
      chair: "Prof. Nitin Bansal",
      team: ["Dr. Shweta Chourasia", "Dr. Sanjeev"],
      subThemes: [
        "Modern Medicine",
        "AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy, Naturopathy)",
        "Public Health & Preventive Care",
      ],
    },
    {
      id: 5,
      title: "Social Sciences and Humanities",
      chair: "Dr. Bala Lakshendra",
      team: ["Dr. Manoj Tiwary", "Dr. Anju Saha"],
      subThemes: ["Sociology, Psychology, Political Science, History", "Philosophy, Ethics, and Cultural Studies"],
    },
    {
      id: 6,
      title: "Education Systems and Pedagogy",
      chair: "Prof. Pradeep Kumar Singh",
      team: ["Dr. Devjay Singh"],
      subThemes: [
        "Foundational to Secondary School Education",
        "Higher Education & Research",
        "Inclusive Education (Disabled, Marginalized, Gender-based)",
        "Gurukul & Indigenous Knowledge Systems",
        "Lifelong Learning & Adult Education",
      ],
    },
    {
      id: 7,
      title: "Management, Business & Entrepreneurship",
      chair: "Dr. Nitya Sharma",
      team: ["Dr. Sanyeeh Bansal"],
      subThemes: ["Business Administration", "Innovation and Startups", "Family Business & Social Entrepreneurship"],
    },
    {
      id: 8,
      title: "International Relations, Law & Governance",
      chair: "Ms. Poonima Pawar (Advocate, Delhi)",
      team: [],
      subThemes: ["Global Affairs", "Public Policy & Administration", "Legal Studies & Human Rights"],
    },
    {
      id: 9,
      title: "Sports, Physical Education & Well-being",
      chair: "Dr. Lakha Singh",
      team: [],
      subThemes: ["Physical Training & Sports Science", "Mental Health and Wellness", "Yoga and Lifestyle Education"],
    },
    {
      id: 10,
      title: "Agriculture, Food & Veterinary Sciences",
      chair: "Dr. Neelesh Sharma",
      team: ["Dr. Dhirender", "Dr. SPS", "Dr. Anish"],
      subThemes: ["Sustainable Agriculture", "Agri-Tech & Innovation", "Animal Health and Husbandry"],
    },
    {
      id: 11,
      title: "Environment, Sustainability & Water Resources",
      chair: "To be announced",
      team: [],
      subThemes: ["Climate Change", "Environmental Education", "Water & Natural Resource Management"],
    },
    {
      id: 12,
      title: "Culture, Arts & Heritage",
      chair: "Dr. Ravi Prakash",
      team: [],
      subThemes: ["Performing & Visual Arts", "Folk and Tribal Traditions", "Cultural Conservation and Promotion"],
    },
    {
      id: 13,
      title: "Languages and Linguistics",
      chair: "Dr. Anshu (CBLU Bhiwani)",
      team: [],
      subThemes: ["Indian Classical & Modern Languages", "Foreign Languages", "Translation and Language Technology"],
    },
    {
      id: 14,
      title: "Vocational & Skill-based Education",
      chair: "Dr. Dhirender",
      team: [],
      subThemes: ["Industrial Training", "Crafts and Traditional Skills", "Workforce Readiness and Certification"],
    },
    {
      id: 15,
      title: "Bharatiya Knowledge System (BKS)",
      chair: "Dr. V.K. Singh (ISRO)",
      team: ["Dr. Pankaj (CU HP)"],
      subThemes: [
        "Indigenous Knowledge & Wisdom Traditions",
        "Ancient Science, Mathematics & Philosophy",
        "Bharatiya Systems of Governance, Education, and Health",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-red-50 min-h-screen py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight text-red-950 text-center mb-10">
          Academic Sections and Paper Presentation Themes
        </h4>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="group relative rounded-2xl border border-red-200 bg-white p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl ring-1 ring-red-950/5 group-hover:ring-red-950/15" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-red-950">
                    {sec.id}. {sec.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-950">
                    Section {sec.id}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm leading-6">
                  <p>
                    <span className="font-semibold text-red-950">Chair:</span>{" "}
                    {sec.chair}
                  </p>

                  {sec.team && sec.team.length > 0 && (
                    <div>
                      <p className="font-semibold text-red-950">Team:</p>
                      <ul className="mt-1 list-disc ps-5 marker:text-red-950/80">
                        {sec.team.map((m, i) => (
                          <li key={i}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-red-950">Sub-Themes:</p>
                    <ul className="mt-1 list-disc ps-5 marker:text-red-950/80">
                      {sec.subThemes.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
