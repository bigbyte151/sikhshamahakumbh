"use client";
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast'; // Toaster for notifications
import { useState, useEffect } from "react";
import Modal from './component/Modal'; // Import the modal component

const inter = Inter({ subsets: ['latin'] });

interface CustomWindow extends Window {
  localStream?: MediaStream;
  localAudio?: HTMLAudioElement;
}

declare var window: CustomWindow;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal state

  // Open and close handlers for modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    setTimeout(() => {
      setIsModalOpen(false)
    }, 8000);
  },[])

  // Handle microphone permissions
  const handlePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
      });
      window.localStream = stream;

      if (!window.localAudio) {
        window.localAudio = new Audio();
        document.body.appendChild(window.localAudio);
      }

      window.localAudio.srcObject = stream;
      window.localAudio.autoplay = true;
    } catch (err) {
      console.error(`You got an error: ${err}`);
    }
  };

  useEffect(() => {
    // You can uncomment this to request permissions automatically
    // handlePermission();
  }, []);

  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4330032354977759"
            crossOrigin="anonymous"
          ></script>
        )}
        <script async src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script
          async
          src="https://mediafiles.botpress.cloud/e2ba40e6-3b23-4f8d-a2f7-e2fbd8700925/webchat/config.js"
          defer
        ></script>
      </head>
      <meta httpEquiv="refresh" content="1000" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <title>Welcome to शिक्षा महाकुंभ and शिक्षा कुंभ। An initiative of DHE in collaboration with INIs to hold शिक्षा महाकुंभ annually and शिक्षा कुंभ half yearly.</title>
      <meta name="keywords" content="RASE2023, RASE 2023, National Conference on Recent Advances in School Education, rase 2023, r a s e, mahakumbh 2024, mahakumbh 2023, महाकुंभ 2023, महाकुंभ 2024" />
      <meta name="description" content="Joint Conference" />
      <meta httpEquiv="cache-control" content="no-cache" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="-1" />
      <meta name="google-adsense-account" content="ca-pub-4330032354977759" />
      <body className={inter.className}>
        {/* Main Content */}
        {children}

        {/* Modal Component */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div style={{zIndex:999}} className="text-white z-40 p-4 rounded-lg flex flex-col items-center justify-center text-center text-base md:text-xl font-semibold bg-primary">
            <p className='mb-4'>
              <strong>शिक्षा महाकुंभ अभियान</strong><br />5th Edition is going to be held <br></br> at NIPER, Mohali <br />from 31st October to 2nd November 2025 :
            </p>
            <p>
              <a href="https://shikshamahakumb.co.in/registration" className="px-4 my-2 mt-4 py-2 bg-white text-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <strong> Register Now</strong>
              </a>
            </p>
          </div>
        </Modal>




        {/* Toaster for notifications */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
