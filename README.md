This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   https://github.com/sumonpaul55/gardening-tips-advice-client.git
   ```
   #npm install
   example env

# cludinay

NEXT_PUBLIC_Cloud_Name={your cloud name}
NEXT_PUBLIC_Api_Key={your api key}
NEXT_PUBLIC_Api_Secret={your scret}

# NEXT_PUBLIC_UpLoad_presect=ml_gardening

NEXT_PUBLIC_UpLoad_presect={you preset}

NEXT_PUBLIC_Publishable_Key={publishable key o stripe}

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

# Gardening Tips and Advice

Gardening Tips and Advice is a community-driven platform where users can share tips, advice, and best practices for gardening. Built with Next.js and TypeScript, this platform allows users to engage with others by creating posts, following users, and participating in discussions through upvotes, downvotes, and comments. The platform includes features for normal users and verified users, with premium content accessible only to verified members.

## Key Features

1. **Authentication with JWT**:

   - Secure login and registration using JWT (JSON Web Tokens) for authentication.
   - Protected routes for both admin and normal users based on their roles.

2. **Admin and User Dashboards**:

   - Admin dashboard to manage categories, users, and content moderation.
   - User dashboard to manage posts, followers, and profile settings.

3. **Post Creation with Jodit Text Editor**:

   - Users can create and format rich content posts using the Jodit text editor.
   - Posts can include text, images, and other media for a full blogging experience.

4. **Verified and Normal User Roles**:

   - Two types of users: Normal and Verified.
   - Verified users can publish **premium posts** that are only visible to other verified users.
   - Normal users will see a blurred preview of premium posts but cannot access the content.

5. **Profile Management**:

   - **Two types of profile pages**:
     1. User profile page to view personal posts, followers, and followings.
     2. Profile settings page to update user information, including bio, profile picture, and contact details.
   - Users can update all personal information from the profile page.

6. **Follow System**:

   - Users can follow other users, including admins, to stay updated on their posts.
   - Profiles display a total count of followers, following, total upvotes, and total downvotes.

7. **Post Interaction (Upvote, Downvote, Comments)**:

   - Users can interact with posts by upvoting or downvoting them.
   - Commenting is enabled on posts, with users able to upvote or downvote individual comments.

8. **Profile Verification through Stripe Payment**:

   - If a post receives more upvotes than downvotes, the user becomes eligible for profile verification.
   - Users can verify their profile after making a payment through Stripe.

9. **Premium Post Visibility**:

   - Normal users will see premium posts as blurred sections.
   - Only verified users can view the full content of premium posts.

10. **Category Management (Admin Only)**:
    - Only admin users have the ability to create, update, or delete categories.
    - Categories help organize content and enhance the search and filter experience for users.

## Technology Stack

- **Frontend**:

  - **Next.js**: Server-side rendering, static site generation, and optimized performance.
  - **TypeScript**: Type safety for better development experience and fewer errors.
  - **Next UI**: Elegant UI components with minimal configuration.
  - **Tailwind CSS**: For responsive and modern design.
  - **Redux Toolkit and RTK Query**: Advanced state management and efficient data fetching.

- **Backend**:
  - **Express.js**: Backend API for user management, post creation, and payment integration.
  - **Mongoose**: MongoDB object modeling for database operations.
  - **Stripe API**: Payment gateway for handling profile verification transactions.
  - **JWT Authentication**: Secure token-based authentication for users and admin roles.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Stripe Account for payment integration

#view live https://gardenigng-tips-advice.vercel.app/
