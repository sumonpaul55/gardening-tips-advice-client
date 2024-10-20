This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   https://github.com/sumonpaul55/gardening-tips-advice-client.git
   ```

   #npm install

# example env

- cludinay

* NEXT_PUBLIC_Cloud_Name={your cloud name}
* NEXT_PUBLIC_Api_Key={your api key}
* NEXT_PUBLIC_Api_Secret={your scret}

- NEXT_PUBLIC_UpLoad_presect=ml_gardening

* NEXT_PUBLIC_UpLoad_presect={you preset}

* NEXT_PUBLIC_Publishable_Key={publishable key o stripe}

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

Gardening Tips and Advice is a community-driven platform where users can share gardening tips, advice, and best practices. Built with Next.js and TypeScript, this platform enables users to create posts, follow others, and engage through comments, upvotes, and downvotes. The platform has different levels of user privileges, such as verified users with access to premium content, and it also provides powerful admin tools for managing users and content.

## Key Features

1. **User Authentication with JWT**:

   - Secure login and registration using JWT (JSON Web Tokens) for authentication.
   - Protected routes for normal users, verified users, and admins based on their roles.

2. **Admin and User Dashboards**:

   - **Admin Dashboard**:
     - Manage users: Admins can view, analyze, and manage all users on the platform.
     - User activity reports: Admins can analyze user activity, such as posts created, upvotes received, and followers gained.
     - User management: Admins have the ability to edit user roles (e.g., verifying users), remove users, or ban accounts if necessary.
     - Room for future reporting enhancements (e.g., weekly activity reports, most active users, etc.).
   - **User Dashboard**:
     - Users can manage their own posts, followers, and following lists.
     - View upvotes, downvotes, and interaction statistics for their own posts.

3. **Post Creation with Jodit Text Editor**:

   - Users can create rich-text posts using the Jodit editor, with support for images and formatted content.

4. **Verified and Normal User Roles**:

   - Normal users have access to basic features and free content.
   - Verified users can create **premium posts**, only accessible by other verified users.
   - Normal users see premium posts as blurred sections until they become verified.

5. **Profile Management**:

   - Two profile pages: One for viewing the public profile (showing posts, followers, and stats), and one for editing personal details.
   - Users can update their profile information, such as their bio, profile picture, and contact details.

6. **Follow System**:

   - Users can follow and be followed by others (including admins).
   - View follower and following counts, with quick access to their posts and stats.

7. **Post Interaction**:

   - Users can upvote or downvote posts, with upvotes contributing to profile verification eligibility.
   - Commenting system allows users to engage in discussions under each post, with upvote/downvote functionality on comments as well.

8. **Profile Verification through Stripe Payment**:

   - Users who receive more upvotes than downvotes can become eligible for profile verification.
   - Profile verification is completed through Stripe payments, unlocking additional privileges such as access to premium posts.

9. **Premium Post Visibility**:

   - Normal users will see premium posts as blurred sections with a call-to-action to become verified.
   - Only verified users can view the full content of premium posts.

10. **Admin-Only Category Management**:

    - Admins have exclusive access to create, edit, and delete post categories.
    - Categories help users filter and search for relevant content, making the platform more organized.

11. **User Reports and Analytics** (Admin Feature):

    - Admins can access detailed reports of user activity, including:
      - Number of posts created
      - Upvotes and downvotes received
      - Follower count and interaction metrics
    - Admins can generate reports on overall user activity trends, track engagement, and monitor platform health.
    - Admins can remove or ban users who violate platform rules or exhibit harmful behavior.

12. **Payment Integration**:
    - Secure payments through Stripe for profile verification, ensuring that the process is safe and reliable.

## Technology Stack

- **Frontend**:

  - **Next.js**: Server-side rendering and static generation for fast, optimized performance.
  - **TypeScript**: Provides type safety and improved code quality.
  - **Next UI**: A powerful UI component library for creating responsive layouts.
  - **Tailwind CSS**: Used for rapid styling and consistent, modern design.
  - **Redux Toolkit and RTK Query**: Manage global state and handle data fetching efficiently.

- **Backend**:
  - **Express.js**: The backend API responsible for handling user authentication, post creation, and payment processing.
  - **Mongoose**: Database modeling for MongoDB, managing user data, posts, and categories.
  - **JWT Authentication**: Ensures secure token-based authentication for all users.
  - **Stripe API**: Facilitates payment handling for profile verification and premium features.

#view live https://gardenigng-tips-advice.vercel.app/
