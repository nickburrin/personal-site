import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';
import Emoji from './Emoji';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nick Burrin</h2>
        <p><a href="mailto:nickburrin18@gmail.com">nickburrin18@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Nick. I like building things...and reusing other people&apos;s great work <Emoji symbol="😝" /> 
        <br />
        I am a <a href="http://www.ece.utexas.edu/">UT-Austin ECE</a> graduate,
        a <a href="https://www2.deloitte.com/us/en/services/consulting.html">Deloitte Consulting</a> Alumni,
        and currently a software developer at <a href="https://faithlife.com/about">Faithlife</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
