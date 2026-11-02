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

    setTitle('');
    setCategory('Konsumsi');
    setAmount('');
    setDate('');
  };

  const inputStyle = {
    width: '100%',
    padding: '9px 12px',
    background: '#1e1e1e',
    border: '1px solid #3c3c3c',
    borderRadius: '4px',
    color: '#ffffff',
    boxSizing: 'border-box',
    outline: 'none'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '13px',
    color: '#b0b0b0'
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      background: '#252526', 
      border: '1px solid #333333', 
      padding: '18px', 
      borderRadius: '8px', 
      marginBottom: '25px',
      color: '#e0e0e0'
    }}>
      <h4 style={{ margin: '0 0 15px 0', color: '#ffffff' }}>Tambah Pengeluaran Baru</h4>
      
      <div style={{ marginBottom: '12px' }}>
        <label style={labelStyle}>Nama Pengeluaran</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Contoh: Belanja Bulanan"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={labelStyle}>Kategori</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle}>
          <option value="Konsumsi">Konsumsi</option>
          <option value="Transportasi">Transportasi</option>
          <option value="Hiburan">Hiburan</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={labelStyle}>Nominal (Rp)</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Contoh: 50000"
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>Tanggal</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          style={{ ...inputStyle, colorScheme: 'dark' }}
        />
      </div>

      <button type="submit" style={{ 
        width: '100%', 
        background: '#3a3d41', 
        color: '#ffffff', 
        border: '1px solid #555555', 
        padding: '10px', 
        borderRadius: '4px',
        fontWeight: 'bold',
        cursor: 'pointer' 
      }}>
        + Tambah Item
      </button>
    </form>
  );
}

export default ExpenseForm;