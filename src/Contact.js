import React, { Component } from 'react';


//< !DOCTYPE html >
//    <html lang="en" id="contact">
class Contact extends Component {
    render() {
        return (
        // <head>
        //     <meta charset="utf-8">
        //         <meta name="description" content="A page about Dodie Matthew, first exploring HTML">
        //             <title> Dodie's Portfolio</title>
        //             <link rel="stylesheet" href="../Css/Style.css" type="text/css">
        //                 <script src="../JS/Script.js" async></script>
        // </head>
        <div>
                    <body id="contactPage">
                        <header class="masthead">
                            <h1 > DODIE</h1>
                        </header>
                        <main>
                            <nav>
                                <div class="menuButton">
                                    <div onclick="toggleMenu()">
                                        <div class="bar1"></div>
                                        <div class="bar2"></div>
                                        <div class="bar3"></div>
                                        <div class="menu">
                                            <ul>
                                                <li> <a href="Home.html" >Home</a></li>
                                                <li> <a href="About.html" >About</a></li>
                                                <li> <a href="Contact.html" >Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <p class="ready">ready when<br />you are.. </p>
                                <p class="reach"> 347-304-4613 <br />dodiematts@gmail.com </p>
    </main>
</body>

                            <footer class="social">
                                <a href="https://www.facebook.com/dodie.matthew" target="_blank" rel="noopener norefferrer"><img src="../Images/facebook.jpg" width="50" height="50" alt="facebook icon" class="FB" /></a>
                    <a href="https://www.instagram.com/prime.prospect/?hl=en" target="_blank" rel="noopener norefferrer"><img src="../Images/IG.jpg" width="50" height="50" alt="Instagram icon" class="IG" /></a>
     </footer>
     </div>
                );
            }
        }
    
export default Contact;
