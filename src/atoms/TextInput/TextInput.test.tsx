import { fireEvent, render } from '@testing-library/react';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  const TEST_ID = 'TextInputID';
  const RANDOM_TEXT = 'RANDOM_TEXT';
  const EMPTY_TEXT = '';

  const setup = () => {
    return render(<TextInput data-testid={TEST_ID} />);
  };

  test('Should render correctly', () => {
    const { container } = setup();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('Should be able to write', () => {
    const { getByTestId } = setup();
    const input = getByTestId(TEST_ID);
    fireEvent.change(input, { target: { value: RANDOM_TEXT } });
    expect((input as HTMLInputElement).value).toBe(RANDOM_TEXT);
    fireEvent.change(input, { target: { value: EMPTY_TEXT } });
    expect((input as HTMLInputElement).value).toBe(EMPTY_TEXT);
  });
});
