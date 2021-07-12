import './App.css';
import Tabs from './Patterns/CompoundComponents/Tabs/Tabs';
import Form from './Patterns/Provider/Form';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Tabs>
        <div>
          <Tabs.Tab id="a">Provider Pattern</Tabs.Tab>
          <Tabs.Tab id="b">Hooks Store Pattern</Tabs.Tab>
        </div>


        <Tabs.TabPanel id="a">
          <Form />
        </Tabs.TabPanel>

        <Tabs.TabPanel id="b">
          <Products />
        </Tabs.TabPanel>
      </Tabs>


    </div>
  );
}

export default App;
