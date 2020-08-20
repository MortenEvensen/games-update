import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

let schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    message: yup.string().min(10, "Message is required, minimum 10 characters") 
        
    
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    
    function onSubmit(data) {
        console.log("data", data)
    }
    
    return(
        <>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label for="firstName">First Name: </label>
            <br />
            <input name="firstName" type="text" placeholder="First name..." ref={register} />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            
            <br />                                                                     
            <label for="lastName">Last Name: </label>
            <br />
            <input name="lastName" type="text" placeholder="Last name..." ref={register}/>
            {errors.lastName && <p>{errors.lastName.message}</p>}
            
            <br />
                
            <label for="email">Email: </label>
            <br />
            <input name="email" type="text" placeholder="Email..." ref={register}/>
            {errors.email && <p>{errors.email.message}</p>}
            
            <br />                                                            
            <label for="message">Message: </label> 
            <br />
            <textarea name="message" type="text" placeholder="Message..." ref={register}/>
            {errors.message && <p>{errors.message.message}</p>}
            <input type="submit" />
        </form>
        </>
    )
}
        
export default Contact