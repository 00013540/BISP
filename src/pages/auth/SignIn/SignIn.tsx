import { useState, FormEvent } from 'react';
import { Navigate, Link } from 'react-router';

import { useUser } from '@/context/user-context';
import { doSignInWithEmailAndPassword } from '@/firebase/auth.ts';

const SignIn = () => {
  const { userLoggedIn } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <div>
      {userLoggedIn && <Navigate to={'/'} replace={true} />}

      <main className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
          <div className="text-center">
            <div className="mt-2">
              <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
                Welcome Back
              </h3>
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-gray-600 font-bold">Email</label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 font-bold">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={isSigningIn}
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
            >
              {isSigningIn ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link to={'/auth/sign-up'} className="hover:underline font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
