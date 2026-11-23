import React, { useEffect, useState } from 'react';
import { TextInput, Slider, Button, Paper, Stack } from '@mantine/core';
import useForm from '../../hooks/form';
import List from '../List';

import { v4 as uuid } from 'uuid';

const Todo = () => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>

      <Paper shadow="sm" p="lg" radius="md" withBorder maw={500}>
  <form onSubmit={handleSubmit}>
    <Stack gap="md">

        <h2>Add To Do Item</h2>

        <TextInput
  label="To Do Item"
  name="text"
  placeholder="Item Details"
  onChange={handleChange}
/>

<TextInput
  label="Assigned To"
  name="assignee"
  placeholder="Assignee Name"
  onChange={handleChange}
/>
<div>
  <label>Difficulty</label>
  <Slider
    min={1}
    max={5}
    step={1}
    defaultValue={defaultValues.difficulty}
    onChange={handleChange}
    marks={[
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
    ]}
  />
</div>
<Button type="submit" mt="md">
  Add Item
</Button>
      </Stack>
      </form>
      </Paper>

      <List
  list={list}
  toggleComplete={toggleComplete}
/>

    </>
  );
};

export default Todo;
