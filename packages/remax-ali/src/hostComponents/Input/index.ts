import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

export interface InputProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  name?: string;
  type?: 'text' | 'number' | 'tel' | 'time' | 'date' | 'url' | 'email';
  password?: boolean;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClassName?: string;
  disabled?: boolean;
  maxlength?: number;
  focus?: boolean;
  confirmType?: 'done' | 'go' | 'next' | 'search' | 'send';
  confirmHold?: boolean;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  randomNumber?: boolean;
  controlled?: boolean;
  enableNative?: boolean;
  onInput?: (e: any) => void;
  onConfirm?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}

export const Input = createHostComponent<InputProps>('input') as React.ComponentType<InputProps>;
