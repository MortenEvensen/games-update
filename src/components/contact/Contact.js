import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lasttName: yup.string().required("Last name is required"),
    email: yup 
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    message: yup.string().min(10, "Message is required, minimum 10 characters") 
        
    
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({
        valiidationSchema: schema
    });
    
    function onSubmit(data) {
        document.getElementById("validated").innerHTML = "Great! Everything works!"
    }
    
    return(
        <>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div id="validated"></div>
            <label for="firstName">First Name: </label>
            <br />
            <input name="firstName" type="text" placeholder="First name..." ref={register({ required: true })}/>
            {errors.firstName && <p className="error">First name is required</p>}
            <br />                                                                     
            <label for="lastName">Last Name: </label>
            <br />
            <input name="lastName" type="text" placeholder="Last name..." ref={register({ required: true })}/>
            {errors.lastName && <p className="error">Last name is required</p>}
            <br />
            <label for="email">Email: </label>
            <br />
            <input name="email" type="text" placeholder="Email..." ref={register({ required: true })}/>
            {errors.email && <p className="error">Email is required</p>}
            <br />                                                            
            <label for="message">Message: </label> 
            <br />
            <textarea name="message" type="text" placeholder="Message..." ref={register({ required: true })}/>
            {errors.message && <p className="error">Message is required</p>}
            <input type="submit" />
        </form>
        </>
    )
}
        
export default Contact