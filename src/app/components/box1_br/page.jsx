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
import Linguas from '../Linguas';

export default function BoxUm() {
  return (
    <div className='boxUm'>
      <div className='boxUm-content'>
        <Linguas />
        <div className='apresentacao'>
          <Image src={eu} alt='Adriano Campos' />
          <div className='text'>
            <h1>Olá, sou Adriano!</h1>
            <p>Desenvolvedor React</p>
          </div>
        </div>
        <div className='skills'>
          <div className='about'>
            <h3>Sobre mim</h3>
            <p>Tenho um ano de experiência como desenvolvedor, durante o qual construí excelentes projetos, utilizando as tecnologias mais avançadas do mercado atual. Além disso, possuo habilidades em design gráfico, o que me permite oferecer maior qualidade visual aos meus projetos, e a melhor experiência do usuário.</p>
          </div>

          <div className='boxskills'>
            <h3>Tecnologias</h3>
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
          <h3>PROJETOS</h3>
          <div className='loja-de-oculos'>
            <h4>Loja de óculos</h4>
            <p>Site responsivo, construído com componentes react</p>
            <a href='https://loja-de-oculos-six.vercel.app/' target='_blank'>
            link do projeto
            </a>
            <div className='site-photos'>
              <Image src={cel} alt='celular' />
              <Image src={note} alt='notebook' className='notebook' />
            </div>
          </div>
          <div className='sorveteria'>
            <h4>Loja de sorvete</h4>
            <p>Site responsivo, construído com componentes react, páginas roteadas com biblioteca react-router</p>
            <a href='https://sorveteria-six.vercel.app/' target='_blank'>
              link do projeto
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
