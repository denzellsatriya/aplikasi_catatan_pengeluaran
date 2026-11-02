import { useState } from 'react';
import Header from './components/Header';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'makan siang (Warteg Mulya)', category: 'Konsumsi', amount: 15000, date: '2026-11-01' },
    { id: 2, title: 'Isi bensin motor', category: 'Transportasi', amount: 100000, date: '2026-11-02' }
  ]);


  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { id: Date.now(), ...newExpense }]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <Header title="Aplikasi Catatan Pengeluaran Harian" />
      <ExpenseSummary expenses={expenses} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;