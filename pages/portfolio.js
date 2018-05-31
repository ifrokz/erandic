import {connect} from 'react-redux';
import Head from 'next/head';

import {selectLanguage} from './../redux/actions/language';
import Nav from '../components/Navbar';

class Portfolio extends React.Component {
  static getInitialProps = async ({reduxStore, req}) => {
    return { }
  }

  render () {
    return (
      <div>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Nav/>
        Portfolio.js
      </div>
    );
  };
};

export default connect()(Portfolio);