import pic1 from '../src/components/images/pumkintales.PNG'
import pic2 from '../src/components/images/onlinesource.PNG'
import pic3 from '../src/components/images/doctor.PNG'
import pic4 from '../src/components/images/book.PNG'
import pic5 from '../src/components/images/diary.PNG'
import pic6 from '../src/components/images/advise.webp'
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ezhilarasijes.netlify.app/',
  title: 'Ezhil :)',
}
const exp=[{
  date:"Jun 2021",
  content:"Started my journey With MERN Stack Development."
},{date:"May 2019",
content:" Been Primary Support for more than 30 Bots in Production."},
{date:"Jan 2019",
content:"Moved to RPA-Blueprism Technology."},
{date:"2018",
content:" Worked as a Qlikview Support Engineer."},{},{date:"Feb 2017",
content:"Programmer Analyst- Cognizant Technology Solutions."},
{
  date:"Sep 2016",
  content:"Consultant - Sutherland Global Solutions."  
}]



const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ezhilarasi T',
  role: 'MERN STACK DEVELOPER',

  description:
    'As a person of IT interset, I have learnt various technologies like ReactJS, NodeJS, Express, MongoDB and tools like Qlikview, RPA - BLueprism and Automation Anywhere.',
  resume: 'https://drive.google.com/file/d/1NdWMT_46eoCzOy9gYxJc70ipLmcSSIRE/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  
  {
    name: 'MEdii  +',
    description:
      'This Application is used to book appointments with doctors and vice versa. Users can book/cancel their appointments online easily.',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
      sourceCodeReact: 'https://github.com/ezhilarasicobra/DoctorBookingReact',
      pic:pic3,
      sourceCodeNode: 'https://github.com/ezhilarasicobra/DoctorBookingNode',
    livePreview: 'https://doctor-appointment-app.netlify.app/',
  },
  
  {
    name: 'Online Source Saver',
    description:
      'This is a simple List Appliaction to save the online source, which can be added to your bucket  list and to prioritize the work to be finished. ',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
      sourceCodeReact: 'https://github.com/ezhilarasicobra/ListApplicationReact',
      pic:pic2,
      sourceCodeNode: 'https://github.com/ezhilarasicobra/ListApplicationNodejs',
    livePreview: 'https://online-source-saver.netlify.app/',
  },
  {
    name: 'Pumpkin Tales ',
    description:
      'It is a food ordering Application. This can be used by customers and the restaurant to facilitate their food ordering process. ',
    stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
    sourceCodeReact: 'https://github.com/ezhilarasicobra/PumpkinTalesReact',
    pic:pic1,
    sourceCodeNode: 'https://github.com/ezhilarasicobra/foodAppNode',
    livePreview: 'https://pumpkintales.netlify.app/',
  },
  {
    name: 'E -BookMark',
    description:
      'You can have a list of books to be added in your wishlist of your application.',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
      sourceCodeReact: 'https://github.com/ezhilarasicobra/reactbook',
      pic:pic4,
      sourceCodeNode: 'https://github.com/ezhilarasicobra/boolistnode',
      livePreview: 'https://gbooksclone.netlify.app/',
  },
  {
    name: 'Online Diary',
    description:
      'This is a E Diary, where you can add your input as in like your physical Journal.',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
      sourceCodeReact: 'https://github.com/ezhilarasicobra/DiaryReact',
      pic:pic5,
      sourceCodeNode: 'https://github.com/ezhilarasicobra/DiaryNode',
      livePreview: 'https://diaryappli.netlify.app/',
  },
  {
    name: 'Advise - AI ',
    description:
      'This is a simple AI application designed using Alan AI.',
      stack: ['NodeJs', 'JavaScript', 'React', 'Mongo DB'],
      sourceCodeReact: 'https://github.com/ezhilarasicobra/AdviseAppusing-ALAN',
      pic:pic6,
      sourceCodeNode: '',
      livePreview: 'https://advise-app-using-ai.netlify.app/',
  }

]

const  skills = [
  {
    "type": "HTML",
    "level": 90,
    "color": {
      "bar": "#45A29E",
      "title": {
        "background": "#66FCF1"
      }
    }
  },
  {
    "type": "CSS",
    "level": 90,
    "color": {
      "bar": "#45A29E",
      "title": {
        "background": "#66FCF1"
      }
    }
  },
  {
    "type": "Javascript",
    "level": 90,
    "color": {
      "bar": "#45A29E",
      "title": {
        "background": "#66FCF1"
      }
    }
  },
  {
    "type": "React JS",
    "level": 90,
    "color": {
      "bar": "#45A29E",
      "title": {
        "background": "#66FCF1"
      }
    }
  },
  {
    "type": "Node JS",
    "level": 85,
    "color": {
      "bar": "#45A29E",
      "title": {
        "background": "#66FCF1"
      }
    }
  },
  {
    "type": "Mongo DB",
    "level": 75,
    "color": {
      "bar": "#45A29E",
      "title": {
        "background": "#66FCF1"
      }
    }
  },
  {
    "type": "GIT",
    "level": 60,
    "color": {
      "bar": "#45A29E",
      "title": {
        "background": "#66FCF1"
      }
    }
  }
]
const contact = {
 
  email: 'tezzhilarasi@gmail.com',
}

export { header, about, projects, skills, contact,exp }
