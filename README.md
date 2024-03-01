## **Getting Started**

First install the required packages by running:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## **Project Technologies**

Technologies used:

- Nextjs
- TailwindCSS
- shadcn UI Library
  <br />

This project uses TailwindCSS along with shadcn UI library.
The libraay is installed and configured, you just need to start using the components. <br />

### **shadcn UI Library Usage** <br />

Visit [here](https://ui.shadcn.com/) to checkout the UI Library. <br />

- Run the command in the Installation section of a component to install it.
- Read the Usage section to implement the component.

## **Commands to run before pushing code**

After you commit all your changes, run these commands and commit the changes for these commands before pushing the code to the repository.

### **First Command**

```bash
npm run format:write
```

This command formats the code properly with proper indentation and spacing so that the code is easier to read.

### **Second Command**

```bash
npm run lint:fix
```

This command displays any errors in the code. After running this command, you will get a list of errors and warnings. <br />
You can ignore the warnings, but if you get any error, it will provide the suggested fix for that error. <br />
Then, fix the error and push your code finally!

### **Third Command**

```bash
npm run typecheck
```

This command displays any issues (if present) within the code.

<br />

## **Updates**

### Previous Structure

    .
    ├── ...
    ├── app
    │   ├── supabase-provider.tsx
    │   ├── supabase-server.tsx
    │   └── api
    │       └── auth
    │           └── route.ts
    └── ...

### New Structure

#### **Files Removed**

- `app/supabase-provider.tsx`
- `app/supabase-server.tsx`
- `app/api/auth/route.ts`
- `lib/supabase-helpers.ts`

#### **Files Updated**

- `app/auth/callback/route.ts`
- `app/layout.tsx` - Removed the Supabase provider wrapper from `app/supabase-provider.tsx`
- `components/auth/auth-login.tsx`
- `app/dashboard/page.tsx` - Updated fetch calls to get user details
- `lib/supabase-helpers.ts` - Updated supabase helper function calls. Check `lib/supabase/helpers.ts` for updated calls
- `/package.json` - Added "@supabase/ssr" package. Removed "@supabase/auth-helpers-nextjs" package.

#### **Files Added**

- `components/auth/action.ts` - Contains the functions for login, logout, and signup used in `components/auth/auth-login.tsx`
- `lib/supabase/client.ts` - Contains the supabase client instance function
- `lib/supabase/server.ts` - Contains the supabase server instance function
- `lib/supabase/middleware.ts` - Contains the function for `/middleware.ts` file
- [`/middleware.ts`](/blob/main/middleware.ts) - Contains the middleware function for supabase auth

## **Learn More**

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## **Deploy on Vercel**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
