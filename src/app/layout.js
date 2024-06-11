import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";
import "./globals.css";
// import { db } from "@/lib/db";

import ProfileForm from "./components/ProfileForm";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
              <p>This p tag will only show when I am signed out</p>
            </SignedOut>

            <SignedIn>
              <UserButton />
              <p>This p tag will only show when I am signed in</p>
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
