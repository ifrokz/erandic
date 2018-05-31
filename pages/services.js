import {connect} from 'react-redux';
import Head from 'next/head';

import {selectLanguage} from './../redux/actions/language';
import Nav from '../components/Navbar';

class Services extends React.Component {
  static getInitialProps = async ({reduxStore, req}) => {
    return {}
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