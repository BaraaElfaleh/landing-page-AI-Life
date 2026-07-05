import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-8">
      <div className="container-custom text-center">
        <p className="text-white/70">© {new Date().getFullYear()} AILife. All rights reserved.</p>
        <p className="text-neutral-500 text-sm mt-2">
          Made with ❤️ using Artificial Intelligence
        </p>
      </div>
    </footer>
  );
};

export default Footer;