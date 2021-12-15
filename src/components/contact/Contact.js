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
      <a href="">
        <span type='button' className='btn btn--outline' style={{marginRight:"9px"}}>
        <span style={{textTransform: "uppercase",color:"#45A29E"}}>C</span>hennai, <span style={{textTransform: "uppercase",color:"#45A29E"}}>T</span>amilnadu.
        </span>
        
      </a>
      
        
        
     
      </div>
    </section>
  )
}

export default Contact
