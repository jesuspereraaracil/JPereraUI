import type { Meta, StoryObj } from '@storybook/react';
import { RangeInput } from './RangeInput';

const meta: Meta<typeof RangeInput> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/RangeInput',
  component: RangeInput,
};
export default meta;
type Story = StoryObj<typeof RangeInput>;

export const Default: Story = {
  args: {},
};
