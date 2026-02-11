import styles from "./ContactNav.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function ContactNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FiPhone className={styles.icon} />
            <span className={styles.contactText}>(+91) 9058735424</span>
          </div>
          <div className={styles.contactItem}>
            <LuMail className={styles.icon} />
            <span className={styles.contactText}>FoodySite254@gmail.com</span>
          </div>
        </div>
      </div>

      <ul className={styles.social}>
        <li>
          <Link className={styles.socialBtn} to="#" target="_blank" rel="noreferrer" aria-label="twitter"><FaXTwitter /></Link>
        </li>
        <li>
          <Link className={styles.socialBtn} to="#" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebookF /></Link>
        </li>
        <li>
          <Link className={styles.socialBtn} to="#" target="_blank" rel="noreferrer" aria-label="instagram"><FaInstagram /></Link>
        </li>
        <li>
          <Link className={styles.socialBtn} to="https://github.com/suyash7055" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></Link>
        </li>
      </ul>
    </div>
  );
}
