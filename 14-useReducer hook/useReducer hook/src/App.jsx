import './App.css';
import ClassBased from './Component/ClassBased';
import FunctionolComponent from './Component/FunctinolComponent'
import ProductList from './Component/products/index';
import Users from './Component/users';
import ContextButtonComponent from './Component/context-concept/button'
import ContextTextComponent from './Component/context-concept/text'
import UsedReducerExample from './Component/useReducerExample';

const dummyData = ['a', 'b', 'c', 'd']

function App() {
  return (
    <div>
      <h1>Hello This is using a vite</h1>
      {/* <ClassBased /> */}
      {/* <FunctionolComponent /> */}

      {/* <ProductList listofData={dummyData} name="Abrar Shaikh" age="21" />argument is called props in function */}
      {/* <Users/> */}
      {/* // <ContextButtonComponent />
      // <ContextTextComponent /> */}
      <UsedReducerExample />
    </div>
  );
}

export default App;
