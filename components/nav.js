import Head from './head';
import Link from 'next/link';
import '../pages/styles/Navbar.scss';

const links = [
  { href: 'https://github.com/segmentio/create-next-app', label: 'Github' },
  { href: 'https://google.com', label: 'Google'}
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

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
            {links.map(
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
        <mark>Hello!</mark>
      </nav>
    )
  };
};

export default Nav;

// <style jsx>{`
// :global(body) {
//   margin: 0;
//   font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
// }
// nav {
//   text-align: center;
// }
// ul {
//   display: flex;
//   justify-content: space-between;
// }
// nav > ul {
//   padding: 4px 16px;
// }
// li {
//   display: flex;
//   padding: 6px 8px;
// }
// a {
//   color: #067df7;
//   text-decoration: none;
//   font-size: 13px;
// }
// `}</style>