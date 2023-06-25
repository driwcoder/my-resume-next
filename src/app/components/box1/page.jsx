/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import eu from "../../../../public/eu.png";
import cel from "../../../../public/oculos-cel2.png";
import note from "../../../../public/oculos-notebook2.png";
import "./style.css";
import { BiLogoJavascript, BiLogoReact, BiLogoNodejs, BiServer } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

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
            <h3>A little about me</h3>
            <p>I have one year of experience as a developer, during which I built excellent procljects, using the most advanced technologies in the current market. In addition, I have skills in graphic design, which allows me to offer greater visual quality to my projects.</p>
          </div>

          <ul className='dev-skills'>
            <h3>Tecnologies</h3>
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
          </ul>
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
        </div>
      </div>
    </div>
  );
}
