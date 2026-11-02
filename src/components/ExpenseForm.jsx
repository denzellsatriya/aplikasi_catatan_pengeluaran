import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Konsumsi');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) {
      alert('Semua field harus diisi!');
      return;
    }

    onAddExpense({
      title,
      category,
      amount: Number(amount),
      date
    });

    // Reset form
    setTitle('');
    setCategory('Konsumsi');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#e9ecef', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
      <h4>Tambah Pengeluaran Baru</h4>
      <div style={{ marginBottom: '10px' }}>
        <label>Nama Pengeluaran: </label><br />
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Contoh: Belanja Bulanan"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Kategori: </label><br />
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '8px' }}>
          <option value="Konsumsi">Konsumsi</option>
          <option value="Transportasi">Transportasi</option>
          <option value="Hiburan">Hiburan</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Nominal (Rp): </label><br />
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Contoh: 50000"
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Tanggal: </label><br />
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          style={{ width: '100%', padding: '8px' }}
        />
      </div>
      <button type="submit" style={{ background: '#007bff', color: 'white', border: 'none', padding: '10px 15px', cursor: 'pointer', borderRadius: '4px' }}>
        Tambah Item
      </button>
    </form>
  );
}

export default ExpenseForm;