import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Atoms/Label',
    component: Label,
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        text: 'Abracadabra',
    },
};
