import ExpenseCard from './ExpenseCard';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Daftar Pengeluaran</h3>
      
      {/* 5c. Conditional Rendering jika data kosong */}
      {expenses.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#777' }}>Belum ada data pengeluaran</p>
      ) : (
        // 5a. Render list menggunakan .map() dengan key unik
        expenses.map((item) => (
          <ExpenseCard key={item.id} expense={item} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;