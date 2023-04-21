export const Layout = ({ children }) => {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Phonebook</h1>
      {children}
    </main>
  );
};
