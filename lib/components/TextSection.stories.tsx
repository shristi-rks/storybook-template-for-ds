import { Meta, StoryObj } from '@storybook/react';
import TextSection from './TextSection';

const meta: Meta<typeof TextSection> = {
  component: TextSection,
};
export default meta;

type Story = StoryObj<typeof TextSection>;

export const Default: Story =  {
  args: {
    title: 'Group 5',
    content: 'Fun trying storybook for the first time',
  },
};

export const CustomText: Story =  {
  args: {
    title: 'Group 5',
    content: 'Fun trying storybook for the first time',
  },
};
