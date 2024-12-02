import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5">
      <div className="container mx-auto flex justify-center items-center">
        <img src="/path/to/Logo.png" alt="Logo" className="h-20" />
      </div>
      <div className="container mx-auto flex flex-col items-center text-center text-white mt-4">
        <p>Plot # 1315/2, Ground Floor, Near Suffah Masjid, Azizabad Block 8 Gulberg Town, Karachi, Karachi City, Sindh 75300</p>
        <p>Cell No: 03458228119</p>
        <p>© 2022 Skspharmaceuticals. All Rights Reserved.</p>
      </div>
      <div className="container mx-auto flex justify-center items-center mt-4">
        <button 
          className="bg-green-500 text-white p-2 rounded-md shadow-lg flex items-center" 
          onClick={() => window.open('https://wa.me/03458228119', '_blank')}
        >
          <i className="fab fa-whatsapp h-6 w-6 mr-2"></i> Contact Us
        </button>
      </div>
      <div className="container mx-auto flex flex-col items-center text-center text-white mt-4">
        <div className="flex justify-around w-full">
          <div className="text-left">
            <h2>Solis Bio Corp</h2>
            <p>Certifications: GMP, ISO, HACCP</p>
            <p>Address: G.T. & T.I.E., Super Highway, Phase-I, Karachi-Pakistan</p>
          </div>
          <div className="text-left">
            <h2>Elite Pharma (Pvt) Ltd.</h2>
            <p>Certifications: GMP, FDA, IAF, ISO</p>
            <p>Enlist No.: 00409</p>
            <p>Address: Plot No. H-186, S.I.T.E. Super Highway, Phase (II), Karachi-Pakistan</p>
            <p>Website: www.elitepharma.com</p>
          </div>
          <div className="text-left">
            <h2>Bio Serve Pharma</h2>
            <p>Certifications: GMP, FDA, IAF, ISO</p>
            <p>Enlist No.: 00486</p>
            <p>Address: H-185, S.I.T.E., Super Highway, Phase-II, Karachi-Pakistan</p>
            <p>Website: www.bioservepharma.com</p>
          </div>
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="text-left">
            <h2>Nutrasource International</h2>
            <p>Address: E-70/A, S.I.T.E., Phase II, Super Highway, Karachi</p>
            <p>Mfg. Enlistment No.: 232</p>
          </div>
          <div className="text-left">
            <h2>ModHerbs</h2>
            <p>Certifications: FDA, IAF, ISO, GMP</p>
            <p>Enlist No.: 001745</p>
            <p>Address: Plot No. C-59, Sector 6-F, Islamabad, Opp. SITE, Super Highway, Karachi</p>
            <p>Website: www.modherbs.com</p>
          </div>
          <div className="text-left">
            <h2>SanCura Pharma</h2>
            <p>Address: E-206, North Western Industrial Zone, Port Qasim, Karachi-Pakistan</p>
            <p>Enlistment No.: 903</p>
          </div>
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="text-left">
            <h2>A.N. Nutraceutical Pharma</h2>
            <p>Certifications: FDA, IAF, ISO, GMP</p>
            <p>Enlistment No.: 0072</p>
            <p>Address: Not specified</p>
          </div>
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="text-left">
            <h2>AR Pharmaceuticals</h2>
            <p>Certifications: FDA, IAF, ISO</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
