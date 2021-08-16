import React from "react";

function ContactMe () {
    return (
        <section class="contactme aboutme">
            <h2>Contact Me</h2>
            <p>
                <ul class="list-group contactlist background">
                    <li class="list-group-item background">
                        <a href="Tel:2484345508" >248-434-5508</a> 
                    </li>
                    <li class="list-group-item background">
                        <a href="mailto:myemail@gmail.com">myemail@gmail.com</a>
                    </li>
                    <li class="list-group-item background">
                        <a href="https://github.com/goreno41">Github</a>
                    </li>
                    <li class="list-group-item background">
                        <a href="https://twitter.com/UniWatch">Twitter</a>
                    </li>
                </ul>
                
            </p>
        </section>
    );
};

export default ContactMe;