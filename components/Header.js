import headerStyles from "../styles/Header.module.css";
function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web developer</span> News
      </h1>
    </div>
  );
}

export default Header;
