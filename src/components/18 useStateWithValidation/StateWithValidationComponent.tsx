import useStateWithValidation from "./useStateWithValidation";

export default function StateWithValidationComponent(): JSX.Element {
  const [username, setUsername, isValid] = useStateWithValidation<string>(
    (name) => name.length > 5,
    ""
  );

  return (
    <div>
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        className="w-[120px] border-2 border-red-700"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}
