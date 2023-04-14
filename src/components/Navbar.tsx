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
          href={'/trending'}
          className={router.pathname === '/trending' ? styles.active : ''}
        >
          Trending
        </Link>
        <Link
          href={'/top-rate'}
          className={router.pathname === '/top-rate' ? styles.active : ''}
        >
          Top Rate
        </Link>
        <Link
          href={'/popular'}
          className={router.pathname === '/popular' ? styles.active : ''}
        >
          Popular
        </Link>
        <Link
          href={'/search'}
          className={router.pathname === '/search' ? styles.active : ''}
        >
          Search
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
