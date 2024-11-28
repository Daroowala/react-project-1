import React from 'react';


const services = [
  {
    icon: '🌍', // You can replace this with an actual icon if using a library like FontAwesome
    title: 'Shipping Worldwide',
    description: 'Reliable worldwide shipping – bringing health solutions to your doorstep, wherever you are with SKS Pharmaceutical.',
  },
  {
    icon: '🚚', // You can replace this with an actual icon if using a library like FontAwesome
    title: 'Same-Day Delivery',
    description: 'Enjoy same-day delivery on all your essential health products with SKS Pharmaceutical – your health, delivered fast!',
  },
  {
    icon: '💊', // You can replace this with an actual icon if using a library like FontAwesome
    title: 'Pharmacy Support',
    description: 'Count on our pharmacy support for expert guidance and personalized care, anytime you need it with SKS Pharmaceutical.',
  },
  {
    icon: '😊', // You can replace this with an actual icon if using a library like FontAwesome
    title: 'Refund Guarantee',
    description: 'Shop with confidence! We offer a refund guarantee to ensure your complete satisfaction at SKS Pharmaceutical.',
  },
];

const ServiceBar = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-4 gap-4">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-3xl mb-2">{service.icon}</div>
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-center">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceBar;
