

export const ContactHtml = () => {

  return (
    <>
        <nav className="menu ">
            <input type="checkbox" href="#" className="menu-open " name="menu-open" id="menu-open"/>
            <label className="menu-open-button bg-white" htmlFor="menu-open">
                <span className="mail">📬</span>
                <span className="hamburger hamburger-1"></span>
                <span className="hamburger hamburger-2"></span>
                <span className="hamburger hamburger-3"></span>
            </label>
            
            <a href="mailto:edifu88@gmail.com" className="menu-item"> 💌 </a>
            <a href="projects/hand.png" target="_blank" className="menu-item resume"> 📄</a>
            <a href="tel:+12506871245" className="menu-item"> 📱 </a>
            
            
            
        </nav>
    </>
  );
};

