import {connect} from 'react-redux';
import Head from 'next/head';

import {selectLanguage} from './../redux/actions/language';
import Nav from '../components/Navbar';

class Services extends React.Component {
  static getInitialProps = async ({reduxStore, req}) => {
    reduxStore.dispatch(selectLanguage(req.params.language));
    return { params: req.params , query: req.query}
  }

  render () {
    return (
      <div>
        <Head>
          <title>Services</title>
        </Head>
        <Nav/>
        Services.js
      </div>
    );
  };
};

export default connect()(Services);