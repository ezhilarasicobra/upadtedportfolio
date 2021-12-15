import GitHubIcon from '@material-ui/icons/GitHub'
import {Button} from '@material-ui/core'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about


  return (
    <div className='about center' id="about" style={{marginBottom:"150px"}}>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a
          href="https://drive.google.com/file/d/1NdWMT_46eoCzOy9gYxJc70ipLmcSSIRE/view?usp=sharing" target="_blank"
          aria-label='github'
          className='link link--icon'
        >
      <img src="https://img.icons8.com/stickers/100/000000/resume.png" height="50px"/>
        </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            
          </>
        )}
      </div>
    </div>
  )
}

export default About
