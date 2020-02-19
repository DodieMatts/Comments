import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';
import Header from './components/home/Header';
import Contact from './components/contacts/contact';
import Project from './components/projects/project';
import Technologies from './components/technologies/technology';
import About from './components/about/about.js';
//import About_icon from './components/assets/aboutLogo';


import data from './components/assets/data';
import HomeBody from './components/HomeBody.js';


class StoryBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: data,
    }
  }


  render() {

    const {title, text} = this.state.contact.data[0];
    const {author, body} = this.state.contact.data[1];
    const {tech, techStack} = this.state.contact.data[2];
    const {project, work} = this.state.contact.data[3];
    const {contact, message} = this.state.contact.data[4];

    console.log('data', title)
    console.log('about', author)
    console.log('tech', tech)

    return (
      <Fragment>
        <header className="header">
          <Header />
        </header>
        {/*<div>*/}
          <HomeBody />
          <About className="about_Paragraph" id="aboutID" title={author} text={body}/>
          <Technologies title={tech} text={techStack}/>
          <Project id="projectID"title={project} text={work} />
          <Contact id="contactID" title={contact} text={message}/>
        {/*</div>*/}

        {/*<footer className="footer">
          <CommentBox />
        </footer>*/}
      </Fragment>
    );
  }
}




export default StoryBox;
