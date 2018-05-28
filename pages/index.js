import '../components/styles/style.scss';
import {connect} from 'react-redux';

import {selectLanguage} from './../redux/actions/language';

class Index extends React.Component {
  static getInitialProps = async ({reduxStore, req}) => {
    const isServer = !!req;

    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    console.log('body:', req.query, req.query, req.params);
    return { userAgent, params: req.params, query: req.query }
  }
  componentWillMount(){
    const {dispatch} = this.props;
    dispatch(selectLanguage('ES'));
  }
  isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
  };

  render = () => (
    <div>
      <h1>Hello world from Next JS {this.isClientOrServer()}</h1>
      <div>
        <p>{`userAgent => ${this.props.userAgent}`}</p>
        <p>{`Params => ${JSON.stringify(this.props.params)}`}</p>
        <p>{`Query => ${JSON.stringify(this.props.query)}`}</p>\
        <p>{JSON.stringify(this.props.lang)}</p>
      </div>
    </div>
  );
};

function mapStateToProps (state) {
  const lang = state.language;
  return {lang};
};

export default connect(mapStateToProps)(Index)
// export  default Index;
