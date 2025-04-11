import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getUserProfile } from '../lib/auth';

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        setUser(profile);
      } catch (error) {
        console.error('Failed to fetch user profile', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <div>
            <Link href="/">
              <a className="text-xl font-bold">Next.js Blog</a>
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            {user ? (
              <span>Welcome, {user.name}</span>
            ) : (
              <>
                <Link href="/auth/login">
                  <a>Login</a>
                </Link>
                <Link href="/auth/signup">
                  <a>Sign Up</a>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto py-10">{children}</main>
    </div>
  );
};

export default Layout;
