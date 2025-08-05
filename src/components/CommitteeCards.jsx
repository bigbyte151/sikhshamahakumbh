import React from "react";

// General sections (excluding Organising Committee)
const committeeData = [
  {
    title: "Patron",
    members: ["Prof. Dulal Panda, Director, NIPER Mohali"]
  },
  {
    title: "Director",
    members: [
      "Dr. Thakur SKR, Scientist/Engineer-SF, ISRO",
      "Director, Department of Holistic Education (DHE)"
    ]
  },
  {
    title: "Secretaries",
    members: [
      "Prof. Kulbhushan Tikoo, NIPER Mohali",
      "Prof. Tarun Sharma, NIPER Mohali",
      "Dr. Jatinder Garg, Controller of Examinations, Central University of Himachal Pradesh, Dharamshala (HP)"
    ]
  },
  {
    title: "Joint Secretaries",
    members: [
      "Prof. Krishan Gopal, NIPER Mohali",
      "Sh. Mandeep Tiwari, Business Advisor, DHE",
      "Dr. Krishna Pandey, UIET, Kurukshetra"
    ]
  },
  {
    title: "Conveners",
    members: [
      "Dr. Vikram Singh, NIPER Mohali",
      "Dr. Shamsher Singh, AB College, Pathankot",
      "Dr. Vipin Kumar Jain, CBLU, Bhiwani"
    ]
  },
  {
    title: "Vidya Bharti (North Zone) Representatives",
    members: [
      "Sh. Vijay Nadda, Organizing Secretary",
      "Sh. Balkishan, Joint Organizing Secretary",
      "Sh. Sukhraj Shetiya, President",
      "Smt. Deepti Dharmani, Vice President",
      "Sh. Kulvir Sharma, Vice President",
      "Sh. Dilaram Chauhan, General Secretary",
      "Smt. Geeta Ahuja, Secretary",
      "Sh. Chander Has Gupta, Secretary",
      "Sh. Virender Balia, Treasure"
    ]
  }
];

// Organising Committee (handled separately)
const organisingCommittee = {
  title: "Organising Committee",
  members: [
    "Dr. Deepika Singh, NIPER Mohali",
    "Dr. B. B. Mishra, NIPER Mohali",
    "Dr. D. B. Salunke, NIPER Mohali",
    "Dr. U. R. Lal, NIPER Mohali",
    "Dr. Amit Kansal, Ex-Director NHPC",
    "Advocate Varinder Garg, Director, DHBVNL",
    "Prof. Brahamjit Singh, NIT Kurukshetra",
    "Dr. Vijay Kumar Sharma, NIT Srinagar",
    "Smt. Sonu Sharma, Member, DHE",
    "Sh. Sanyog Dutt, Director, Swarup Consultancy",
    "Dr. Jitesh Kumar Pandey, PMIDC, Dept. of Local Government, Punjab",
    "Sh. Sanjay Soni, Director, CSR, Vidya Bharti Haryana",
    "Sh. Sanjay Chaudhary, Founder, HUM Foundation",
    "Sh. Pankaj Kumar, CEO, KBD, Kurukshetra",
    "Advocate Prashant Tripathi, Lawyer, Supreme Court of India",
    "Sh. Bhupendra Dharmani, Ex-Information Commissioner, Haryana",
    "Dr. Nitya Sharma, IKGPTU, Jalandhar",
    "Dr. Neelam, LPU, Jalandhar",
    "Dr. Saurabh Sharma, IKGP TU, Jalandhar",
    "Dr. Praveen Sharma, CU Jammu",
    "Dr. Shiksha Sharma, Academic Advisor, DHE",
    "Prof. Anish Sachdeva, NIT Jalandhar",
    "Dr. Ashwini Rana, NIT Hamirpur",
    "Dr. Ravi Kant, IIT Ropar",
    "Dr. Praveen Kumar, IACS, Kolkata",
    "Prof. Sathans, NIT Kurukshetra",
    "Dr. Pooja Mahajan, Member DHE",
    "Adv. Aarti Sharma, Member DHE",
    "Dr. Manoj Teotia, CRID, Chandigarh",
    "Sh. Rupesh Keshi, Youtuber, English Connection",
    "Dr. Gaurav, IIT Delhi",
    "Dr. Vikash Kumar Garg, SLIET, Longowal",
    "Dr. Rajneesh Talwar, Professor and Dean DICE",
    "Dr. Tarun Changotra, GNDU Campus Pathankot",
    "Dr. Lakshmi Dhingra, AB College Pathankot"
  ]
};

const CommitteeCards = () => {
  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Committee Members
        </h1>

        {/* Regular Sections */}
        <div className="flex flex-wrap gap-6 justify-center">
          {committeeData.map((section, index) => (
            <div
              key={index}
              className="flex-grow basis-[300px] max-w-[100%] sm:max-w-[48%] lg:max-w-[32%] bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
                {section.title}
              </h2>
              <div className="text-gray-600 columns-1  gap-4">
                <ul className="list-disc list-inside space-y-1">
                  {section.members.map((member, i) => (
                    <li key={i} className="break-inside-avoid">{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Organising Committee Mapped Separately */}
        <div className="flex flex-wrap gap-6 justify-center mt-10">
          <div className="flex-grow basis-[300px] max-w-[100%] sm:max-w-[80%] bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
              {organisingCommittee.title}
            </h2>
            <div className="text-gray-600 columns-1 md:columns-2 lg:columns-3 gap-4">
              <ul className="list-disc list-inside space-y-1">
                {organisingCommittee.members.map((member, i) => (
                  <li key={i} className="break-inside-avoid">{member}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CommitteeCards;
