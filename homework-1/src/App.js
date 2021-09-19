import './App.css';

// import { Flex } from '@chakra-ui/react'
import SearchInput from './components/SearchInput/';
import AddNotes from './components/AddNotes/';
import ListNotes from './components/ListNotes'

function App() {
  return (
    <div className="container">
      <SearchInput />
      <AddNotes />
      <ListNotes />
    </div>
    // <Flex align="center" justify="center" backgroundColor="#EAEAEA">
    //   <SearchInput />
    //   <AddNotes />
    // </Flex>
  );
}

export default App;