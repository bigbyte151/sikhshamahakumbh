import React from "react";
import CompanyInfo from "../component/CompanyInfo";
import NavBar from "../component/NavBar";
import PaperSubmission from "../component/Papersubmit";
import Footer from "../component/Footer";
import CallForPapers from "@/components/CallForPapers"

const page = () => {
  return (
    <div className="bg-white">
      <CompanyInfo />
      <NavBar />
      <CallForPapers/>
      <PaperSubmission />
      <Footer />
    </div>
  );
};

export default page;
