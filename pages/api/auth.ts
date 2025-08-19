import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;
  const validPassword = process.env.PROTECTION_PASSWORD;

  if (password === validPassword) {
    // Set authentication cookie (expires in 24 hours)
    res.setHeader('Set-Cookie', [
      'authenticated=true; Path=/; HttpOnly; Max-Age=86400; SameSite=Strict'
    ]);
    
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ error: 'Invalid password' });
  }
}
