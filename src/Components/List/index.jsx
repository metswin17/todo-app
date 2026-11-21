
import { useContext, useState } from 'react';
import { Pagination, Card, Button } from '@mantine/core';
import { SettingsContext } from '../../Context/SettingsContext';

function List({ list, toggleComplete }) {
  const { hideCompleted, itemsPerPage, sortWord } = useContext(SettingsContext);

  const [activePage, setActivePage] = useState(1);

  const visibleItems = hideCompleted
    ? list.filter(item => !item.complete)
    : list;

    const sortedItems = [...visibleItems].sort((a, b) => {
      if (sortWord === 'difficulty') {
        return Number(a.difficulty) - Number(b.difficulty);
      }
      return 0;
    });

    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  const currentPage = Math.min(activePage, Math.max(totalPages, 1));

  const startIndex = (currentPage - 1) * itemsPerPage;

  const displayedItems = sortedItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section>
      {displayedItems.map(item => (
        <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder mb="md" maw={500}>
          <p>{item.text}</p>
          <p>Assigned to: {item.assignee}</p>
          <p>Difficulty: {item.difficulty}</p>

          <Button
  type="button"
  variant="light"
  color={item.complete ? 'green' : 'blue'}
  onClick={() => toggleComplete(item.id)}
>
  Complete: {item.complete.toString()}
</Button>

          </Card>
      ))}

      {totalPages > 1 && (
        <Pagination
          total={totalPages}
          value={currentPage}
          onChange={setActivePage}
        />
      )}
    </section>
  );
}

export default List;
