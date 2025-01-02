import React, { useState } from "react";

const PriceList = () => {
  const [services, setServices] = useState([
    { name: "Appointment Charges/ Channeling Fee", price: "Free" },
    { name: "Service Charges, Taxes & VAT", price: "Free" },
    { name: "Examination and Consultation", price: "Free" },
    { name: "Teeth Whitening – Examination Visit", price: "Free" },
    { name: "Teeth Whitening – Starter Package", price: "Rs 35,000/-" },
    { name: "Teeth Whitening – Regular Package", price: "Rs 60,000/-" },
    { name: "Teeth Whitening – Hollywood Package", price: "Rs 85,000/-" },
    { name: "Dental Implant Consultation", price: "Free" },
    { name: "Dental Implant (Mini/Hybrid) – with Porcelain Crown", price: "Rs 100,000/-" },
    { name: "Dental Implant – with Porcelain Crown", price: "Rs 150,000/-" },
    { name: "Braces – One Arch", price: "Rs 130,000/-" },
    { name: "Braces – Both Arches", price: "Rs 250,000/-" },
    { name: "Payment Plan – 1st Visit for Braces", price: "Rs 10,000/-" },
    { name: "Payment Plan – 2nd Visit for Braces – Bond Up", price: "50% of the total" },
    { name: "Payment Plan – 3rd & Any Other Visit – Adjustment", price: "Rs 5,000/-" }
  ]);

  return (
    <section id="price-list" className="shadow-box bg-custom-blue">
      <div className="mt-4">
        <h3 className="text-center">Price List</h3>
        <button className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#addServiceModal">
          Add New Service
        </button>
        <div className="dropdown mb-3">
          <select className="form-select mb-3" id="services">
            <option value="">Select Service</option>
            {services.map((service, index) => (
              <option key={index} value={index}>
                {service.name} - {service.price}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
