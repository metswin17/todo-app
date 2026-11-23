
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

## Testing

Testing uses Vitest and React Testing Library.

Two automated tests currently verify:
- The Todo component renders its header.
- The Settings Provider supplies the required default values.

Completed-task filtering, pagination, and difficulty
sorting were also verified manually in the browser.

Production build verified using npm run build.

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
