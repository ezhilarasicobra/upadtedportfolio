import { contact } from '../../portfolio'
import './Finalcontact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div style ={{display:"flex",}}>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'  style={{marginRight:"9px"}}>
          tezzhilarasi@gmail.com
        </span>
        
      </a>
      <a href="">
        <span type='button' className='btn btn--outline' style={{marginRight:"9px"}}>
          91 -8148215010
        </span>
        
      </a>
      <button href="">
        <span type='button' className='btn btn--outline' >
        
        <img src="https://img.icons8.com/color/48/000000/marker--v2.png"style={{height:"15px",paddingRight:"3px"}}/>
     
      Chennai, Tamilnadu.
      
        </span>
        
      </button>
      </div>
    </section>
  )
}

export default Contact
