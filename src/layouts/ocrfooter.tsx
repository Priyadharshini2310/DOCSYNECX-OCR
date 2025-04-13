

"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import router for navigation

const OcrFooter = () => {
  const router = useRouter();

  const handleFAQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const faqPath = "/#faq"; // Replace with the actual page where FAQ exists

    if (window.location.pathname === faqPath) {
      // If already on the FAQ page, just scroll
      scrollToFAQ();
    } else {
      // Navigate first, then scroll after the page loads
      router.push(faqPath);
      setTimeout(scrollToFAQ, 500); // Delay ensures the page loads first
    }
  };

  const scrollToFAQ = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      const offset = 100; // Adjust this value for proper spacing
      const faqPosition =
        faqSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: faqPosition, behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-white text-gray-700">
      <div>
      </div>

      {/* Main Footer - Responsive Layout */}
      <div className="container mx-auto py-12 px-4 md:px-5 flex flex-col sm:flex-row bg-white text-gray-700">
        {/* Logo and Description */}
        <div className="w-full sm:w-auto text-center sm:text-left flex-shrink-0 sm:ml-20 ml-0 mt-18 mb-6 sm:mb-0 sm:mr-20 mr-0">
          <Image
            src="/docsynecx-logo.png"
            alt="Company Logo"
            height={220}
            width={220}
            className="mx-auto sm:mx-0 mt-0 sm:-mt-20"
          />
          <p className="mb-6 text-sm md:text-base max-w-xs transition-colors duration-300 hover:text-black  text-center sm:text-left mx-3 sm:mx-0">
          AI OCR Software — accelerate with AI-powered 
          Intelligent Document Processing, automation, & developer-friendly APIs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-8 text-center sm:text-left w-full sm:w-auto sm:space-x-32 items-center sm:items-start">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-black transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="https://synecxailabs.io/about-us"
                  className="hover:text-black transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://synecxailabs.io/blog"
                  className="hover:text-black transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#ocrlancontact"
                  className="hover:text-black transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {/* <li>
                <a
                  href="/retail"
                  className="hover:text-black transition-colors duration-300"
                >
                  Retail
                </a>
              </li>
              <li>
                <a
                  href="/ocr"
                  className="hover:text-black transition-colors duration-300"
                >
                  Smart OCR
                </a>
              </li>
              <li>
                <a
                  href="/manufacturing"
                  className="hover:text-black transition-colors duration-300"
                >
                  Manufacturing
                </a>
              </li> */}
                            <li>
                  Banking & Finance
              </li>
              <li>
                 Supply Chain & Logistics
              </li>
              <li>
                  Healthcare 
              </li>
              <li>
                  Retail 
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://www.linkedin.com/showcase/docsynecx/posts/?feedView=all"
                  target="_blank"
                  className="hover:text-black transition-colors duration-300"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/synecxai/"
                  target="_blank"
                  className="hover:text-black transition-colors duration-300"
                >
                  Instagram
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#ocrlancontact"
                  className="hover:text-black transition-colors duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  onClick={handleFAQClick}
                  className="hover:text-black transition-colors duration-300"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-black transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black transition-colors duration-300"
                  onClick={(e) => e.preventDefault()}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-gray-200 text-sm w-full mx-auto">
        <p className="transition-colors duration-300 hover:text-black">
          © {new Date().getFullYear()} docsynecx an AI innovation by SynecX AI Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default OcrFooter;
