import React from "react";
import HealthCare from "./health-care";
import OcrLogistics from "./logistics";
import TaxInvoice from "./tax-invoice";
import SpecialHeader from "./spec-header";

const SpecialHome = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <SpecialHeader />
      <div className="mt-6 space-y-8">
        <TaxInvoice />
        <OcrLogistics />
        <HealthCare />
      </div>
    </div>
  );
};

export default SpecialHome;
