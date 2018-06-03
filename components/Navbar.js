import {connect} from 'react-redux';
import Link from 'next/link';
import $ from 'jquery';
import PropTypes from 'prop-types';

import './styles/Navbar.scss';
import {selectLanguage} from '../redux/actions/language';
import {Router} from '../server/next-routes';
import _t from './navbar/lang.json';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount = () => {
    this.setActiveNavLink(this);
  }

  render = () => {
    const code = this.props.language.selected.code;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link {...Router.linkPage('index', {lang: this.props.language.selected.code})}>
          <a className='navbar-brand'>
            <img className='d-inline-block align-top' width='30' height='30' src={this.images.brandImage} alt={this.images.brandImage.alt}/>
            {`${_t.title[code]}`}
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
                    <a className='nav-item nav-link' id={link.id}>{_t.pages[link.lang.code].text[code]}</a>
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

  activeLinkId ? $(`#${activeLinkId}`).addClass('active') : 
  !pathname ? $(`#${_t.pages.home.path.en}-nav-link`).addClass('active') : null;
};

Navbar.prototype.createNavLinks = (lang, active) => {
  const linksArr = [
    {
      page: 'index',
      lang: {code: 'home'}
    },
    {
      page: 'about',
      lang: {code: 'about'}
    },
    {
      page: 'services',
      lang: {code: 'services'}
    },
    {
      page: 'portfolio',
      lang: {code: 'portfolio'}
    },
    {
      page: 'contact',
      lang: {code: 'contact'}
    }
  ];

  return {
    linksArr: linksArr.map(link => {
      link.key = `nav-link-${link.page}`
      link.id = `${_t.pages[link.lang.code].path[lang]}-nav-link`;
      console.log()
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

