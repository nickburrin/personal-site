import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import iconGoogleDrive from '@fortawesome/fontawesome-free-brands/faGoogleDrive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <a href="https://docs.google.com/document/d/1jdzNvPHa7U4XoZ-Gjbh3QOnTSm5XpTYsev7HdBH1GjQ/edit?usp=sharing">
              <FontAwesomeIcon icon={iconGoogleDrive} />  Resume
            </a>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
