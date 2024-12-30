/**
 * @copyright 2024 - Reza Reynaldo Hutagaol
 * @license Apache-2.0
 */

import { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = useCallback(() => {
    if (activeBox.current && lastActiveLink.current) {
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } =
        lastActiveLink.current;

      Object.assign(activeBox.current.style, {
        top: `${offsetTop}px`,
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        height: `${offsetHeight}px`,
      });
    }
  }, []);

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);

    return () => {
      window.removeEventListener('resize', initActiveBox);
    };
  }, [initActiveBox]);

  const activeCurrentLink = useCallback((event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove('active');
    }
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = event.target;

    if (activeBox.current) {
      Object.assign(activeBox.current.style, {
        top: `${offsetTop}px`,
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        height: `${offsetHeight}px`,
      });
    }
  }, []);

  const navItems = [
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
  ];

  return (
    <nav className={classNames('navbar', { active: navOpen })}>
      <a
        href="#home"
        ref={lastActiveLink}
        className="nav-link active"
        onClick={activeCurrentLink}
      >
        Home
      </a>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
