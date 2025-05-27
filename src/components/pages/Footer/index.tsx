import "./footer.min.css";
function Footer() {
  return (
      <div className="containerFooter">
        <span className="pingFooter"></span>
        <p className="textFooter">
          &copy; {new Date().getFullYear()} Contruído com  <i className="bi bi-heart-fill"></i></p>
      </div>
  );
}
export default Footer;