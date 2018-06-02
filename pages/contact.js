import {connect} from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';

import {selectLanguage} from './../redux/actions/language';
import Page from './Page';

class Contact extends React.Component {
  static getInitialProps = async ({reduxStore, req, query: {lang}}) => {
    const isServer = !!req;
    
    const request = {
      params: isServer ? req.params : undefined,
      query: isServer ? req.query : undefined
    };

    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    reduxStore.dispatch(selectLanguage(lang));
    return {req: request, lang: lang};
  };

  render () {
    return (
      <Page>
        <Head>
          <title>Contact</title>
        </Head>
        Contact.js
      </Page>
    );
  };
};

Contact.propTypes = {
  store: PropTypes.object,
  req: PropTypes.object,
  lang: PropTypes.string
}

function mapStateToProps (state) {
  const lang = state.language;
  return {store: {language: lang}};
};

export default connect(mapStateToProps)(Contact);