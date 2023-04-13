import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/Navbar.module.scss';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Image src={'/next.svg'} width={200} height={50} alt={'logo'} />
      <div>
        <Link
          href={'/'}
          className={router.pathname === '/' ? styles.active : ''}
        >
          Home
        </Link>
        <Link
          href={'/about'}
          className={router.pathname === '/about' ? styles.active : ''}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
