/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import eu from "../../../../public/eu.png";
import cel from "../../../../public/oculos-cel2.png";
import cels from "../../../../public/celular-sorveteria2.png";
import note from "../../../../public/oculos-notebook2.png";
import notes from "../../../../public/notebook-sorveteria2.png";
import "./style.css";
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiServer, BiLogoMongodb } from "react-icons/bi";
import { SiNextdotjs, SiMysql } from "react-icons/si";
import { FaSass, FaDatabase, FaGitAlt } from "react-icons/fa";

export default function BoxUm() {
  return (
    <div className='boxUm'>
      <div className='boxUm-content'>
        <div className='apresentacao'>
          <Image src={eu} alt='Adriano Campos' />
          <div className='text'>
            <h1>Hi, I'm Adriano!</h1>
            <p>React Developer</p>
          </div>
        </div>
        <div className='skills'>
          <div className='about'>
            <h3>about me</h3>
            <p>I have one year of experience as a developer, during which I built excellent projects, using the most advanced technologies in the current market. In addition, I have skills in graphic design, which allows me to offer greater visual quality to my projects, and the best user experience.</p>
          </div>

          <div className='boxskills'>
            <h3>Tecnologies</h3>
            <ul className='dev-skills'>
              <div className='dev-skill-le'>
                <li className='skill'>
                  <BiLogoReact className='icons' />
                  <p>React.js</p>
                </li>
                <li className='skill'>
                  <SiNextdotjs className='icons' />
                  <p>Next.js</p>
                </li>
                <li className='skill'>
                  <BiLogoJavascript className='icons' />
                  <p>JavaScript</p>
                </li>
                <li className='skill'>
                  <BiLogoNodejs className='icons' />
                  <p>Node.js</p>
                </li>
                <li className='skill'>
                  <BiServer className='icons' />
                  <p>Express.js</p>
                </li>
              </div>
              <div className='dev-skills-ld'>
                <li className='skill'>
                  <FaSass className='icons' />
                  <p>Sass</p>
                </li>
                <li className='skill'>
                  <SiMysql className='icons' />
                  <p>MySQL</p>
                </li>
                <li className='skill'>
                  <BiLogoMongodb className='icons' />
                  <p>MongoDB</p>
                </li>
                <li className='skill'>
                  <FaDatabase className='icons' />
                  <p>Database</p>
                </li>
                <li className='skill'>
                  <FaGitAlt className='icons' />
                  <p>Git</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className='projects'>
          <h3>PROJECTS</h3>
          <div className='loja-de-oculos'>
            <h4>Glasses store</h4>
            <p>Responsive website, built with react components</p>
            <a href='https://loja-de-oculos-six.vercel.app/' target='_blank'>
              project link
            </a>
            <div className='site-photos'>
              <Image src={cel} alt='celular' />
              <Image src={note} alt='notebook' className='notebook' />
            </div>
          </div>
          <div className='sorveteria'>
            <h4>IceCream store</h4>
            <p>Responsive website, built with react components, routed pages with react-router library </p>
            <a href='https://sorveteria-six.vercel.app/' target='_blank'>
              project link
            </a>
            <div className='site-photos'>
              <Image src={cels} alt='celular' />
              <Image src={notes} alt='notebook' className='notebook' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
