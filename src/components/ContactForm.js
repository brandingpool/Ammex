import React from 'react'
import * as constactFormStyle from './styles/ContactForm.module.scss'

function ContactForm() {
    return (
        <form className={ constactFormStyle.contact_form }>
            <input 
                type="text"
                name="name"
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className={ constactFormStyle.half }
            />
            <input
                type="tel"
                name="number"
                placeholder="Contact No."
                className={ constactFormStyle.half }
            />
            <select>
                <option>Select</option>
            </select>
            <textarea placeholder="Message" rows="5"></textarea>
            <button>SEND</button>
        </form>
    )
}

export default ContactForm
