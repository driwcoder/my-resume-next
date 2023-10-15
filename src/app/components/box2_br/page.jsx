/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import brazil from '../../../../public/brazil.png'
import US from '../../../../public/united-states.png'
import cap from '../../../../public/education.png'
import './style.css'

import { BiLogoInstagram } from 'react-icons/bi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { TfiTwitter } from 'react-icons/tfi'
import { FiGithub } from 'react-icons/fi'
import Link from 'next/link'

export default function BoxDois() {
  return (
    <div className='boxDois'>
      <div className='boxDois-content'>
        <div className='contact'>
          <h3>Fale comigo</h3>

          <p>
            Tel/Whatsapp:
            <a
              href={'https://wa.me/5521965313297'}
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              +55 (021) 96531-3297
            </a>
          </p>
          <p>
            Email: <a href='mailto:driwcoder@gmail.com'>driwcoder@gmail.com</a>
          </p>
        </div>
        <div className='social'>
          <h3>Redes Sociais</h3>
          <div className='medias'>
            <a href='https://www.instagram.com/driwcoder/' target='_blank'>
              <BiLogoInstagram className='icons' />
            </a>
            <a href='https://www.linkedin.com/in/driwcoder/' target='_blank'>
              <AiOutlineLinkedin className='icons' />
            </a>
            <a href='https://twitter.com/driwcoder'>
              <TfiTwitter className='icons' target='_blank' />
            </a>
            <a href='https://www.github.com/driwcoder' target='_blank'>
              <FiGithub className='icons' />
            </a>
          </div>
        </div>
        <div className='Languages'>
          <h3>Linguas</h3>
          <div className='english'>
            <Link href='/'>
              <Image src={US} alt='united-states' className='flag' />
            </Link>
            <p>Inglês - Avançado</p>
          </div>
          <div className='portuguese'>
            <Link href='/ptbr'>
              <Image src={brazil} alt='brazil' className='flag' />
            </Link>
            <p>Português Brasileiro - Nativo</p>
          </div>
        </div>
        <div className='education'>
          <h3>Formação</h3>

          <div className='formation'>
            <Image src={cap} alt='formação' className='flag' />
            <p>DevMedia - Fullstack JavaScript</p>
          </div>
          <ul>
            <h4>JavaScript</h4>
            <li>
              Uso de bibliotecas e estruturas populares como Express.js, Node.js
              e React.js.
            </li>
            <li>
              Manipulação e transformação de dados utilizando funcionalidades
              ES6+ (arrow function, desestruturação, operador de propagação,
              etc.).
            </li>
            <li>
              Uso de Promises, async/await e tratamento de solicitações
              assíncronas.
            </li>
            <li>
              Manipulação avançada do DOM (Document Object Model) com JavaScript
              puro.
            </li>
          </ul>
          <ul>
            <h4>React</h4>
            <li>Página com multicomponente reutilizáveis.</li>
            <li>
              Conexão com APIs RESTful usando a API Fetch ou bibliotecas como
              Express, Sequelize, Prisma, ou nativo do Nextjs13.
            </li>
            <li>
              Conhecimento de React Hooks (useState, useEffect, useContext,
              etc.).
            </li>
            <li>Implementação de rotas com React Router.</li>
            <li>
              Capacidade de criar e gerenciar rotas usando Express.js ou
              similar.
            </li>
            <li>
              Experiência na criação e uso de middleware para funções como
              autenticação, validação de dados, manipulação de erros, etc.
            </li>
            <li>
              Conhecimento em roteamento dinâmico para lidar com parâmetros
              variáveis na URL.
            </li>
          </ul>
          <ul>
            <h4>API</h4>
            <li>
              Criação de API RESTful: Capacidade de criar uma API RESTful usando
              Node.js com Express.js.
            </li>
            <li>
              Autenticação e Autorização: Implementação de autenticação e
              autorização usando JWT (JSON Web Tokens) ou OAuth.
            </li>
            <li>
              Teste de API: Experiência com ferramentas de teste de API como
              Postman ou Insomnia.
            </li>
            <li>
              Criação de Endpoints: Habilidade para criar endpoints para
              diferentes operações CRUD (Criar, Ler, Atualizar, Deletar).
            </li>
            <li>
              Manipulação de Erros: Capacidade para lidar adequadamente com
              erros e retornar respostas apropriadas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
