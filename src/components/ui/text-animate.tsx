// "use client";
// import React from "react";
// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalTrigger,
// } from "../ui/text-animation";

// import { motion } from "motion/react";

// export function AnimatedModalDemo() {
//   const images = [
//     "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];
//   return (
//     <div className="py-40  flex items-center justify-center">
//       <Modal>
//         <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
//           <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
//             Book your flight
//           </span>
//           <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
//             ✈️
//           </div>
//         </ModalTrigger>
        
//       </Modal>
//     </div>
//   );
// }



"use client";
import React from "react";

export function AnimatedModalDemo() {
  return (
    <div className="py-40 flex items-center justify-center relative">
      <a
        href="https://app.docsynecx.com/signin/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black   text-white flex justify-center items-center group relative overflow-hidden px-6 py-2 rounded-lg"
      >
        <span className="group-hover:translate-x-40 transition duration-500">
          Free Trail
        </span>
        <div className="absolute inset-0 flex items-center justify-center -translate-x-40 group-hover:translate-x-0 transition duration-500 text-white z-20">
          Try Now 
        </div>
      </a>
    </div>
  );
}
