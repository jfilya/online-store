import "./style.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

const header = new Header();
header.innerHeader();
const main = new Main();
main.appendBody();
main.appendMain();
main.appendAsideValue();
main.appendSectionProducts();
const footer = new Footer();
footer.innerFooter();
main.activeSectionProducts();
