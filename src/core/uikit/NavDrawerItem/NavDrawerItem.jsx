/* eslint-disable react/prop-types */
import uuid from 'react-uuid';
import './NavDrawerItem.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { IconContext } from 'react-icons';

export default function NavDrawerItem({ title, icon, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-drawer-item">
      <button className={`clickable ${isOpen && 'open'}`} onClick={() => setIsOpen((prev) => !prev)}>
        <IconContext.Provider value={{ className: 'leading-icon', size: '2.6rem' }}>
          {icon}
        </IconContext.Provider>
        <p className="title">{title}</p>
        {
          isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />
        }
      </button>
      <section className={`links ${isOpen && 'open'}`}>
        <ul>
          {
            links.map(({title, path}) => (
              <li key={uuid()}>
                <Link to={path}>
                  <p className="link-title">{title}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
      <p>{title}</p>
      {icon}
    </div>
  )
}