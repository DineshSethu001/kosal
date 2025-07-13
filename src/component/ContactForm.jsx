import React from 'react'

const ContactForm = () => {
  return (
    <div>

        <form>
            <label>
                Name:-
                <input type="text" value="name" name="name" />
              </label>
               <label>
                Email:-
                <input type="email" value="Email" name="email" />
              </label>
        </form>
    </div>
  )
}

export default ContactForm