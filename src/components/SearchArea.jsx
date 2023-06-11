export const SearchBox = ({ queryValue, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={queryValue} />
        <button type="submit">Search</button>
    </form>
  );
};