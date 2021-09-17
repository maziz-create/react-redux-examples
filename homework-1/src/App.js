import './App.css';

import { Flex } from '@chakra-ui/react'
import SearchInput from './components/SearchInput';

function App() {
  return (
    <Flex align="center" justify="center" backgroundColor="#EAEAEA">
      <SearchInput />
    </Flex>
  );
}

export default App;