# Mogen E-Commerce

Mogen E-Commerce is a web application developed as a portfolio project to practice modern frontend development, state management, user authentication, database integration, and online payment processing.

The application provides an e-commerce experience where users can browse products, manage their shopping cart, create an account, and place orders.

**Note:** This project was developed for learning and portfolio purposes. Product data and store content may be fictional.

## Features

- **Product Catalog:** Browse products, explore categories and subcategories, filter best-selling products, and sort products by price.
- **Shopping Cart:** Add products, manage quantities, and keep cart data available between sessions. Cart data is stored locally for guests and synchronized with Supabase for authenticated users.
- **User Authentication:** Register, sign in, sign out, and reset passwords.
- **User Profile:** Manage profile information and shipping address details.
- **Order Management:** Complete the checkout process and view order history.
- **Online Payments:** Integrate Stripe Checkout through a Supabase Edge Function.
- **Contact Form:** Submit messages through the contact form.
- **Responsive Design:** Navigate the application on different screen sizes.

## Technologies

| Technology    | Purpose                                 |
| ------------- | --------------------------------------- |
| React         | Building the user interface             |
| TypeScript    | Type safety and maintainable code       |
| Vite          | Development server and build tool       |
| React Router  | Client-side navigation                  |
| Redux Toolkit | Application state management            |
| Supabase      | Database and user authentication        |
| Stripe        | Online payment processing               |
| Tailwind CSS  | Utility-first styling                   |
| Sass          | CSS organization and styling            |
| shadcn/ui     | Reusable and customizable UI components |

## Getting Started

### Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- A Supabase project
- Stripe configuration for the checkout functionality

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SofiaOribe/mogen-ecommerce.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mogen-ecommerce
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and configure your environment variables:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_APP_URL=http://localhost:4000
   VITE_LOCAL_URL=http://localhost:4000
   ```

   Replace the placeholder values with your own configuration.

5. Configure the required database tables, permissions, and Supabase Edge Functions in your Supabase project.

   The application uses Supabase for features such as authentication, shopping cart synchronization, user profiles, orders, and contact messages. The database schema must match the implementation in the repository.

6. Configure Stripe in the `create-checkout` Supabase Edge Function.

   **Security note:** Never expose your Stripe secret key in frontend code or commit it to GitHub. Store it securely in the server-side environment used by the Edge Function.

### Run the Development Server

Start the local development server:

```bash
npm run dev
```

Vite is configured to use port `4000`.

## Available Scripts

The following commands should be checked against the scripts defined in `package.json`:

| Command                | Description                           |
| ---------------------- | ------------------------------------- |
| `npm run dev`          | Starts the development server         |
| `npm run build`        | Builds the application for production |
| `npm run preview`      | Previews the production build locally |

## Project Structure

The project follows a feature-based structure to keep related functionality organized.

```text
src/
├── app/                  # Redux store and typed hooks
├── components/           # Reusable UI components
├── features/
│   ├── auth/             # Registration, login, and password reset
│   ├── cart/             # Shopping cart and checkout
│   ├── contact/          # Contact form
│   ├── home/             # Homepage and product presentation
│   ├── profile/          # User profile and order history
│   ├── shop/             # Product catalog and product details
│   └── wishlist/         # Wishlist-related functionality
├── lib/                  # Supabase client and helper functions
├── providers/            # Authentication context
└── styles/               # Sass and CSS styles

supabase/
└── functions/
    └── create-checkout/  # Stripe Checkout integration
```

## Security Considerations

- Keep secret keys and sensitive credentials out of the frontend and Git repository.
- Use environment variables for project configuration.
- Store server-side secrets, such as the Stripe secret key, in the Supabase Edge Function environment.
- Configure appropriate Supabase Row Level Security (RLS) policies to protect user data.
- Never commit your local `.env` file.

## Author

**Sofía Oribe**

GitHub: [SofiaOribe](https://github.com/SofiaOribe)
