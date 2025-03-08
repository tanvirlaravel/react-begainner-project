import './styles.css';
import { mockExpenses } from './mockExpenses';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';



function AppExpenseTracker() {
  return (
    <div>
      <h1>App Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList expenses ={mockExpenses} />
     
    </div>
  );
}
export default AppExpenseTracker;
