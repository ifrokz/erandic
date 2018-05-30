import {connect} from 'react-redux';
import Head from 'next/head';

import {selectLanguage} from './../redux/actions/language';
import Nav from '../components/Navbar';

class Index extends React.Component {
  static getInitialProps = async ({reduxStore, req}) => {
    const isServer = !!req;

    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    // reduxStore.dispatch(selectLanguage(req.params.language));
    return { userAgent, params: req.params , query: req.query}
  }

  isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
  };

  render = () => (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav/>

      <h1>Hello world from Next JS {this.isClientOrServer()}</h1>
      
      <div>
        <p>{`userAgent => ${this.props.userAgent}`}</p>
        <p>{`Params => ${JSON.stringify(this.props.params)}`}</p>
        <p>{`Query => ${JSON.stringify(this.props.query)}`}</p>
        <p>{JSON.stringify(this.props.language)}</p>
      </div>
    </div>
  );
};

function mapStateToProps (state) {
  const lang = state.language;
  return {language: lang};
};

export default connect(mapStateToProps)(Index);

