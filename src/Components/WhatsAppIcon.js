import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppIcon = () => {
  const whatsappNumber = "03327874970"; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white rounded-full p-3 cursor-pointer shadow-lg hover:bg-green-600" 
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-8 w-8" />
      <span className="ml-1 font-bold">Contact Us</span>
    </div>
  );
};

export default WhatsAppIcon;
