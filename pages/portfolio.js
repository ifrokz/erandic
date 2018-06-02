import {connect} from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';

import {selectLanguage} from './../redux/actions/language';
import Page from './_page';

class Portfolio extends React.Component {
  static getInitialProps = async ({reduxStore, req, query: {lang}}) => {
    const isServer = !!req;
    
    const request = {
      params: isServer ? req.params : undefined,
      query: isServer ? req.query : undefined
    };

    // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    reduxStore.dispatch(selectLanguage(lang));
    return {...request, lang: lang};
  };

  render () {
    return (
      <Page>
        <Head>
          <title>Portfolio</title>
        </Head>
        Portfolio.js
      </Page>
    );
  };
};

Portfolio.propTypes = {
  store: PropTypes.object,
  req: PropTypes.object,
  language: PropTypes.shape({
    selected: PropTypes.string,
    name: PropTypes.string
  })
}

function mapStateToProps (state) {
  return {language: state.language.selected};
};

export default connect(mapStateToProps)(Portfolio);