import React from "react";


const WorkPortfolio = () => {
    
    return (
        
        <div>
            <h2 class="projects">Projects</h2>
            <p class="align-self-center">
                <div class="card projectCard">
                    <div class="card-body background">
                        <h4 class="card-title background">Movie Pop</h4>
                        <p class="card-text background">
                        A web application that generates movie suggestions, shows top critic's picks, grants easy access to trailers, and shows where to watch.
                        </p>
                        <a href="https://github.com/tedheikkila/movie-pop" class="btn btn-primary linkButton">Check it out!</a>
                    </div>
                </div>
                <div class="card projectCard background">
                    <div class="card-body background">
                        <h4 class="card-title background">Railway Express!</h4>
                        <p class="card-text background">
                        An online railway application that allows a user to create a passenger page and book a reservation on a train. Displays handlebars and MySQL CRUD methods.
                        </p>
                        <a href="https://github.com/zacharyjg00/Railway-Express" class="btn btn-primary linkButton">Check it out!</a>
                    </div>
                </div>
                <div class="card projectCard background">
                    <div class="card-body background">
                        <h4 class="card-title background">Note Taker</h4>
                        <p class="card-text background">
                        A basic online note taking concept, saves and retrieves previously saved notes.
                        </p>
                        <a href="https://github.com/goreno41/notetaker2.git" class="btn btn-primary linkButton">Check it out!</a>
                    </div>
                </div>
                <div class="card projectCard background">
                    <div class="card-body background">
                        <h4 class="card-title background">Coming Soon...</h4>
                        <p class="card-text background">
                        Check back in the future to see more projects!
                        </p>
                    </div>
                </div>
            </p>
        </div>
    );
};

export default WorkPortfolio;