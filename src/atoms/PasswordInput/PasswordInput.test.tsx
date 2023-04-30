import { render } from '@testing-library/react';
import { PasswordInput } from './PasswordInput';

describe('PasswordInput', () => {
    test('Should render correctly', () => {
        const { container } = render(<PasswordInput error={true} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
