import './styles.css';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { useEffect, useReducer } from 'react';
import expenseReducer from './expenseReducer';
import ExpenseFilter from './ExpenseFilter';

// Initial state
const initialState = {
  expenses: [],
  filter: 'transport',
};

function AppExpenseTracker() {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // console.log(state);

  // Filter expenses based on current filter
  const filteredExpenses = state.expenses.filter((exp) =>
    state.filter === 'All'
      ? true
      : exp.category.toLowerCase() === state.filter.toLowerCase()
  );

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {     
      dispatch({ type: 'SET_EXPENSES', payload: JSON.parse(savedExpenses) });
    }
  }, []);

  useEffect(() => {
    if (state.expenses.length) {
      localStorage.setItem('expenses', JSON.stringify(state.expenses));
    }
  }, [state.expenses]);

  return (
    <div>
      <h1>App Expense Tracker</h1>
      <ExpenseFilter
        filter={state.filter}
        setFilter={(value) => dispatch({ type: 'SET_FILTER', payload: value })}
      />
      <ExpenseForm dispatch={dispatch} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}
export default AppExpenseTracker;
