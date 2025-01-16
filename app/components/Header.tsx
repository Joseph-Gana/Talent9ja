"use client";
import Link from 'next/link';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/Images/Logo.png" alt="Talent9ja Logo" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/"
                className={pathname === '/' ? styles.active : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={pathname === '/blog' ? styles.active : ''}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/talent-showcase"
                className={
                  pathname === '/talent-showcase' ? styles.active : ''
                }
              >
                Talent Showcase
              </Link>
            </li>
            <li>
              <Link
                href="/upload-talent"
                className={
                  pathname === '/upload-talent' ? styles.active : ''
                }
              >
                Upload Talent
              </Link>
            </li>
          </ul>
          <div className={styles.buttons}>
            <button className={styles.signInBtn}>Sign In</button>
            <button className={styles.signUpBtn}>Sign Up</button>
          </div>
        </nav>
      </header>
      <div className={styles.divider}></div>
    </>
  );
};

export default Header;