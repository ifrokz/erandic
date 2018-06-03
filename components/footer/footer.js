import {connect} from 'react-redux';

import Link from 'next/link';
import ContactForm from '../contact/form';
import _t from './lang.json';

import './_footer.scss';

class Footer extends React.Component {
  render = () => {
    return (
      <footer className='footer'>
          <span className='text-muted'>Place sticky footer content here.</span>
          <ContactForm/>
      </footer>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(Footer);
