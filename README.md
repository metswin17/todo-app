
# Todo App

A React task management application built with Vite, Mantine UI, and React Context.

## UML Diagram

The diagram below illustrates the component structure, shared settings, task management, and completion callbacks.

![Todo App UML Diagram](./assets/todo-uml-diagram.png)


## React Context API

The Todo App uses React Context to share application settings
with components without passing settings through multiple
levels of props.

SettingsContext.jsx provides three default settings:

- itemsPerPage: 3
- hideCompleted: true
- sortWord: difficulty

The List component uses useContext(SettingsContext) to
access these settings.

It displays three incomplete tasks per page, hides
completed tasks, and sorts tasks by difficulty.

Mantine Pagination allows users to navigate additional
pages when more than three incomplete tasks exist.

## useForm Custom Hook

The useForm hook manages the Todo form's input values.

- useState stores the form values.
- handleChange updates values when the user enters information.
- handleSubmit prevents the default form submission and
  passes the collected values to the addItem callback.
- useEffect initializes form values from defaultValues.

This keeps form-handling logic separate from the Todo
component.

## Lab 32 - Context Methods and Settings

Lab 32 extends the Todo App by allowing users to customize
application settings through a Settings component.

### Settings Editor

The Settings component is located in:

src/Components/Settings/index.jsx

The Settings editor allows users to:

- Change the number of tasks displayed per page.
- Show or hide completed tasks.
- Save application preferences.
- View the current settings alongside the settings form.

Mantine Grid, Card, NumberInput, Switch, and Button
components provide the user interface.

### Context Methods

The SettingsProvider now includes a saveSettings function
that updates the global Context values.

The List component automatically responds to changes
in the application settings without requiring a page refresh.

### Local Storage

User preferences are saved to Local Storage using
the key todoSettings.

- JSON.stringify() converts settings into a string for storage.
- localStorage.setItem() saves user preferences.
- localStorage.getItem() retrieves saved preferences.
- JSON.parse() converts saved preferences back into an object.
- useEffect() retrieves saved settings on application startup.

User preferences remain available after refreshing
or reopening the application in the same browser.

## Testing

Testing uses Vitest and React Testing Library.

Seven automated tests verify the functionality
implemented in Labs 31 and 32.

### Lab 31 Tests

- The Todo component renders its header.
- The SettingsProvider supplies the required default values.

### Lab 32 Tests

- Users can update application settings.
- User preferences are saved to Local Storage.
- Saved preferences are retrieved on application startup.
- Pagination displays the selected number of tasks per page.
- Users can show and hide completed tasks.

### Manual Browser Testing

The following functionality was verified manually:

- Creating new tasks.
- Completing tasks.
- Sorting tasks by difficulty.
- Changing the number of tasks displayed per page.
- Showing and hiding completed tasks.
- Retaining saved preferences after refreshing the browser.

### Test Results

- Test Files: 2 passed
- Total Tests: 7 passed
- Failed Tests: 0

Run automated tests using:

npm test -- --run

### Production Build

The production build was successfully verified using:

npm run build

Vite successfully compiled 931 modules without errors.

## AI Assistance

ChatGPT was used as a coding assistant during Lab 31.

Example prompts:
- "Help me implement React Context settings for my Todo App."
- "Help me test the default Context settings using React Testing Library."
- "Explain what npm run build does."

AI assistance included reviewing component relationships,
debugging, explaining React concepts, and helping create
a Context settings test.

The application was tested and verified locally.

### Lab 32 AI Assistance

ChatGPT was used as a coding and learning assistant
during the development of Lab 32.

AI assistance included:

- Extending the SettingsContext Provider.
- Implementing the Settings editor component.
- Implementing the saveSettings function.
- Saving and retrieving preferences using Local Storage.
- Explaining JSON.stringify(), JSON.parse(), and useEffect().
- Creating five additional automated tests.
- Reviewing terminal output and browser functionality.
- Updating project documentation.

Prompt topics included (paraphrased):

- Implementing a Settings editor using React Context.
- Saving and retrieving user preferences with Local Storage.
- Testing application settings with React Testing Library.
- Verifying adjustable pagination.
- Testing the visibility of completed tasks.

Implementation was completed incrementally, with each
stage reviewed and tested locally before proceeding.

All seven automated tests passed, manual browser testing
was successful, and the production build completed
without errors.


## CodeSandbox

[View Todo App in CodeSandbox](https://codesandbox.io/p/sandbox/jg3dkz)

[View Live Todo App](https://jg3dkz.csb.app/)


