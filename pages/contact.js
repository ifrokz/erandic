import {connect} from 'react-redux';
import Head from 'next/head';

import {selectLanguage} from './../redux/actions/language';
import Nav from '../components/Navbar';

class Contact extends React.Component {
  static getInitialProps = async ({reduxStore, req}) => {
    return { }
  }

  render () {
    return (
      <div>
        <Head>
          <title>Contact</title>
        </Head>
        <Nav/>
        Contact.js
      </div>
    );
  };
};

export default connect()(Contact);