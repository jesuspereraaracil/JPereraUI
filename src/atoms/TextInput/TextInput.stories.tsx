import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'TextInput', component: TextInput,
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
    args: {
        error: false,
    }
};

export const Error: Story = {
    args: {
        error: true,
    }
};
