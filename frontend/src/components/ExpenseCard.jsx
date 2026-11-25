function ExpenseCard({ expense }) {
  return (
    <div style={{ 
      background: '#2d2d30', 
      border: '1px solid #3e3e42', 
      padding: '14px', 
      borderRadius: '6px', 
      marginBottom: '10px',
      color: '#d4d4d4'
    }}>
      <h4 style={{ margin: '0 0 6px 0', color: '#ffffff', fontSize: '16px' }}>{expense.title}</h4>
      <p style={{ margin: '4px 0', fontSize: '13px', color: '#aaaaaa' }}>
        Kategori: <span style={{ color: '#ce9178' }}>{expense.category}</span>
      </p>
      <p style={{ margin: '4px 0', fontSize: '14px' }}>
        Nominal: <strong style={{ color: '#4ec9b0' }}>Rp {expense.amount.toLocaleString('id-ID')}</strong>
      </p>
      <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#777777' }}>
        Tanggal: {expense.date}
      </p>
    </div>
  );
}

export default ExpenseCard;