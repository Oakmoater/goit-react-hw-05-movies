export const SearchBox = ({ queryValue, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={queryValue} />
        <button type="submit">Search</button>
    </form>
  );
};