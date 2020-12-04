import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {IncomeExpanses} from './components/IncomeExpanses'
import {TransactionList} from './components/transactions/TransactionList'
import {AddTransaction} from './components/transactions/AddTransaction'
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpanses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
