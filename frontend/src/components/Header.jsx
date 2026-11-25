function Header({ title }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '25px' }}>
      <h2 style={{ color: '#f0f0f0', margin: '0 0 10px 0', letterSpacing: '0.5px' }}>{title}</h2>
      <hr style={{ borderColor: '#333333' }} />
    </header>
  );
}

export default Header;