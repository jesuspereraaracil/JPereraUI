import React from 'react';
import { render } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('TextInput', () => {
    test('Should render correctly', () => {
        const { container } = render(<TextInput error={true} />)
        expect(container).toMatchSnapshot();
    })
})
