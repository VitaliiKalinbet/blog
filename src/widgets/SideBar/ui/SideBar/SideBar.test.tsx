import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('SideBar tests:', () => {
    test('SideBar rendered', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('SideBar collapsed', () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
