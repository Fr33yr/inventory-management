import { BellFilled, MailOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import { Image, LoginBtn } from "../../index";
import { useAuth } from "../../../../context/AuthContext";

function Header() {

  const {user} = useAuth()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logincontainer}>
          <span>
            <Image
              width={50}
              height={50}
              url={user?.photoURL}
            />
          </span>
          <LoginBtn />
        </div>
        <div className={styles.navicons}>
          <BellFilled className={styles.icon} />
          <MailOutlined className={styles.icon} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
