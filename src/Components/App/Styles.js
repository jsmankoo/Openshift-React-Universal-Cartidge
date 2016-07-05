import {colors, fonts} from '../../styles';
import Color from 'color';

const base = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%'
};

const menuWraper = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  menuState: {
    lineHeight: '22px'
  },

  button: {
    color: Color(colors.white).hslString(),
    border: 'none',
    marginLeft: '20px'
  }
};

const h1 = {
  textAlign: 'center',
  fontFamily: fonts.head,
  color: Color(colors.black).hslString()
};

export {
  base,
  h1,
  menuWraper
};
