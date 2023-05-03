import type { Meta, StoryObj } from '@storybook/react';
import { OutlineButton } from './OutlineButton';

const meta: Meta<typeof OutlineButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/OutlineButton',
  component: OutlineButton,
};
export default meta;
type Story = StoryObj<typeof OutlineButton>;

export const Default: Story = {
  args: {
    text: 'Abracadabra',
    disabled: false,
    onClick: () => {
      console.log('CLICKED');
    },
  },
};

export const Disabled: Story = {
  args: {
    text: 'Abracadabra',
    disabled: true,
  },
};
