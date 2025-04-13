import Industries from '@/components/ocrLandingpage/industries'
import OcrWorkFlow from '@/components/ocrLandingpage/ocd-workfloe'
import OcrContactInfo from '@/components/ocrLandingpage/ocr-contact'
import OcrDemo from '@/components/ocrLandingpage/ocr-demo'
import OcrFaq from '@/components/ocrLandingpage/ocr-faq'
import HowOcrWorks from '@/components/ocrLandingpage/ocr-howItWorks'
import OcrIndex from '@/components/ocrLandingpage/ocr-index'
import OcrKeyFeatures from '@/components/ocrLandingpage/ocr-keyfeatures'
import SpecialHome from '@/components/ocrLandingpage/specialized-industries/special-home'
import OcrNavbar from '@/layouts/ocrnavbar'
import React from 'react'
import { OcrFastApi } from './fast-api'

const timelineData = [
  { title: "Step 1", content: <p><span className='text-teal-500'>AI-Powered Accuracy:</span> Harness the power of AI to extract and analyse </p> },
  { title: "Step 2", content: <p> <span className='text-teal-500'>Ultra-Fast Processing: </span>Experience lightning-speed automation with seamless APIs</p> },
  { title: "Step 3", content: <p><span className='text-teal-500'>Secure SOC:</span> AI-driven accuracy and lightning-fast threat response with Secure SOC.</p> },
  { title: "Step 4", content: <p> <span className='text-teal-500'>Efficiency:</span> Improve turnaround times, minimize errors, and deliver superior outcomes to customers and stakeholders.</p> },
];

const OcrHome = () => {
  return (
    <div className='bg-white'>
      <OcrNavbar />
      <div>
        <OcrIndex />
        <Industries />
        <HowOcrWorks />
        <OcrFastApi data={timelineData} />
        <SpecialHome />
        <OcrKeyFeatures />
        <OcrWorkFlow />
        <OcrDemo />
        <OcrFaq />
        <OcrContactInfo />
        
      </div>
    </div>
  )
}

export default OcrHome;
