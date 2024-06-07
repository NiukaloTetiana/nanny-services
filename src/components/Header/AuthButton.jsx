export const AuthButton = ({ className, classLogIn, classRegistration }) => {
  return (
    <ul className={className}>
      <li>
        <button
          type="button"
          // onClick={}
          className={classLogIn}
        >
          Log In
        </button>
      </li>
      <li>
        <button
          type="button"
          // onClick={}
          className={classRegistration}
        >
          Registration
        </button>
      </li>
    </ul>
  );
};
