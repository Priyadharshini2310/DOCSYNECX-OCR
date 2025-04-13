import React from 'react'
import { Metadata } from 'next'
import Pricing from '@/components/ocrLandingpage/ocr-pricing'

export const metadata = ({ title : "docsynecx -Document AI Plans & Pricing"}) as Metadata
const page = () => {
  return (
    <div><Pricing /></div>
  )
}

export default page