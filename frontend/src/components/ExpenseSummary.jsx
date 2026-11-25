function ExpenseSummary({ expenses }) {
  const totalAmount = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div style={{ 
      background: '#252526', 
      border: '1px solid #333333', 
      padding: '18px', 
      borderRadius: '8px', 
      marginBottom: '20px',
      color: '#e0e0e0'
    }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#ffffff', borderBottom: '1px solid #3a3a3a', paddingBottom: '8px' }}>
        Ringkasan Keuangan
      </h3>
      <p style={{ margin: '6px 0', fontSize: '14px' }}>
        Total Transaksi: <strong style={{ color: '#ffffff' }}>{expenses.length} item</strong>
      </p>
      <p style={{ margin: '6px 0', fontSize: '14px' }}>
        Total Pengeluaran: <strong style={{ color: '#4da6ff' }}>Rp {totalAmount.toLocaleString('id-ID')}</strong>
      </p>
    </div>
  );
}

export default ExpenseSummary;