import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

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
