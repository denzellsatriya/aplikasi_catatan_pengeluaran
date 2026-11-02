import ExpenseCard from './ExpenseCard';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h3 style={{ color: '#ffffff', marginBottom: '12px' }}>Daftar Pengeluaran</h3>
      
      {expenses.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#888888', textAlign: 'center', margin: '20px 0' }}>
          Belum ada data pengeluaran
        </p>
      ) : (
        expenses.map((item) => (
          <ExpenseCard key={item.id} expense={item} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;