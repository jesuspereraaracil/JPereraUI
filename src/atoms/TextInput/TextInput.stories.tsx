import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/TextInput',
  component: TextInput,
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    error: false,
    disabled: false,
  },
};

export const Error: Story = {
  args: {
    error: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    error: false,
    disabled: true,
  },
};
