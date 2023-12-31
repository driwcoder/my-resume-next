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
          <h3>Contact me</h3>

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
          <h3>Social Medias</h3>
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
          <h3>Languages</h3>
          <div className='english'>
            <Link href='/'>
              <Image src={US} alt='united-states' className='flag' />
            </Link>
            <p>English - Advanced</p>
          </div>
          <div className='portuguese'>
            <Link href='/ptbr'>
              <Image src={brazil} alt='brazil' className='flag' />
            </Link>
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
            <li>
              Use of popular libraries and frameworks such as Express.js,
              Node.js, or React.js.
            </li>
            <li>
              Data manipulation and transformation using ES6+ functionalities
              (Arrow functions, destructuring, spread operator, etc.).
            </li>
            <li>
              Using Promises, async/await and handling asynchronous requests.
            </li>
            <li>
              Advanced manipulation of the DOM (Document Object Model) with pure
              JavaScript.
            </li>
          </ul>
          <ul>
            <h4>React</h4>
            <li>Page with reusable multicomponents.</li>
            <li>
              Connecting to RESTful APIs using the Fetch API or libraries like
              Express, Sequelize, Prisma, or native to Nextjs13.
            </li>
            <li>
              Knowledge of React Hooks (useState, useEffect, useContext, etc.).
            </li>
            <li>Implementation of routes with React Router.</li>
            <li>
              Ability to create and manage routes using Express.js or similar.
            </li>
            <li>
              Experience creating and using middleware for functions such as
              authentication, data validation, error handling, etc.
            </li>
            <li>
              Knowledge of dynamic routing to handle parameters variables in the
              URL.
            </li>
          </ul>
          <ul>
            <h4>API</h4>
            <li>
              RESTful API Creation: Ability to create a RESTful API using
              Node.js with Express.js.
            </li>
            <li>
              Authentication and Authorization: Implementation of authentication
              and authorization using JWT (JSON Web Tokens) or OAuth.
            </li>
            <li>
              API Testing: Experience with API testing tools like Postman or
              Insomnia.
            </li>
            <li>
              Endpoint Creation: Ability to create endpoints for different CRUD
              (Create, Read, Update, Delete) operations.
            </li>
            <li>
              Error Handling: Ability to properly handle errors and return
              appropriate responses.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
