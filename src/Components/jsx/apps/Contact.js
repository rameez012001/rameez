import React,{useState} from 'react'
import Controls from './app-components/Controls'

export default function Contact(props) {
  const [values,setValues] = useState({
    firstname:'',
    email:'',
    phonenumber1:'',
    message:'',
  });
  function onValueChange(e){
    // name & value represents the attributes of the target"e.target.name"
    const {name,value}=e.target; 
    setValues({...values,[name]:value})
  }
  return (
    <div id='Contact'>
        <Controls closeApp = {props.closeAll}/>
        <form action='https://forms.maakeetoo.com/formapi/966' method='POST'>
          <div>
            <label>Name</label>
            <input type="text" name='firstname' onChange={onValueChange} value={values.firstname}/>
          </div>
          <div>
            <label>Email</label>
            <input type="text" name='email' onChange={onValueChange} value={values.email}/>
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" name='phonenumber1' onChange={onValueChange} value={values.phonenumber1}/>
          </div>
          <div>
            <label>Message</label>
            <textarea rows='4' name='message' onChange={onValueChange} value={values.message}></textarea>
          </div>
          <button>Send</button>
        </form>
    </div>
  )
}
