import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Simulate a delay for the API call
        setTimeout(() => {
        res.status(200).json({ message: 'Matched successfully!' });
        }, 1000);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
