import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/Chip',
  component: Chip,
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    text: 'Abracadabra',
  },
};
