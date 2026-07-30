import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='relative z-50 bg-transparent px-6 py-6 sm:px-10 sm:py-8'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between gap-16'>
        <div className='text-white text-3xl font-black tracking-tight'>
          PORTFOLIO <span className='text-primary'>.</span>
        </div>

        <nav className='hidden items-center gap-12 md:flex'>
          <ul className='flex items-center gap-8'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  type='button'
                  onClick={() => scrollToSection(item.href)}
                  className='text-gray-300 hover:text-white text-base font-medium transition-colors'
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <button
            type='button'
            onClick={() => scrollToSection('#contact')}
            className='rounded-lg bg-primary px-6 py-2.5 text-base font-semibold text-white transition hover:bg-primary/90'
          >
            Contact Me
          </button>
        </nav>

        <button
          type='button'
          className='md:hidden text-white'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label='Toggle menu'
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 bg-[#111827] p-8 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type='button'
          className='mb-10 self-end text-white'
          onClick={() => setIsMenuOpen(false)}
          aria-label='Close menu'
        >
          <X size={32} />
        </button>

        <ul className='flex flex-col gap-8'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                type='button'
                onClick={() => scrollToSection(item.href)}
                className='text-white text-xl font-semibold hover:text-primary transition-colors'
              >
                {item.name}
              </button>
            </li>
          ))}

          <li className='pt-6'>
            <button
              type='button'
              onClick={() => scrollToSection('#contact')}
              className='w-full rounded-xl bg-primary py-4 text-lg font-bold text-white'
            >
              Contact me
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
