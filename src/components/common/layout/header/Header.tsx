import { BellFilled, MailOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import { Image, LoginBtn } from "../../index";
import { useAuth } from "../../../../context/AuthContext";
import {Notification} from '../../../notification/Notification'

function Header() {

  const {user} = useAuth()

  const handleClick=()=>{
    return <Notification/>
  }

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
          <BellFilled className={styles.icon} onClick={()=>handleClick()}/>
          <MailOutlined className={styles.icon} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
