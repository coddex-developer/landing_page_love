import "./footer.min.css";
function Footer() {
  return (
      <div className="containerFooter">
        <span className="pingFooter"></span>
        <a href="https://wa.me/+5561991556764" className="textFooter">
          &copy; {new Date().getFullYear()} Construído com  <i className="bi bi-heart-fill"></i></a>
      </div>
  );
}
export default Footer;