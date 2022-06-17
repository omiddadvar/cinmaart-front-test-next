import React , {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from '../styles/components/Navbar.module.css'

const Navbar = () => 
{
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.omid__navbar}>
      <div className={styles.omid__navbar_links}>
        <div className={styles.omid__navbar_links_logo}>
          {/* <img src={logo} /> */}
        </div>
        <div className={styles.omid__navbar_links_container}>
          <p><a href="#home">Home</a></p>
          <p><a href="#movies">Movies</a></p>
          <p><a href="#tvseries">TV Series</a></p>
          <p><a href="#contactus">Contact Us</a></p>
          <p><a href="#abouttus">About Us</a></p>
        </div>
      </div>
      <div className={styles.omid__navbar_sign}>
        <input maxLength={25} type="text" placeholder='Search'/>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.omid__navbar_menu}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        // <div className={[styles.omid__navbar_menu_container,styles.scale_up_center]}>
        <div className={`${styles.omid__navbar_menu_container} ${styles.scale_up_center}`}>
          <div className={styles.omid__navbar_menu_container_links}>
          <p><a href="#home">Home</a></p>
          <p><a href="#movies">Movies</a></p>
          <p><a href="#tvseries">TV Series</a></p>
          <p><a href="#contactus">Contact Us</a></p>
          <p><a href="#abouttus">About Us</a></p>
          </div>
          <div className={styles.omid__navbar_menu_container_links_sign}>    
            <input maxLength={25} type="text" placeholder='Search'/>
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default Navbar