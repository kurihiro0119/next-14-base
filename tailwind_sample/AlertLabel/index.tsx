import React from 'react';
import { Icon } from '../Icon';
import { AlertText } from '../AlertText';

type AlertLabelProps = {
  children: React.ReactNode;
}

export const AlertLabel = ({ children }: AlertLabelProps) =>
{
  return (
    <AlertText className="flex items-center gap-2 p-4 m-4 bg-orange-50 border border-orange-300 rounded-md">
      <Icon type="alert" size="xsmall" color='white' />
      {children}
    </AlertText>
  )
}
