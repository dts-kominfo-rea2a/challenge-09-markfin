// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return ( <div className = 'card' >
        <div className ='card-body' >
        <img src = { props.data.photo }
        alt = 'ganmbar'
        style = {
            { width: '30%', borderRadius: '50%' }
        }
        />
        <div className = 'card-content' >
        <h3 > { props.data.name } </h3>
          <p> { props.data.phone } </p>  
          <p> { props.data.email } </p> 
          </div> 
          </div>

        </div>
    )
}

export default Contact;