import React from 'react';
import TextSection, { TextSectionProps } from './TextSection';
import Button, { ButtonProps } from './Button';
import Logo, { LogoProps } from './Logo';
import './MyModule.css';

interface MyModuleProps {
    logoProps: LogoProps;
    buttonProps: ButtonProps;
    textSectionProps: TextSectionProps;
  
  
}

const MyModule: React.FC<MyModuleProps> = ({ textSectionProps, buttonProps, logoProps }) => {
  return (
    <div className="mymodule">
        <Logo {...logoProps} />
      <Button {...buttonProps} />
      <TextSection {...textSectionProps} />
      
    </div>
  );
};

export default MyModule;
