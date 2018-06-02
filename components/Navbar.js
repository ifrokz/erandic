import {connect} from 'react-redux';
import Link from 'next/link';
import $ from 'jquery';
import PropTypes from 'prop-types';

import './styles/Navbar.scss';
import {selectLanguage} from '../redux/actions/language';
import {Router} from '../server/next-routes';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount = () => {
    this.setActiveNavLink(this);
  }

  render = () => {
    console.log(this.props)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link {...Router.linkPage('index', {lang: this.props.language.selected.code})}>
          <a className='navbar-brand'>
            <img className='d-inline-block align-top' width='30' height='30' src={this.images.brandImage} alt={this.images.brandImage.alt}/>
            {`{Title}`}
          </a>
        </Link>
        {` [Language: ${this.props.language.selected.code}]`}
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto justify-content-around" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            {
              this.createNavLinks(this.props.language.selected.code).linksArr.map(link => {
                return (
                  <Link {...Router.linkPage(link.page, {lang: this.props.language.selected.code})} key={link.key}>
                    <a className='nav-item nav-link' id={link.id}>{link.text[this.props.language.selected.code]}</a>
                  </Link>
                );
              })
            }
          </div>
        </div>
      </nav>
    );
  };
};

Navbar.prototype.images = {
  brandImage: { 
    valueOf: () => '/static/favicon.ico',
    alt: 'brand-image'
  }
};

Navbar.prototype.setActiveNavLink = (that) => {

  const pathname = location.pathname.split('/')[1];
  const {linksArr} = that.createNavLinks(that.props.language.selected.code);
  
  const activeLinkId = linksArr
    .map(link=> link.id)
    .filter(link => link === `${pathname.toLowerCase()}-nav-link`)[0];

  activeLinkId ? $(`#${activeLinkId}`).addClass('active') : null;
};

Navbar.prototype.createNavLinks = (lang) => {
  const linksArr = [
    {
      page: 'index',
      text: { en: 'Home', es: 'Inicio' }
    },
    {
      page: 'about',
      text: { en: 'About', es: 'Sobre' }
    },
    {
      page: 'services',
      text: { en: 'Services', es: 'Servicios' }
    },
    {
      page: 'portfolio',
      text: { en: 'Portfolio', es: 'Portafolio' }
    },
    {
      page: 'contact',
      text: { en: 'Contact', es: 'Contacto' }
    }
  ];

  const createKey = (text) => {
    return `nav-link-${text[lang].toLowerCase()}`;
  }

  const createId = (text) => {
    return `${text[lang].toLowerCase()}-nav-link`;
  };

  return {
    linksArr: linksArr.map(link => {
      link.key = createKey(link.text);
      link.id = createId(link.text);

      return link;
    })
  };
};

Navbar.propTypes = {
  language: PropTypes.shape({
    selected: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string
    }),
    available: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string
    }))
  })
}

const mapStateToProps = (state) => {
    return {
      language: state.language
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectLanguage: (language) => dispatch(selectLanguage(language))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

