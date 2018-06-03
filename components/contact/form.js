import {connect} from 'react-redux';
import _ from 'lodash';

import './_form.scss';

class Form extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      form: {
        email: {
          value: undefined,
          error: undefined
        },
        title: {
          value: undefined,
          error: undefined
        },
        content: {
          value: undefined,
          error: undefined
        }
      }
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render = () => {
    return (
      <div>
        <h4>Contacto:</h4>
        <form onSubmit={this.onSubmit} id='footer__contactForm'>
          <div className='form-group'>
            <label htmlFor='inputEmail'>Email address</label>
            <input
              type='text'
              className="form-control"
              placeholder={'placeholder'}
              id='inputEmail'
              autoFocus
            />
          </div>
          <div className='form-group'>
            <label htmlFor='inputEmailTitle'>Title</label>
            <input
              type='textarea'
              className="form-control"
              placeholder={'placeholder'}
              id='inputEmailTitle'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='inputEmailContent'>Message content</label>
            <textarea
              className='form-control'
              placeholder={'placeholder'}
              id='inputEmailContent'
            />
          </div>
          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    language: state.language.selected
  };
};

export default connect(mapStateToProps)(Form);