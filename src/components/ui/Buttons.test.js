import {render, screen} from '@testing-library/react';
import {NavButton} from './Buttons';

describe('buttons', () => {
  test('nav button', () => {
    render(<NavButton>Button</NavButton>);
    expect(screen.getByText(/Button/i)).toBeEnabled();
  });
});
