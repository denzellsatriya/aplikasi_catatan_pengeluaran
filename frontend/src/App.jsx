import { useState } from 'react';
import Header from './components/Header';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'makan siang (Warteg Mulya)', category: 'Konsumsi', amount: 15000, date: '2026-11-01' },
    { id: 2, title: 'isi bensin motor', category: 'Transportasi', amount: 100000, date: '2026-11-02' }
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { id: Date.now(), ...newExpense }]);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#181818', 
      color: '#e0e0e0', 
      padding: '20px 10px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        <Header title="Aplikasi Catatan Pengeluaran Harian" />
        <ExpenseSummary expenses={expenses} />
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;