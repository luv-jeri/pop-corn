export default function Child(props) {
  const { someGoodProp, setter } = props;

  return (
    <div
      style={{
        backgroundColor: '#000',
      }}
    >
      <h1>
        From parent as a prop - {someGoodProp}
      </h1>
      <input
        type='text'
        placeholder='Enter your name'
        onChange={(e) => {
          const { value } = e.target;
          setter(value);
        }}
      />
    </div>
  );
}
