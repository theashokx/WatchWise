export const checkValidData = (email, password) => {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassword =
    /^(?=.{8,})((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    );

  if (!isEmail) {
    return "Email is Incorrect Check Once";
  }

  if (!isPassword) {
    return "Password is Incorrect Check Once";
  }

  return null;
};
