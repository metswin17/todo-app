import { useContext, useState, useEffect } from 'react';
import { Card, NumberInput, Switch, Button, Grid } from '@mantine/core';
import { SettingsContext } from '../../Context/SettingsContext';

function Settings() {

const { itemsPerPage, hideCompleted, sortWord, saveSettings } =
  useContext(SettingsContext);
  const [pageSize, setPageSize] = useState(itemsPerPage);
  const [hideDone, setHideDone] = useState(hideCompleted);
  
  useEffect(() => {
    setPageSize(itemsPerPage);
    setHideDone(hideCompleted);
  }, [itemsPerPage, hideCompleted]);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!Number.isInteger(pageSize) || pageSize < 1) return;
  
    saveSettings({
      itemsPerPage: pageSize,
      hideCompleted: hideDone,
      sortWord: sortWord,
    });
  };

  return (
    <section>
      <h2>Application Settings</h2>
  
      <Grid>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" withBorder>
            <h3>Update Settings</h3>
  
            <form onSubmit={handleSubmit}>
              <NumberInput
                label="Items Per Page"
                value={pageSize}
                onChange={setPageSize}
                min={1}
                allowDecimal={false}
                mb="md"
              />
  
              <Switch
                label="Show Completed Items"
                checked={!hideDone}
                onChange={(event) =>
                  setHideDone(!event.currentTarget.checked)
                }
                mb="md"
              />
  
              <Button type="submit">
                Save Settings
              </Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
  <Card shadow="sm" padding="lg" withBorder>
    <h3>Current Settings</h3>

    <p>Items Per Page: {itemsPerPage}</p>

    <p>
      Show Completed Items: {hideCompleted ? 'No' : 'Yes'}
    </p>

    <p>Sort Field: {sortWord}</p>
  </Card>
</Grid.Col>
      </Grid>
    </section>
  );
}

export default Settings;