import { ProgressBar } from "react-progressbar-fancy";
import './Skills.css'

const Skills = () => {
  
  return (
    
    <section  id="skills">
    <h2 className='section__title'>Skills</h2>
    <ProgressBar
        className="space"
        label={"HTML"}
        primaryColor={"#254E58"}
        secondaryColor={"#88BDBC"}
        darkTheme
        score={90}
        
      />

      <ProgressBar
        className="space"
        label={"CSS"}
        primaryColor={"#254E58"}
        secondaryColor={"#88BDBC"}
        darkTheme
        score={90}
      />
      <ProgressBar
        className="space"
        label={"Javascript"}
        primaryColor={"#254E58"}
        secondaryColor={"#88BDBC"}
        darkTheme
        score={80}
      />
      <ProgressBar
        className="space"
        label={"React JS"}
        primaryColor={"#254E58"}
        secondaryColor={"#88BDBC"}
        darkTheme
        score={90}
      />
      <ProgressBar
        className="space"
        label={"Node JS"}
        primaryColor={"#254E58"}
        secondaryColor={"#88BDBC"}
        darkTheme
        score={80}
      />
      <ProgressBar
        className="space"
        label={"Mongo DB"}
        primaryColor={"#254E58"}
        secondaryColor={"#88BDBC"}
        darkTheme
        score={60}
      />
      <ProgressBar
        className="space"
        label={"Git"}
        primaryColor={"#254E58"}
        secondaryColor={"#88BDBC"}
        darkTheme
        score={60}
      />
  </section>
  )
}

export default Skills
