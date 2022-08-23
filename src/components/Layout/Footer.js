import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Maurice<span>Müller</span></h3>

                <p className="footer-links">
                    <a href="#" className="link-1">Home</a>
                    <a href="#">Blog</a>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </p>

                <p className="footer-company-name">Maurice Müller <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {new Date().getFullYear()}</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>12345</span> Lorem Ypsum Street</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+49 XXXXXXXX</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">maurice_r_mueller@outlook.com</a></p>
                </div>

            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About Maurice</span>
                        Hey, thanks for stopping by my Project! If you are interested in working together, just drop me a message.
                </p>

                <div className="footer-icons">
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;