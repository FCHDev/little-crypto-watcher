import React from 'react';
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarItems}>
                <Link href="/">
                    Accueil
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;