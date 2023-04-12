import { BellFilled, MailOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import { Image } from "../../index";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span>
          <Image
            width={50}
            height={50}
            url="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          />
        </span>
        <div className={styles.navicons}>
          <BellFilled className={styles.icon}/>
          <MailOutlined className={styles.icon}/>
        </div>
      </nav>
    </header>
  );
}

export default Header;
