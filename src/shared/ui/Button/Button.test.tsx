import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button tests:', () => {
    test('Button render with text', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Button render with class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
