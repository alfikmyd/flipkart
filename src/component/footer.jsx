import { NavItem } from "react-bootstrap";

const about = [
    { label: "Contact Us" },
    { label: "About Us" },
    { label: "Carrers" },
    { label: "Flipkart Stories" },
    { label: "Press" },
    { label: "Corporate Information" }
];
const company = [
    { label: "Myntra" },
    { label: "Cleartrip" },
    { label: "Shopsy" }
];
const help = [
    { label: "Payments" },
    { label: "Shipping" },
    { label: "Cancellation & Returns" },
    { label: "FAQ" }
];
const policy = [
    { label: "cancellation & Returns" },
    { label: "Terms of Use" },
    { label: "Security" },
    { label: "Privacy" },
    { label: "Sitemap" },
    { label: "Grievance Redressal" },
    { label: "EPR Compliance" }
];
const mail = [
    { label: "Flipkart Internet Private Limited," },
    { label: "Buildings Alyssa, Begonia &" },
    { label: "Clove Embassy Tech Village," },
    { label: "Outer Ring Road, Devarabeesanahalli Village," },
    { label: "Bengaluru, 560103," },
    { label: "Karnataka, India" }
];

function Footer() {

    return (
        <>
            <footer>
                <div id="foot">
                    <div className="footAbout">
                        <h6>ABOUT</h6>
                        {about.map((item) => (
                            <a href="/">{item.label}</a>
                        ))}
                    </div>

                    <div className="footCompany">
                        <h6>GROUP COMPANIES</h6>
                        {company.map((item) => (
                            <a href="/">{item.label}</a>
                        ))}
                    </div>

                    <div className="footHelp">
                        <h6>HELP</h6>
                        {help.map((item) => (
                            <a href="/">{item.label}</a>
                        ))}
                    </div>

                    <div className="footPolicy">
                        <h6>CONSUMER POLICY</h6>
                        {policy.map((item) => (
                            <a href="/">{item.label}</a>
                        ))}
                    </div>

                    <div className="footMail">
                        <h6>Mail Us:</h6>
                        {mail.map((item) => (
                            <span>{item.label}</span>
                        ))}

                        <div className="footSocial" style={{cursor:"pointer"}}>

                            <h6>Social</h6>

                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9331 21C17.9037 21 21.9331 16.9706 21.9331 12C21.9331 7.02944 17.9037 3 12.9331 3C7.96254 3 3.93311 7.02944 3.93311 12C3.93311 16.9706 7.96254 21 12.9331 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.6831 8.25H15.1831C14.5864 8.25 14.0141 8.48705 13.5921 8.90901C13.1702 9.33097 12.9331 9.90326 12.9331 10.5V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.93311 13.5H15.9331" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <svg style={{ marginLeft: "15px" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_183_20)">
                                    <path d="M13.5436 10.6179L20.0971 3H18.5441L12.8537 9.61448L8.30887 3H3.06689L9.93964 13.0023L3.06689 20.9908H4.61994L10.6291 14.0056L15.4288 20.9908H20.6708L13.5432 10.6179H13.5436ZM11.4165 13.0904L10.7202 12.0944L5.17953 4.16911H7.56491L12.0363 10.5651L12.7326 11.5611L18.5448 19.8748H16.1595L11.4165 13.0908V13.0904Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_183_20">
                                        <rect x="3.06689" y="3" width="17.6039" height="18" rx="0.2" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <svg style={{ marginLeft: "15px" }} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="YoutubeLogo">
                                    <path id="Vector" d="M15.9331 12L11.4331 9V15L15.9331 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path id="Vector_2" d="M3.18311 12C3.18311 14.7895 3.47131 16.4263 3.69039 17.2675C3.74896 17.4972 3.86142 17.7097 4.01847 17.8873C4.17552 18.0649 4.37263 18.2026 4.59347 18.2888C7.73193 19.4949 12.9331 19.4618 12.9331 19.4618C12.9331 19.4618 18.1342 19.4949 21.2727 18.2888C21.4936 18.2026 21.6907 18.0649 21.8477 17.8873C22.0048 17.7097 22.1172 17.4972 22.1758 17.2675C22.3949 16.4263 22.6831 14.7896 22.6831 12C22.6831 9.21039 22.3949 7.57368 22.1758 6.73248C22.1173 6.50273 22.0048 6.29025 21.8477 6.11264C21.6907 5.93502 21.4936 5.79738 21.2727 5.71113C18.1343 4.50506 12.9331 4.53818 12.9331 4.53818C12.9331 4.53818 7.73199 4.50506 4.5935 5.71112C4.37266 5.79737 4.17555 5.93501 4.0185 6.11262C3.86145 6.29024 3.74898 6.50272 3.69041 6.73246C3.47132 7.57366 3.18311 9.21039 3.18311 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>

                            <svg style={{ marginLeft: "17px" }} xmlns="http://www.w3.org/2000/svg" width="19" height="20" fill="white" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>

                        </div>
                    </div>

                    <div className="footAdrs" style={{ marginLeft: "-120px" }}>
                        <h6>Registered Office Address: </h6>
                        {mail.map((items) => (
                            <span>{items.label}</span>
                        ))}
                        <span>CIN : U51109KA2012PTC066107</span>
                        <span>Telephone: <a href="#">044-45614700</a> / <a href="#">044-67415800</a></span>
                    </div>
                </div>

                <div id="footLast">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15">
                            <defs>
                                <linearGradient id="a" x1="0%" x2="86.876%" y1="0%" y2="80.202%">
                                    <stop offset="0%" stop-color="#FFD800" />
                                    <stop offset="100%" stop-color="#FFAF00" />
                                </linearGradient>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <path d="M-2-2h20v20H-2z" />
                                <path fill="url(#a)" fill-rule="nonzero" d="M15.93 5.614h-2.948V4.14c0-.818-.655-1.473-1.473-1.473H8.56c-.817 0-1.473.655-1.473 1.473v1.474H4.14c-.818 0-1.466.656-1.466 1.474l-.007 8.105c0 .818.655 1.474 1.473 1.474h11.79c.818 0 1.474-.656 1.474-1.474V7.088c0-.818-.656-1.474-1.474-1.474zm-4.421 0H8.56V4.14h2.948v1.474z" transform="translate(-2 -2)" />
                            </g>
                        </svg> Become a Seller
                        
                    </div>
                    <div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <defs>
                                <linearGradient id="a" x1="0%" x2="86.876%" y1="0%" y2="80.202%">
                                    <stop offset="0%" stop-color="#FFD800" />
                                    <stop offset="100%" stop-color="#FFAF00" />
                                </linearGradient>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <path d="M-3-3h20v20H-3z" />
                                <path fill="url(#a)" fill-rule="nonzero" d="M10.492 3C6.353 3 3 6.36 3 10.5c0 4.14 3.353 7.5 7.492 7.5C14.64 18 18 14.64 18 10.5 18 6.36 14.64 3 10.492 3zm3.18 12L10.5 13.088 7.327 15l.84-3.607L5.37 8.97l3.69-.315L10.5 5.25l1.44 3.398 3.69.315-2.798 2.422.84 3.615z" transform="translate(-3 -3)" />
                            </g>
                        </svg> Advertise
                        
                    </div>
                    <div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">
                            <defs>
                                <linearGradient id="a" x1="0%" x2="86.876%" y1="0%" y2="80.202%">
                                    <stop offset="0%" stop-color="#FFD800" />
                                    <stop offset="100%" stop-color="#FFAF00" />
                                </linearGradient>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <path d="M-1-1h20v20H-1z" />
                                <path fill="url(#a)" fill-rule="nonzero" d="M16.667 5H14.85c.092-.258.15-.542.15-.833a2.497 2.497 0 0 0-4.583-1.375L10 3.35l-.417-.567A2.51 2.51 0 0 0 7.5 1.667a2.497 2.497 0 0 0-2.5 2.5c0 .291.058.575.15.833H3.333c-.925 0-1.658.742-1.658 1.667l-.008 9.166A1.66 1.66 0 0 0 3.333 17.5h13.334a1.66 1.66 0 0 0 1.666-1.667V6.667A1.66 1.66 0 0 0 16.667 5zm0 6.667H3.333v-5h4.234L5.833 9.025l1.35.975 1.984-2.7L10 6.167l.833 1.133 1.984 2.7 1.35-.975-1.734-2.358h4.234v5z" transform="translate(-1 -1)" />
                            </g>
                        </svg> Gift Cards
                        
                    </div>
                    <div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                            <defs>
                                <linearGradient id="a" x1="0%" x2="86.876%" y1="0%" y2="80.202%">
                                    <stop offset="0%" stop-color="#FFD800" />
                                    <stop offset="100%" stop-color="#FFAF00" />
                                </linearGradient>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <path d="M-2-3h20v20H-2z" />
                                <path fill="url(#a)" fill-rule="nonzero" d="M9.5 3C5.36 3 2 6.36 2 10.5 2 14.64 5.36 18 9.5 18c4.14 0 7.5-3.36 7.5-7.5C17 6.36 13.64 3 9.5 3zm.75 12.75h-1.5v-1.5h1.5v1.5zm1.553-5.813l-.676.69c-.54.548-.877.998-.877 2.123h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.645.443-1.057 0-.825-.675-1.5-1.5-1.5S8 7.425 8 8.25H6.5a3 3 0 1 1 6 0c0 .66-.27 1.26-.697 1.688z" transform="translate(-2 -3)" />
                            </g>
                        </svg> Help Center
                        
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
                        </svg> 2007 - 2025 Flipkart.com 
                    </div>
                    <div>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;