import Head from './head';
import Link from 'next/link';
import './styles/Navbar.scss';

class Nav extends React.Component {

  render  = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </li>
          <ul>
            {this.createLinks().map(
              ({ key, href, label }) => (
                <li key={key}>
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                </li>
              )
            )}
          </ul>
        </ul>
      </nav>
    );
  };
};

Nav.prototype.createLinks = (lang) => {
  const links = [
    { href: '/about', label: 'About'},
    { href: '/services', label: 'Services'},
    { href: '/projects', label: 'Projects'},
    { href: '/clients', label: 'Clients'},
    { href: '/contact', label: 'Contact'}
  ].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`
    return link;
  });

  return links;
};

export default Nav;

