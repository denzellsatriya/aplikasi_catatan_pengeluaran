function Header({ title }) {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h2>{title}</h2>
      <hr />
    </header>
  );
}

export default Header;