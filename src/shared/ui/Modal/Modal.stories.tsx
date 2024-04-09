import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from 'shared/ui/Modal/Modal';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maiores non, officia officiis optio quasi repellendus reprehenderit veritatis. Adipisci asperiores consequuntur culpa debitis delectus deserunt distinctio earum est explicabo facere illo nam neque numquam obcaecati officiis perferendis provident quidem ratione recusandae rem saepe sit sunt voluptas voluptatem, voluptates. Animi blanditiis deleniti impedit maxime nemo quae qui quia quisquam, sequi? Doloribus, earum enim fuga labore laborum, obcaecati officia provident quibusdam quod ratione saepe sed, tempore voluptas. Assumenda aut beatae commodi culpa cum deleniti deserunt dicta eum eveniet ipsum maxime nam, quibusdam reiciendis repellendus, suscipit ullam unde vel! Officia rem, sint. Culpa.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maiores non, officia officiis optio quasi repellendus reprehenderit veritatis. Adipisci asperiores consequuntur culpa debitis delectus deserunt distinctio earum est explicabo facere illo nam neque numquam obcaecati officiis perferendis provident quidem ratione recusandae rem saepe sit sunt voluptas voluptatem, voluptates. Animi blanditiis deleniti impedit maxime nemo quae qui quia quisquam, sequi? Doloribus, earum enim fuga labore laborum, obcaecati officia provident quibusdam quod ratione saepe sed, tempore voluptas. Assumenda aut beatae commodi culpa cum deleniti deserunt dicta eum eveniet ipsum maxime nam, quibusdam reiciendis repellendus, suscipit ullam unde vel! Officia rem, sint. Culpa.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
