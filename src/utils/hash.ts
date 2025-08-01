import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

export function hashCompare(
  enteredPassword: string,
  storedHash: string,
): Promise<boolean> {
  return bcrypt.compare(enteredPassword, storedHash);
}
