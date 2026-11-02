function ExpenseCard({ expense }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', borderRadius: '6px', marginBottom: '10px', background: '#fff' }}>
      <h4 style={{ margin: '0 0 5px 0' }}>{expense.title}</h4>
      <p style={{ margin: '3px 0' }}>Kategori: <em>{expense.category}</em></p>
      <p style={{ margin: '3px 0' }}>Nominal: <strong>Rp {expense.amount.toLocaleString('id-ID')}</strong></p>
      <p style={{ margin: '3px 0', fontSize: '12px', color: '#666' }}>Tanggal: {expense.date}</p>
    </div>
  );
}

export default ExpenseCard;