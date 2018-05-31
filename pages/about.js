import {connect} from 'react-redux';
import Head from 'next/head';

import {selectLanguage} from './../redux/actions/language';
import Nav from '../components/Navbar';

class About extends React.Component {
  static getInitialProps = async ({reduxStore, req}) => {
    
      return {}
  }

  render () {
    return (
      <div>
        <Head>
          <title>About</title>
        </Head>
        <Nav/>
        <p onClick={() => {

        }}>About.js</p>
      </div>
    );
  };
};

export default connect()(About);