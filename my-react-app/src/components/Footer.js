import React from 'react';
import ReactDOM from 'react-dom/client';
import {createPopper} from '@popperjs/core';
import footerLinks from '../data/footer-links';

let socialsRenderCount = 0;
let footerRenderCount = 0;

class Socials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      linksType: "coder",
      linksHTML: "",
    }
  }
  // static getDerivedStateFromProps(props, state) {
  //   // console.log(`props.linksType = ${props.linksType}`); 
  //   this.linksHTML = footerLinks.map((item) =>{
  //     let result = `<div class="footer--socials--div">`;
  //     if (item.type === props.linksType) {
  //       result += `<a 
  //       id="footer--socials--div--link--${item.codename}"
  //       href="${item.link}"
  //       target="_blank"
  //       aria-describedby="tooltip"
  //       class="footer--socials--div--link"
  //     >`;
  //       result += `<i class="fa-brands ${item.fontAwesomeClass}"></i>`;
  //       result += `</a>`;
  //       result += `<div 
  //       id="footer--socials--div--tooltip--${item.codename}" class="footer--socials--div--tooltip"
  //     >`;
  //       result += `<div 
  //       class="footer--socials--div--tooltip--container"
  //     >`;
  //       result += `<p class="footer--socials--div--tooltip--container--platform">`;
  //       result += `${item
  //         .platform
  //         .replace(/ /gi, "&nbsp")}`;
  //       result += `</p>`;
  //       result += `<p class="footer--socials--div--tooltip--container--username">`;
  //       result += `${item
  //         .username
  //         .replace(/ /gi, "&nbsp")}`;
  //       result += `</p>`;
  //       result += `<div id="arrow" data-popper-arrow></div>`;
  //       result += `</div>`;
  //       result += `</div>`;
  //     }
  //     result += `</div>`;
  //     return result;
  //   }).join("");
  //   return {linksType: props.linksType};
  // }
  linksHTML = footerLinks.map((item) =>{
    let result = `<div class="footer--socials--div">`;
    // if (item.type === props.linksType) {
      result += `<a 
      id="footer--socials--div--link--${item.codename}"
      href="${item.link}"
      target="_blank"
      aria-describedby="tooltip"
      class="footer--socials--div--link"
    >`;
      result += `<i class="fa-brands ${item.fontAwesomeClass}"></i>`;
      result += `</a>`;
      result += `<div 
      id="footer--socials--div--tooltip--${item.codename}" class="footer--socials--div--tooltip"
    >`;
      result += `<div 
      class="footer--socials--div--tooltip--container"
    >`;
      result += `<p class="footer--socials--div--tooltip--container--platform">`;
      result += `${item
        .platform
        .replace(/ /gi, "&nbsp")}`;
      result += `</p>`;
      result += `<p class="footer--socials--div--tooltip--container--username">`;
      result += `${item
        .username
        .replace(/ /gi, "&nbsp")}`;
      result += `</p>`;
      result += `<div id="arrow" data-popper-arrow></div>`;
      result += `</div>`;
      result += `</div>`;
    // }
    result += `</div>`;
    return result;
  }).join("");

  componentDidMount() {
    console.log("componentDidMount()");
    // console.log(`this.state.linksType = ${this.state.linksType}`); 
    footerLinks.map((item) => {
        // if (item.type === this.state.linksType){
          const link = document.getElementById(`footer--socials--div--link--${item.codename}`);
          const tooltip = document.getElementById(`footer--socials--div--tooltip--${item.codename}`);
          createPopper(link, tooltip, {placement: 'top-end'});

          let headCSS = `#footer--socials--div--link--${item.codename}:hover`;
          headCSS += `{`;
          headCSS += `color:${item.color} !important`;
          headCSS += `}`;
          headCSS += `#footer--socials--div--tooltip--${item.codename} div`;
          headCSS += `{`;
          headCSS += `background-color:${item.color} !important`;
          headCSS += `}`;

          let oldContent = document
            .getElementById("head--styling")
            .textContent;
          oldContent += headCSS;
          document
            .getElementById("head--styling")
            .innerHTML = oldContent;
        // }
      });
    
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
    this.linksHTML = footerLinks.map((item) =>{
      let result = `<div class="footer--socials--div">`;
      // console.log(`!!! this.state.linksType = ${this.state.linksType}`); 
      // if (item.type === "coder") {
        result += `<a 
        id="footer--socials--div--link--${item.codename}"
        href="${item.link}"
        target="_blank"
        aria-describedby="tooltip"
        class="footer--socials--div--link"
      >`;
        result += `<i class="fa-brands ${item.fontAwesomeClass}"></i>`;
        result += `</a>`;
        result += `<div 
        id="footer--socials--div--tooltip--${item.codename}" class="footer--socials--div--tooltip"
      >`;
        result += `<div 
        class="footer--socials--div--tooltip--container"
      >`;
        result += `<p class="footer--socials--div--tooltip--container--platform">`;
        result += `${item
          .platform
          .replace(/ /gi, "&nbsp")}`;
        result += `</p>`;
        result += `<p class="footer--socials--div--tooltip--container--username">`;
        result += `${item
          .username
          .replace(/ /gi, "&nbsp")}`;
        result += `</p>`;
        result += `<div id="arrow" data-popper-arrow></div>`;
        result += `</div>`;
        result += `</div>`;
      // }
      result += `</div>`;
      return result;
    }).join("");

    footerLinks.map((item) => {
        if (item.type === this.state.linksType){
          const link = document.getElementById(`footer--socials--div--link--${item.codename}`);
          const tooltip = document.getElementById(`footer--socials--div--tooltip--${item.codename}`);
          createPopper(link, tooltip, {placement: 'top-end'});

          let headCSS = `#footer--socials--div--link--${item.codename}:hover`;
          headCSS += `{`;
          headCSS += `color:${item.color} !important`;
          headCSS += `}`;
          headCSS += `#footer--socials--div--tooltip--${item.codename} div`;
          headCSS += `{`;
          headCSS += `background-color:${item.color} !important`;
          headCSS += `}`;

          let oldContent = document
            .getElementById("head--styling")
            .textContent;
          oldContent += headCSS;
          document
            .getElementById("head--styling")
            .innerHTML = oldContent;
        }
      });
  }
  render() {
    console.log(`this.state.linksType = ${this.state.linksType}`); 
    console.log(`socialsRenderCount = ${++socialsRenderCount}`); 

    return (
      <div
        className="footer--socials"
        dangerouslySetInnerHTML={{
        __html: this.linksHTML
      }}></div>
    );
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "black",
      color: "white",
      linksType: "coder"
    }
  }
  updateLinksType(linksType) {
    console.log(`linksType = ${linksType}`); 
    this.setState({linksType: linksType});
  }
  render() {
    console.log(`footerRenderCount = ${++footerRenderCount}`); 
    return (
      <footer
        className='footer'
        style={{
        backgroundColor: this.state.backgroundColor,
        color: this.state.color
      }}>
        <div className='footer--copyright'>
          <p>
            © Kolehiyolo Development 2022</p>
          <button onClick={() => {this.updateLinksType("coder")}}>Coder</button>
          <button onClick={() => {this.updateLinksType("social")}}>Social</button>
          <button onClick={() => {this.updateLinksType("content")}}>Content</button>
        </div>
        <Socials linksType={this.state.linksType}/>
      </footer>
    );
  }
}

export default Footer;