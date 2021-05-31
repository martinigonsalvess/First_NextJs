import headerStyles from "../styles/Header.module.css";
function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Web developer</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest web developer news
      </p>
    </div>
  );
}

export default Header;
