"use client";
import React from "react";
import CompanyInfo from "../component/CompanyInfo";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import Press10 from "../component/MouAnnouncement";

const shareUrl = encodeURIComponent("https://www.rase.co.in/Press5"); // Replace with your actual page URL
const shareText = encodeURIComponent(
  "राष्ट्रीय शिक्षा नीति से राष्ट्रीय भावना को मिला सम्मानः प्रोफेसर सोमनाथ सचदेवा"
);
const shareImage = "/2024M/press5.jpg";

// ✅ Data object with proper typing
const data = {
  Press: "5",
  image: "/press/press10.jpg",
  title: ``,
  sections: [
    {
      title: "",
      content: [
        `शिक्षा को एक वैश्विक मंच प्रदान करते हुए सशक्त शिक्षा तंत्र बनाने में योगदान के उद्देश्य से आयोजित किए जाने वाले "शिक्षा महाकुंभ अभियान" के पंचम संस्करण को लेकर एक महत्वपूर्ण MoU शिक्षा महाकुंभ अभियान के पालक संस्थान डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन (DHE) जोकि विद्या भारती प्रशिक्षण एवं शोध संस्थान ट्रस्ट का एक थिंक टैंक डिपार्टमेंट है एवं NIPER मोहाली के मध्य सम्पन्न हुए। इस अभियान का पंचम संस्करण 31 अक्टूबर से 2 नवम्बर 2025 तक राष्ट्रीय औषधि शिक्षा एवं अनुसंधान संस्थान (NIPER) मोहाली में आयोजित किया जाएगा।`,
      ],
    },
    {
      title: "बाक्स",
      content: [
        `यह MoU नाईपर मोहाली के निदेशक कार्यालय में सम्पन्न हुआ। डिपार्टमेंट ऑफ होलिस्टिक एजुकेशन के निदेशक प्रो (डॉ) ठाकुर एसकेआर एवं NIPER मोहाली के कार्यकारी निदेशक प्रो कुलभूषण टिक्कू के हस्ताक्षर से MoU सम्पन्न हुआ। दोनों संस्थानों ने मिलकर इस आयोजन को सफलतापूर्वक संपन्न कराने का संकल्प लिया। DHE के निदेशक प्रो ठाकुर एसकेआर ने कहा कि “शिक्षा महाकुंभ एक वैश्विक जनआंदोलन का रूप ले रहा है, जिसका उद्देश्य शिक्षा को ओलंपिक की तर्ज पर एक वैश्विक मंच प्रस्तुत करना है।”`,
      ],
    },
    {
      title: "शिक्षा महाकुंभ बना नवाचार एवं उद्यमिता का केन्द्र",
      content: [
        `आगे NIPER मोहाली के कार्यकारी निदेशक प्रो कुलभूषण टिक्कू ने कहा कि “इस आयोजन से उच्च शिक्षण संस्थानों को नवाचार और मूल्यों पर आधारित शिक्षा के मार्ग पर चलने की प्रेरणा मिलेगी।” DHE के बिज़नेस एडवाइज़र श्री पंकज शर्मा ने पिछली कड़ियों की चर्चा करते हुए कहा कि “हर संस्करण ने एक नई ऊँचाई तय की है। यह पंचम संस्करण नई दिशा और संरचना लेकर आएगा।” शिक्षा महाकुंभ अभियान की कोर कमेटी के सदस्य डॉ. वीरेंद्र गर्ग जी ने वित्तीय योजना प्रस्तुत करते हुए कहा कि “हम बजट, प्रायोजन और संसाधनों के बेहतर उपयोग हेतु एक समर्पित वित्तीय ढांचा विकसित करेंगे।” आगे DHE  के प्रचार विभाग से विंग कमांडर संजीव शर्मा ने प्रस्ताव दिया कि “शिक्षा महाकुंभ आयोजन तक NIPER कैंपस में एक स्थायी कार्यालय की व्यवस्था की जाएगी जिससे समन्वय में गति आए।”`,
      ],
    },
    {
      title: "संपर्क करें:",
      content: [
        <>
          <ul key="contact-list">
            <li>
              <a
                href="tel:+917903431900"
                style={{ color: "blue", textDecoration: "none" }}
              >
                Call: +91 94632 31250 - शमशेर सिंह जी
              </a>{" "}
              <a
                href="https://wa.me/917903431900"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/20/25D366/whatsapp.png"
                  alt="WhatsApp"
                  style={{
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="tel:+918360990494"
                style={{ color: "blue", textDecoration: "none" }}
              >
                Call: +91 83609 90494 - जितेश पांडेय जी
              </a>{" "}
              <a
                href="https://wa.me/918360990494"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/20/25D366/whatsapp.png"
                  alt="WhatsApp"
                  style={{
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </li>
            <li>
              <a
                href="tel:+919416362401"
                style={{ color: "blue", textDecoration: "none" }}
              >
                Call: +91 94163 62401 - सुनील धींगड़ा जी
              </a>{" "}
              <a
                href="https://wa.me/919416362401"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/20/25D366/whatsapp.png"
                  alt="WhatsApp"
                  style={{
                    width: "20px",
                    height: "20px",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </li>
          </ul>
        </>,
      ],
    },
    {
      title: "सादर,",
      content: [`संयोजक शिक्षा महाकुंभ 2024`],
    },
    {
      title: "भागीदारी के लिए अधिक जानकारी के लिए संपर्क करें:",
      content: [
        `🌐 www.shikshamahakumbh.com\n✉️ info@shikshamahakumbh.com`,
      ],
    },
  ],
};

// ✅ Page Component
export default function Home() {
  return (
    <div className="bg-white">
      <CompanyInfo />
      <NavBar />

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 pb-6">
        <div className="w-full sm:w-1/5">{/* Left sidebar */}</div>

        <div className="w-full sm:w-3/5">
          <Press10 data={data} />

          {/* ✅ Social Media Sharing Section */}
          <div className="mt-6 flex justify-center space-x-4">
            <a
              href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-400 text-white rounded hover:bg-blue-500"
            >
              Twitter
            </a>
            <a
              href={`mailto:?subject=Shiksha Mahakumbh 2.0&body=${shareText}%20${shareUrl}`}
              className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Email
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/5">{/* Right sidebar */}</div>
      </div>

      <Footer />
    </div>
  );
}
