import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/PasswordInput',
  component: PasswordInput,
};
export default meta;
type Story = StoryObj<typeof PasswordInput>;

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
