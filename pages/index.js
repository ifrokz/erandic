import {connect} from 'react-redux';
import Head from 'next/head';
import Link from 'next/link'

import {Router} from '../server/next-routes';
import {selectLanguage} from './../redux/actions/language';
import Page from './common/page';

class Index extends React.Component {
  static getInitialProps = async ({reduxStore, req, query: {lang}}) => {
    const isServer = !!req;
    
    const request = {
      params: isServer ? req.params : undefined,
      query: isServer ? req.query : undefined
    }

    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    reduxStore.dispatch(selectLanguage(lang));
    return {req: request, lang: lang}
  }

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
  }

  render = () => {
    const {lang} = this.props;
    return (
      <Page>
        <Head>
          <title>Home</title>
        </Head>
        <div>
          <h1>{lang === 'es' ? 'Hola' : 'Hello'} Ivan</h1>
          <div>{this.renderSwitchLangageLink()}</div>
        </div>
        <h1>Hello world from Next JS {lang} {this.isClientOrServer()}</h1>

        <div>
          <p>{`Params => ${JSON.stringify(this.props.req.params)}`}</p>
          <p>{`Query => ${JSON.stringify(this.props.req.query)}`}</p>
          <p>{`Store=> ${JSON.stringify(this.props.store, null, 2)}`}</p>
        </div>
      </Page>
    )
  };
};

function mapStateToProps (state) {
  const lang = state.language;
  return {store: {language: lang}};
};

export default connect(mapStateToProps)(Index);

