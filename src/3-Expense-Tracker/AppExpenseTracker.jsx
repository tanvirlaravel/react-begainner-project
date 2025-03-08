import './styles.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { useReducer } from 'react';
import expenseReducer from './expenseReducer';
import ExpenseFilter from './ExpenseFilter';

// Initial state
const initialState = {
  expenses: [],
  filter: 'transport',
};

function AppExpenseTracker() {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <div>
      <h1>App Expense Tracker</h1>
      <ExpenseFilter
        filter={state.filter}
        setFilter={(value) => dispatch({ type: 'SET_FILTER', payload: value })}
      />
      <ExpenseForm dispatch={dispatch} />
      <ExpenseList expenses={state.expenses} />
    </div>
  );
}
export default AppExpenseTracker;
