import {connect} from 'react-redux';

import Link from 'next/link';
import './styles/Navbar.scss';
import $ from 'jquery';
import {selectLanguage} from '../redux/actions/language';

class Nav extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount = () => {
    this.setActiveNavLink(this);
  }

  render = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href={`/${this.props.language.selected}/?minPrice=100&maxPrice=250`}>
          <a className='navbar-brand'>
            <img className='d-inline-block align-top' width='30' height='30' src={this.images.brandImage} alt={this.images.brandImage.alt}/>
            {`{Bootstrapñá}`}
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
};

Nav.prototype.images = {
  brandImage: { 
    valueOf: () => '/static/favicon.ico',
    getLink: this.valueOf,
    alt: 'brand-image'
  }
};

Nav.prototype.setActiveNavLink = (that) => {
  const links = that.createNavLinks(that.props.language.selected);
  links.map(({id, href}) => {
    if(href === location.pathname)
      $(`a#${id}`).addClass('active');
    else {
      if(location.pathname === '/' || location.pathname === `/${that.props.language.selected}`)
        $(`a#${links[0].id}`).addClass('active'); 
      else 
      $(`a#${id}`).removeClass('active');
    }
  });
  // $(`a#${id}`).addClass('active');
}

Nav.prototype.createNavLinks = (language) => {
  const linksArr = [
    { href: `/${language}/`, label: 'Home'},
    { href: `/${language}/about`, label: 'About'},
    { href: `/${language}/services`, label: 'Services'},
    { href: `/${language}/portfolio`, label: 'Portfolio'},
    { href: `/${language}/contact`, label: 'Contact'}
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

const mapDispatchToProps = (dispatch) => {
  return {
    selectLanguage: (language) => dispatch(selectLanguage(language))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

