import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import App from '../../App';

describe('Settings Component Tests', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  test('allows users to update application settings', () => {
    render(
      <MantineProvider env="test">
        <App />
      </MantineProvider>
    );

    fireEvent.change(screen.getByLabelText('Items Per Page'), {
      target: { value: '2' },
    });

    fireEvent.click(screen.getByLabelText('Show Completed Items'));

    fireEvent.click(screen.getByRole('button', {
      name: 'Save Settings',
    }));

    expect(screen.getByText('Items Per Page: 2')).toBeInTheDocument();

    expect(screen.getByText('Show Completed Items: Yes')).toBeInTheDocument();
  });

  test('saves user preferences to local storage', () => {
    render(
      <MantineProvider env="test">
        <App />
      </MantineProvider>
    );

    fireEvent.change(screen.getByLabelText('Items Per Page'), {
      target: { value: '5' },
    });

    fireEvent.click(screen.getByLabelText('Show Completed Items'));

    fireEvent.click(screen.getByRole('button', {
      name: 'Save Settings',
    }));

    const savedSettings = JSON.parse(
      localStorage.getItem('todoSettings')
    );

    expect(savedSettings).toEqual({
      itemsPerPage: 5,
      hideCompleted: false,
      sortWord: 'difficulty',
    });
  });

  test('loads saved preferences on application startup', () => {
    localStorage.setItem('todoSettings', JSON.stringify({
      itemsPerPage: 4,
      hideCompleted: false,
      sortWord: 'difficulty',
    }));

    render(
      <MantineProvider env="test">
        <App />
      </MantineProvider>
    );

    expect(screen.getByText('Items Per Page: 4')).toBeInTheDocument();

    expect(screen.getByText('Show Completed Items: Yes')).toBeInTheDocument();
  });

  test('displays the selected number of tasks per page', () => {
    render(
      <MantineProvider env="test">
        <App />
      </MantineProvider>
    );

    fireEvent.change(screen.getByLabelText('Items Per Page'), {
      target: { value: '2' },
    });

    fireEvent.click(screen.getByRole('button', {
      name: 'Save Settings',
    }));

    ['Task One', 'Task Two', 'Task Three'].forEach((task) => {
      fireEvent.change(screen.getByLabelText('To Do Item'), {
        target: { value: task },
      });

      fireEvent.change(screen.getByLabelText('Assigned To'), {
        target: { value: 'OS' },
      });

      fireEvent.click(screen.getByRole('button', {
        name: 'Add Item',
      }));
    });

    expect(screen.getByText('Task One')).toBeInTheDocument();
    expect(screen.getByText('Task Two')).toBeInTheDocument();
    expect(screen.queryByText('Task Three')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', {
      name: '2',
    }));

    expect(screen.getByText('Task Three')).toBeInTheDocument();
  });

  test('allows users to show and hide completed tasks', () => {
    render(
      <MantineProvider env="test">
        <App />
      </MantineProvider>
    );

    fireEvent.change(screen.getByLabelText('To Do Item'), {
      target: { value: 'Wash Car' },
    });

    fireEvent.change(screen.getByLabelText('Assigned To'), {
      target: { value: 'OS' },
    });

    fireEvent.click(screen.getByRole('button', {
      name: 'Add Item',
    }));

    expect(screen.getByText('Wash Car')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', {
      name: 'Complete: false',
    }));

    expect(screen.queryByText('Wash Car')).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('Show Completed Items'));

    fireEvent.click(screen.getByRole('button', {
      name: 'Save Settings',
    }));

    expect(screen.getByText('Wash Car')).toBeInTheDocument();

    expect(screen.getByRole('button', {
      name: 'Complete: true',
    })).toBeInTheDocument();
  });

});