import React from "react";
import Avatar from "../assets/avatar.jpg";

const aboutMe = () => {
    return (
        <section class="aboutme">
            <h2>About Me</h2>
            <img src={Avatar} alt="avatarimage" class="avatar"/>
            <p class="text-center text">
                My name is Josh Renaud and I am an aspiring web developer currently enrolled in a development bootcamp through the University of Minnesota. This page will be used to update ongoing projects as I complete them and to promote myself as I begin my journey into the web development realm.
            </p>
        </section>    
    );
};

export default aboutMe;