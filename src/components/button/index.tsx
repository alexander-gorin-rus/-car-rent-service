import React from 'react';
import {IButtonPprops} from '../../utils';
import {FilledButton, OutlinedButton} from './styles';

const Button = (props: IButtonPprops) => {
  const {theme, text, className} = props;

  if (theme === 'filled') {
    return <FilledButton className={className}>{ text }</FilledButton>;
  }

  return <OutlinedButton className={className}>{ text }</OutlinedButton>;
};

export default Button;
