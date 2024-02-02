import React from 'react';

const ExamCityMap: React.FC = () => {
  return (
    <div className="relative h-0" style={{ paddingBottom: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43519.0808920067!2d81.78303951544297!3d25.424500218694664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398535c3c6a2e143%3A0xa3e555db12c2ffb3!2sHotel%20Hira%20Inn!5e0!3m2!1sen!2sin!4v1706249934707!5m2!1sen!2sin"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ExamCityMap;
