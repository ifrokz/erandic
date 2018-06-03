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
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label' htmlFor='inputEmail'>Email address</label>
            <div className='col-sm-8'>
              <input
                type='text'
                className="form-control"
                placeholder={'placeholder'}
                id='inputEmail'
                autoFocus
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label' htmlFor='inputEmail'>Title</label>
            <div className='col-sm-8'>
              <input
                type='text'
                className="form-control"
                placeholder={'placeholder'}
                id='inputEmailTitle'
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label' htmlFor='inputEmail'>Email address</label>
            <div className='col-sm-8'>
              <textarea
                className="form-control"
                placeholder={'placeholder'}
                id='inputEmailContent'
              />
            </div>
          </div>
          <button type='submit' className="col-sm-8 btn btn-primary btn-block">Submit</button>
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