import React from "react";
import "./Home.css";



function Home() {

    return (
        <div className="container">
            <h2 className='page-title'>Home</h2>
            <div className="avatar-container container">
                <img className="avatar" alt="penguin avatar" src="https://raw.githubusercontent.com/benjistealth/react_dev_portfolio/main/src/assets/images/avatar.jpg"></img>

                <div className="statement-container container">
                    <p className="statement">I am a seasoned tech professional who has reinvented myself as a front-end developer.
                        With years of experience in the tech industry, I bring a wealth of knowledge and expertise to my work.
                    </p>
                    <p className="statement d-none d-lg-block">
                        My journey has taught me the importance of staying relevant and adaptable, and I am proud to have embraced this new chapter in my career.
                        As a front-end developer, I am excited to combine my technical skills with my passion for creating beautiful and user-friendly interfaces.
                        I am eager to continue learning and growing in this dynamic field.
                    </p>
                </div>

            </div>


        </div>
    );
}

export default Home;
