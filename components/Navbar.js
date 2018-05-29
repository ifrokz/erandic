import {connect} from 'react-redux';

import Link from 'next/link';
import './styles/Navbar.scss';
import $ from 'jquery';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.debug = false;
  }

  componentDidMount = () => {
    this.setActiveNavLink(this);
  }

  render = () => this.debug ? (<div>Debugging</div>) : (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link prefetch href={`/${this.props.language.selected}/?minPrice=100&maxPrice=250`}>
        <a className='navbar-brand'>
          <img className='d-inline-block align-top' width='30' height='30' src={this.images.brandImage} alt={this.images.brandImage.alt}/>
          {`{Bootstrapñ}`}
        </a>
      </Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mr-auto justify-content-around" id="navbarNavAltMarkup">
        <div className="navbar-nav ">
          {this.createNavLinks(this.props.language.selected).map(
            ({ href, key, label, id }) => (
              <Link href={href}  key={key}>
                <a className='nav-item nav-link' id={id}>{label}</a>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

Nav.prototype.images = {
  brandImage: { 
    valueOf: () => '../static/favicon.ico',
    getLink: this.valueOf,
    alt: 'brand-image'
  }
};

Nav.prototype.setActiveNavLink = (that) => {
  const links = that.createNavLinks(that.props.language.selected);
  console.log(links);
  links.map(({id, href}) => {
    if(href){

    }
    $(`a#${id}`).removeClass('active')
  });
  // $(`a#${id}`).addClass('active');
}

Nav.prototype.createNavLinks = (language) => {
  
  const linksArr = [
    { href: `/${language}/`, label: 'Home'},
    { href: `/${language}/about`, label: 'About'},
    { href: `/${language}/services`, label: 'Services'},
    { href: `/${language}/projects`, label: 'Projects'},
    { href: `/${language}/clients`, label: 'Clients'},
    { href: `/${language}/`, label: 'Contact'}
  ];

  const links = linksArr.map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    link.id = `${link.label}-nav-link`
    return link;
  });
  return links;
};

const mapStateToProps = (state) => ({
    language: state.language
});

export default connect(mapStateToProps)(Nav);
