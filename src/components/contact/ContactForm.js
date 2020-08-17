import React from "react";


function ContactForm() {
    
    
    return (
		<>
		<form>
        <div className="input-wrap">
            <label for="firstName">First Name: </label>
        <br />
            <input name="firstName" type="text" placeholder="First name..." />
        </div>
            <br />
        <div className="input-wrap">
            <label for="lastName">Last name: </label>
        <br />
            <input name="lastName" type="text" placeholder="Last name..."/>
        </div>
            <br />
        <div className="input-wrap">
            <label for="email">email: </label>
        <br />
            <input name="email" type="text" placeholder="email..."/>
        </div>
            <br />
        <div className="input-wrap">
            <label for="message">Message: </label>
        <br />
            <textarea name="message" type="text" placeholder="Message..."/>
            <br />
        </div>
            <input type="submit"/>
		</form>
		</>
	);
}


export default ContactForm;