import { createUser, findByUsername } from '../../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookie from 'cookie';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const user = findByUsername(username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 3600, // 1 hour expiration
        path: '/',
      })
    );

    return res.status(200).json({ message: 'Authentication successful' });
  }

  return res.status(405).end();
}
