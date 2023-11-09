import type { Meta, StoryObj } from '@storybook/react';
import { GhostButton } from './GhostButton';

const meta: Meta<typeof GhostButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Button/GhostButton',
  component: GhostButton,
};
export default meta;
type Story = StoryObj<typeof GhostButton>;

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
