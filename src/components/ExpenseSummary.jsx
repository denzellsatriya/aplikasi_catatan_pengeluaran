function ExpenseSummary({ expenses }) {
  // Menghitung total nominal pengeluaran
  const totalAmount = expenses.reduce((sum, item) => sum + Number(item.amount), 0);

  return (
    <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>Ringkasan Keuangan</h3>
      <p>Total Transaksi: <strong>{expenses.length} item</strong></p>
      <p>Total Pengeluaran: <strong>Rp {totalAmount.toLocaleString('id-ID')}</strong></p>
    </div>
  );
}

export default ExpenseSummary;