import React from 'react'
import { IButtonPprops } from '../../utils'
import { FilledButton, OutlinedButton } from './styles';

const Button = (props: IButtonPprops) => {

  const { theme, text } = props;

  if(theme === 'filled') 
      return <FilledButton>{ text }</FilledButton> 
      else
        return <OutlinedButton>{ text }</OutlinedButton>
  }
 

export default Button