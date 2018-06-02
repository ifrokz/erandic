import {connect} from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';

import {selectLanguage} from './../redux/actions/language';
import Nav from '../components/Navbar';
import Page from './_page';

class About extends React.Component {
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
          <title>About</title>
        </Head>
        <p onClick={() => {

        }}>About.js</p>
      </Page>
    );
  };
};

About.propTypes = {
  store: PropTypes.object,
  req: PropTypes.object,
  lang: PropTypes.string
}

function mapStateToProps (state) {
  return {language: state.language.selected};
};

export default connect(mapStateToProps)(About);