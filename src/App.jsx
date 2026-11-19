import Todo from './Components/Todo';
import { SettingsProvider } from './Context/SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <Todo />
    </SettingsProvider>
  );
}

export default App;