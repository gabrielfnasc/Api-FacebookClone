test('Create User Successfully', () => {
  const user = {
    name: 'John Doe',
    email: 'john@mail.com',
    password: 12345,
  };

  expect.objectContaining({
    ...user,
    ...{ password: expect.any(Number) },
  });
});
test('Find All Users Succesfully', () => {
  const users = [
    { name: 'Tupac Shakur', email: 'tupac@mail.com', password: 12345 },
    { name: 'Michael Jackson', email: 'mike@mail.com', password: 12345 },
    { name: 'Kurt Cobain', email: 'comeasyouare@mail.com', password: 12345 },
  ];

  expect.objectContaining({
    ...users,
    ...{ password: expect.any(Number) },
  });
});
test('Create User Without Email Field', () => {
  const login = {
    email: '',
    password: 12345,
  };

  const validateMessage = 'email is required';

  expect.objectContaining({ ...login });
  expect.stringMatching(validateMessage);
});
