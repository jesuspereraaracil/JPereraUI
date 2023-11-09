import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Dialog',
  component: Dialog,
};
export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    children: 'THIS IS A CHILD',
  },
};
