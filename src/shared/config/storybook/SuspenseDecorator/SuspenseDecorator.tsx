import { Story } from '@storybook/react';
import React, { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
