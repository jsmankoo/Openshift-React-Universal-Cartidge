import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import {connect} from 'react-redux';
import Color from 'color';
import {colors} from '../../styles';
import {base, h1, menuWraper} from './Styles';

const mapStateToProps = ({Menu}) => {
  return {
    menuOpen: Menu.get('open')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle(){
      dispatch({type: 'MENU_TOGGLE'});
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class App extends Component {
  shouldComponentUpdate = (nextProps) => {
    return nextProps.menuOpen !== this.props.menuOpen;
  }
  render(){
    const {menuOpen, toggle} = this.props;
    return (
      <StyleRoot style={[base]}>

        <h1 style={[h1]}>App!</h1>

        <div style={[menuWraper]}>
          <div style={[menuWraper.menuState]}>
            {menuOpen ? 'Open' : 'Closed'}
          </div>
          <button onClick={toggle}
            style={[
              menuWraper.button,
              {backgroundColor: Color(menuOpen ? colors.green : colors.red).hslString()}
            ]}>
              Toggle
            </button>
        </div>
      </StyleRoot>
    );
  }
};

export default App;
