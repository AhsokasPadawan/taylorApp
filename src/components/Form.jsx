import React, { useState } from 'react' 


function Form(){
    
    const [data, setData] = useState({

        username: "", 
        email : "",
        text : ""
    })

    function handleChange(evento){
    
        setData({
            ...data,
            [evento.target.name]: evento.target.value
        })

    }

    return (
        <form>
          <div>
          <label>Full Name</label>
          <input type="text" name="username" onChange={handleChange} value={data.username}/>
          <label>E-mail</label>
          <input type="text" name="email"  onChange={handleChange} value={data.email}/>
          <label>Your Message</label>
          <input type="textarea" name= "text" onChange={handleChange} value={data.text} />
          <input type="submit" value= 'submit'/>
          </div>
        </form>
    )
}

export default Form;