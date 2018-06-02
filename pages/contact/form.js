import {connect} from 'react-redux';



class Form extends React.Component {
  onSubmit = () => {

  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder={'placeholder'}
            autoFocus
          />
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