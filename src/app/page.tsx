import OcrHome from '@/components/ocrLandingpage/ocr-home'
import React from 'react'
import { Metadata } from 'next'

export const metadata = ({ title : "docsynecx - Transform Documents with Gen-AI OCR for Invoices, Reciepts, Logistic Labels"}) as Metadata
const page = () => {
  return (
    <div className='bg-white text-black'><OcrHome /></div>
  )
}

export default page