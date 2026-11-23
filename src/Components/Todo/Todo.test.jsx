
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { SettingsProvider } from '../../Context/SettingsContext';
import Todo from '.';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/SettingsContext';

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

  test('provides the default context settings', () => {
    function TestSettings() {
      const { itemsPerPage, hideCompleted, sortWord } =
        useContext(SettingsContext);
  
      return (
        <div>
          <span data-testid="items-per-page">{itemsPerPage}</span>
          <span data-testid="hide-completed">{String(hideCompleted)}</span>
          <span data-testid="sort-word">{sortWord}</span>
        </div>
      );
    }
  
    render(
      <SettingsProvider>
        <TestSettings />
      </SettingsProvider>
    );
  
    expect(screen.getByTestId('items-per-page')).toHaveTextContent('3');
    expect(screen.getByTestId('hide-completed')).toHaveTextContent('true');
    expect(screen.getByTestId('sort-word')).toHaveTextContent('difficulty');
  });

});
