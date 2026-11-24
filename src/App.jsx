import Todo from './Components/Todo';
import { SettingsProvider } from './Context/SettingsContext';
import Settings from './Components/Settings';

function App() {
  return (
    <SettingsProvider>
      <Settings />
      <Todo />
    </SettingsProvider>
  );
}

export default App;