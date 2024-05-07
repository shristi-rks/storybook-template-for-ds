import { Meta, Story } from '@storybook/react';
import MyModule, { MyModuleProps } from './MyModule';

const meta: Meta<MyModuleProps> = {
  title: 'Components/MyModule',
  component: MyModule,
};

export default meta;

const Template: Story<MyModuleProps> = (args) => <MyModule {...args} />;

export const Default = Template.bind({});
Default.args = {
  textSectionProps: {
    title: 'Default Title',
    content: 'Default content for the text section.',
  },
  buttonProps: {
    label: 'Click me',
    type: 'default',
    disabled: false,
  },
  logoProps: {
    src: 'lib/images/logo-one.svg',
    alt: 'Mimmit Koodaa Logo',
  }
};
