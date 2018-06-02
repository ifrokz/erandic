import {connect} from 'react-redux';
import Head from 'next/head';
import Link from 'next/link'
import PropTypes from 'prop-types';

import {Router} from '../server/next-routes';
import {selectLanguage} from './../redux/actions/language';
import Page from './_page';

class Index extends React.Component {
  static getInitialProps = async ({reduxStore, req, query: {lang}}) => {
    const isServer = !!req;
    
    const request = {
      params: isServer ? req.params : {},
      query: isServer ? req.query : {}
    };

    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    reduxStore.dispatch(selectLanguage(lang));
    return {...request, lang: lang}
  };

  isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
  };

  renderSwitchLangageLink() {
    const {lang} = this.props;
    const switchLang = lang === 'es' ? 'en' : 'es';
    return (
      <Link {...Router.linkPage('index', {lang: switchLang})}>
         <a> {switchLang === 'es' ? `Change language:` : `Cambiar idioma:`} {switchLang === 'es' ? 'Español' : 'English'}</a>
      </Link>
    );
  };

  render = () => {
    const {language} = this.props;
    
    return (
      <Page>
        <Head>
          <title>Home</title>
        </Head>
        <div>
          <h1>{language === 'es' ? 'Hola' : 'Hello'} Ivan</h1>
          <div>{this.renderSwitchLangageLink()}</div>
        </div>
        <h1>Hello world from Next JS {language.code} {this.isClientOrServer()}</h1>

        <div>
          <p>{`Params => ${JSON.stringify(this.props.params)}`}</p>
          <p>{`Query => ${JSON.stringify(this.props.query)}`}</p>
          <p>{`Store.language => ${JSON.stringify(language, null, 2)}`} </p>
        </div>
      </Page>
    );
  };
};

Index.propTypes = {
  store: PropTypes.object,
  req: PropTypes.object,
  language: PropTypes.shape({
    selected: PropTypes.string,
    name: PropTypes.string
  })
};

function mapStateToProps (state) {
  return {language: state.language.selected};
};

export default connect(mapStateToProps)(Index);

