
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { SettingsProvider } from '../../Context/SettingsContext';
import Todo from '.';

describe('ToDo Component Tests', () => {
  test('render a header element as expected', () => {
    render(
      <MantineProvider env="test">
        <SettingsProvider>
          <Todo />
        </SettingsProvider>
      </MantineProvider>
    );

    const header = screen.getByTestId('todo-header');
    const h1 = screen.getByTestId('todo-h1');

    expect(header).toBeInTheDocument();
    expect(h1).toHaveTextContent('To Do List: 0 items pending');
  });
});
