/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import brazil from "../../../../public/brazil.png";
import US from "../../../../public/united-states.png";
import cap from "../../../../public/education.png";
import "./style.css";

import { BiLogoInstagram } from "react-icons/bi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";

export default function BoxDois() {
  return (
    <div className='boxDois'>
      <div className='boxDois-content'>
        <div className='contact'>
          <h3>Contact me</h3>
          
          <p>
            Contact:
            <a href={"https://wa.me/5521965313297"} target='_blank' rel='noopener noreferrer'>
              {" "}
              +55 (021) 96531-3297
            </a>
          </p>
          <p>
            Email: <a href="mailto:driwcoder@gmail.com">driwcoder@gmail.com</a>
          </p>
        </div>
        <div className="social">
          <h3>Social Medias</h3>
          <div className="medias">
            <a href="https://www.instagram.com/driwcoder/" target="_blank">
              <BiLogoInstagram className="icons"/>
            </a>
            <a href="https://www.linkedin.com/in/driwcoder/" target="_blank">
              <AiOutlineLinkedin className="icons"/>
            </a>
            <a href="https://twitter.com/driwcoder">
              <TfiTwitter className="icons" target="_blank"/>
            </a>
            <a href='https://www.github.com/driwcoder' target='_blank'>
              <FiGithub className="icons"/>
            </a>
          </div>
        </div>
        <div className='Languages'>
          <h3>Languages</h3>
          <div className='english'>
            <Image src={US} alt='united-states' className='flag' />
            <p>English - Fluent</p>
          </div>
          <div className='portuguese'>
            <Image src={brazil} alt='brazil' className='flag' />
            <p>Brazilian Portuguese - Native</p>
          </div>
        </div>
        <div className='education'>
          <h3>Formation</h3>

          <div className='formation'>
            <Image src={cap} alt='formação' className='flag' />
            <p>DevMedia - Fullstack JavaScript Course</p>
          </div>
          <ul>
            <h4>JavaScript</h4>
            <li>Use of popular libraries and frameworks such as Express.js, Node.js, or React.js.</li>
            <li>Data manipulation and transformation using ES6+ functionalities (Arrow functions, destructuring, spread operator, etc.).</li>
            <li>Using Promises, async/await and handling asynchronous requests.</li>
            <li>Advanced manipulation of the DOM (Document Object Model) with pure JavaScript.</li>

          </ul>
          <ul>
            <h4>React</h4>
            <li>Multi-component page with reusable components in React.</li>
            <li>Connection with RESTful APIs using the Fetch API or libraries like Axios.</li>
            <li>Knowledge in React Hooks (useState, useEffect, useContext, etc.).</li>
            <li>Implementing routes with React Router.</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
