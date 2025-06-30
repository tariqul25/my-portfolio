import React from 'react';

const Footer = () => {
    return (
    <footer className="footer sm:footer-horizontal footer-center bg-accent text-base-content py-4">
  <aside className='max-w-7xl mx-auto px-4'>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by TARIQUL</p>
  </aside>
</footer>
    );
};

export default Footer;