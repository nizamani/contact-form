import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Simulate a delay for the API call
        const {
            firstname,
            lastname,
            email,
            comments,
            websitedesign,
            contentcreation,
            uiuxdesign,
            strategyresearch,
            appdesign,
            other,
        } = req.body; // Extract values from request body

        // simulate delay for API call
        setTimeout(() => {
            // only email is required in this form, as long as we got email, we are good
            if (!email) {
                res.status(400).json({ message: 'Email is required' });    
            }

            // on sucess, we are just returning user's input data. Later we will store these inputs in database
            res.status(200).json({
                success: true,
                data: {
                    firstname,
                    lastname,
                    email,
                    comments,
                    websitedesign,
                    contentcreation,
                    uiuxdesign,
                    strategyresearch,
                    appdesign,
                    other,
                }
            });
        }, 1000);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
