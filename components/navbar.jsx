import React , {useState} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import styles from '../styles/components/Navbar.module.css'

const Navbar = () => 
{
  const [toggleMenu, setToggleMenu] = useState(false);
  const router = useRouter()
  const SearchKeyPress = (e) => {
    if(e.keyCode !== 13) return;
    alert(e.target.value)
    router.push('/search')
    e.target.value = ""
  }
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_links}>
        <div className={styles.navbar_links_logo}>
          {/* <img src={logo} /> */}
        </div>
        <div className={styles.navbar_links_container}>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/movies">Movies</Link></p>
          <p><Link href="/tvseries">TV Series</Link></p>
          <p><Link href="/contactus">Contact Us</Link></p>
          <p><Link href="/aboutus">About Us</Link></p>
        </div>
      </div>
      <div className={styles.navbar_sign}>
        <input maxLength={25} type="text" placeholder='Search' onKeyDown={SearchKeyPress}/>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.navbar_menu}>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className={`${styles.navbar_menu_container} ${styles.scale_up_center}`}>
          <div className={styles.navbar_menu_container_links} 
                onClick={() => setToggleMenu(false)}>
          <p><Link href="/">Home</Link></p>
          <p><Link href="/movies">Movies</Link></p>
          <p><Link href="/tvseries">TV Series</Link></p>
          <p><Link href="/contactus">Contact Us</Link></p>
          <p><Link href="/aboutus">About Us</Link></p>
          </div>
          <div className={styles.navbar_menu_container_links_sign}>    
            <input maxLength={25} type="text" placeholder='Search' onKeyDown={SearchKeyPress}/>
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