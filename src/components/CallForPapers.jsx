import React from "react";
import AcademicSectionsCards from "./AcademicSectionsCards";

export default function CallForPapers() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 py-10 px-5 md:px-16 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-950 mb-4 animate-slideDown">
          📢 Call for Papers – Multi-Track Conference
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6 animate-slideUp">
          Shiksha Mahakumbh Abhiyan – 5th Edition
        </h2>

        {/* Venue & Date */}
        <div className="text-center mb-8">
          <p className="text-lg">📍 Venue: NIPER, Mohali</p>
          <p className="text-lg">📅 Dates: 31st October – 2nd November 2025</p>
          <p className="mt-4">
            Join us for a prestigious platform to present your research, ideas,
            and innovations aligned with NEP 2020 and the spirit of{" "}
            <b>Viksit Bharat @2047</b>.
          </p>
        </div>

        {/* Paper Guidelines */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-red-950 mb-2">
            🧾 Paper Submission Guidelines
          </h3>
          <p>
            → Click here to view full paper guidelines
            <br />
            <br />
            Section wise efforts will be made to publish the selected papers in
            Scopus Indexed Journals after a peer review process by Editorial
            Board. The papers which are not selected in the Indexed Journals
            will be considered for emerging journals i.e. ‘Viksit Bharat’ &
            ‘Viksit India’ or Book Chapter with ISBN number after a peer review
            process. All the accepted abstracts (with registration fee) will be
            published in Conference Proceeding with ISBN number. For more
            information about Viksit Bharat & Viksit India Journals, visit{" "}
            <a
              href="https://www.pub.dhe.org.in"
              className="text-blue-500 underline"
              target="_blank"
              rel="noreferrer"
            >
              www.pub.dhe.org.in
            </a>{" "}
            or scan QR code.
          </p>
        </section>

        {/* Important Dates */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-red-950 mb-2">
            📅 Important Dates
          </h3>
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Milestone</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Call for Papers</td>
                <td className="border px-4 py-2">1st August 2025</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Abstract Submission Deadline</td>
                <td className="border px-4 py-2">15th September 2025</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Notification of Acceptance</td>
                <td className="border px-4 py-2">25th September 2025</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Full Paper Submission</td>
                <td className="border px-4 py-2">10th October 2025</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Registration Fees */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-red-950 mb-2">
            💰 Registration Fees
          </h3>
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Fee (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">UG/PG Students</td>
                <td className="border px-4 py-2">₹ 500</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Research Scholars</td>
                <td className="border px-4 py-2">₹ 1,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Academia & R&D Personnel</td>
                <td className="border px-4 py-2">₹ 2,100</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Industry Professionals</td>
                <td className="border px-4 py-2">₹ 5,000</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Submission Links */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-red-950 mb-2">
            📎 Submission Links & Templates
          </h3>
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Submission Type</th>
                <th className="border px-4 py-2">Link</th>
                <th className="border px-4 py-2">Template</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Abstract</td>
                <td className="border px-4 py-2">
                  <a href="#" className="text-blue-500 underline">
                    Submit Abstract
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <a href="#" className="text-blue-500 underline">
                    Download Abstract Template
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Full Paper</td>
                <td className="border px-4 py-2">
                  <a href="#" className="text-blue-500 underline">
                    Submit Full Paper
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <a href="#" className="text-blue-500 underline">
                    Download Full Paper Guidelines
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        

        {/* Call for Papers */}
        <section className="mb-8">
          <AcademicSectionsCards/>
          </section>

        {/* Publication Opportunity */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-red-950 mb-2">
            📚 Publication Opportunity
          </h3>
          <p>
            ✅ Scopus / UGC Journals (peer-reviewed) <br />
            ✅ Viksit Bharat & Viksit India Journals <br />
            ✅ ISBN Conference Proceedings <br />
            ✅ ISBN Book Chapters
          </p>
          <p className="mt-2">
            🔗 Visit:{" "}
            <a
              href="https://www.pub.dhe.org.in"
              className="text-blue-500 underline"
              target="_blank"
              rel="noreferrer"
            >
              www.pub.dhe.org.in
            </a>{" "}
            for journal details
          </p>
          <p className="mt-2">
            📘 All accepted abstracts (with registration) will be published in
            ISBN Conference Proceedings.
          </p>
        </section>

        {/* Acknowledgment */}
        <section>
          <h3 className="text-2xl font-semibold text-red-950 mb-2">
            🤝 Acknowledgment
          </h3>
          <p>
            This conference gratefully acknowledges the support of Microsoft
            CMT for managing the peer-review process. Microsoft generously
            provided this service free of charge, including Azure cloud hosting,
            development, and support.
          </p>
        </section>
      </div>
    </div>
  );
}
