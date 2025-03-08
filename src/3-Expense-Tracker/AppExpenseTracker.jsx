import './styles.css';
import { mockExpenses } from './mockExpenses';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { useReducer } from 'react';
import expenseReducer from './expenseReducer';

// Initial state
const initialState = {
  expenses: [],
  filter: 'All',
};

function AppExpenseTracker() {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  console.log('state', state);
  console.log( "dispatch", dispatch);
  return (
    <div>
      <h1>App Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList expenses={mockExpenses} />
    </div>
  );
}
export default AppExpenseTracker;
