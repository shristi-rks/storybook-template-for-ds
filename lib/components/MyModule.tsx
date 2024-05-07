import React from 'react';
import TextSection, { TextSectionProps } from './TextSection';
import Button, { ButtonProps } from './Button';
//import Logo, { LogoProps } from './Module1/Logo/Logo';
import './MyModule.css';

interface MyModuleProps {
  textSectionProps: TextSectionProps;
  buttonProps: ButtonProps;
  logoProps: LogoProps;
}

const MyModule: React.FC<MyModuleProps> = ({ textSectionProps, buttonProps, logoProps }) => {
  return (
    <div className="mymodule">
      <TextSection {...textSectionProps} />
      <Button {...buttonProps} />
      <Logo {...logoProps} />
    </div>
  );
};

export default MyModule;
