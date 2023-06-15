import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about'>
      <div>
        <p>I am extremely enthusiastic about software engineering!  I love the challenge of creating a new application or enhancing an existing application to better serve clients.  My appreciation of software development is rooted in my love of problem solving and desire to provide clients with new, enjoyable, and useful solutions to achieve their business goals.  I have worked as an engineer for over a decade and I continue to delight in the experience.</p>
      </div>
      <div>
        <h1>Skills</h1>
        <div>
          <p>Python, JavaScript, Typescript, Node, React, C#, PHP, GraphQL, Java, ML, MongoDB, SQL, HTML5, CSS3, AWS, Azure, Scrum/Agile, MVVM, MVC, OOP, TDD</p>
        </div>
      </div>
      <div>
        <h1>Work History</h1>
        <div>
          <div>
            <h3>Lead Software Engineer and CEO skyLyn Applications LLC</h3>
            <h4>skyLyn Applications LLC</h4>
            <h5>2014 - present</h5>
            <p>Creating a social network web application focusing on users sharing customizable adventure experiences coded using Node, Typescript, and Sequelize for the backend and React for the frontend.  Using C#, JavaScript, SQL, and HTML5 to produce a web scraping desktop application called ScrapeMate.  Using PHP, SQL, and JavaScript to produce the website to distribute ScrapeMate, receive/track user orders, and educate the userbase.</p>
          </div>
          <div>
            <h3>Data Visualization and Web Development Bootcamp Instructor</h3>
            <h4>edX</h4>
            <h5>2020 - present</h5>
            <p>Instructing students with limited technical backgrounds in Python, Pandas, Matplotlib, Flask, ML, HTML, JavaScript, Node, SQL, React, and more to prepare them to become competent web engineers or data analysts.  Creating additional curriculum materials to assist student learning.  One-on-one tutoring of students requiring additional assistance.</p>
          </div>
          <div>
            <h3>Lead Software Engineer</h3>
            <h4>International Monetary Fund</h4>
            <h5>2010 - 2014</h5>
            <p>Used C#, VB, XAML, SQL, and other technologies in Visual Studio to produce Excel addins and standalone applications to store, manipulate, organized and visualize data.  Developed informational materials and hosted seminars to educate users in the proper use of our applications.  Gathered, designed and prioritized project requirements.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
