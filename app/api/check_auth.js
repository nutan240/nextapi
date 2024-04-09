import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ authenticated: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({ authenticated: true });
  } catch (error) {
    return res.status(401).json({ authenticated: false });
  }
}
