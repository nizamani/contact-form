# Contact Form One Page App

This is a simple contact form built using Next.js. The form allows users to submit their contact details and messages, which can then be handled by an API endpoint.

## Features

- Built with Next.js
- Uses React Hook Form for validation
- API route to handle form submissions
- Responsive design
- Styled with Tailwind CSS (optional)

## Demo

Check out the live demo: [Contact Form App](https://contactform-lime.vercel.app/)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:nizamani/contact-form.git
   cd contact-form-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Route

The form submits data to an API route (`/api/contact`). You can modify `pages/api/contact.ts` to handle submissions as needed.

Example request:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "message": "Hello, I'd like to get in touch!"
}
```

## Deployment

You can deploy the app to Vercel easily:
```bash
vercel
```

## License

This project is licensed under the MIT License.

