'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'; // For routing after login/signup
import styles from "./Auth.module.scss";
import { signupUser, loginUser } from "../../functions/auth"; // Firebase auth functions

const AuthCard = (): JSX.Element => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false); // State for error messages
  const [loading, setLoading] = useState(false); // Progress bar state

  const router = useRouter(); // Router for redirecting

  const isPasswordValid = (password: string) => password.length >= 6;

  const validatePasswords = (password: string, confirmPassword: string): string | null => {
    if (!isPasswordValid(password)) {
      return "Password must be at least 6 characters.";
    }
    if (password.trim() !== confirmPassword.trim()) {
      return "Passwords do not match!";
    }
    return null;
  };

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setMessage(null);
    setIsError(false);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false); // Reset error state
    setLoading(true); // Show progress bar

    const validationMessage = validatePasswords(password, confirmPassword);
    if (validationMessage) {
      setMessage(validationMessage);
      setIsError(true);
      setLoading(false);
      return;
    }

    try {
      const signupMessage = await signupUser(username, email, password);
      setMessage(signupMessage);
      setIsError(false);
      setLoading(false); // Hide progress bar

      if (!signupMessage.includes("email-already-in-use")) {
        localStorage.setItem('userDetails', JSON.stringify({ username, email }));
        router.push(`/LandingPage`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message || "Signup failed.");
      } else {
        setMessage("An unexpected error occurred.");
      }
      setIsError(true);
      setLoading(false); // Hide progress bar
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsError(false); // Reset error state
    setLoading(true); // Show progress bar

    try {
      const loginMessage = await loginUser(email, password);
      setMessage(loginMessage.message);
      setIsError(false);
      setLoading(false); // Hide progress bar

      if (!loginMessage.message.includes("User data not found.") && !loginMessage.message.includes('error')) {
        const username = loginMessage.userDetails?.username;
        localStorage.setItem('userDetails', JSON.stringify({ username, email }));
        router.push(`/LandingPage`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message || "Login failed.");
      } else {
        setMessage("An unexpected error occurred.");
      }
      setIsError(true);
      setLoading(false); // Hide progress bar
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.formContainer}>
        {/* Show progress bar if loading */}
        {loading && <div className={styles.progressBar}></div>}

        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <h2 className={styles.title}>Login</h2>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Email</label>
              <input
                type="email"
                id="email"
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>Password</label>
              <input
                type="password"
                id="password"
                className={styles.inputField}
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>Login</button>
            <p onClick={toggleForm} className={styles.toggleLink}>
              Don`&apos;`t have an account? Sign Up
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit}>
            <h2 className={styles.title}>Sign Up</h2>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.inputLabel}>Username</label>
              <input
                type="text"
                id="username"
                className={styles.inputField}
                value={username}
                onChange={(e) => setUsername(e.target.value.trim())}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Email</label>
              <input
                type="email"
                id="email"
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>Password</label>
              <input
                type="password"
                id="password"
                className={styles.inputField}
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
                required
              />
              {password.length > 0 && !isPasswordValid(password) && (
                <p className={styles.errorText}>Password must be at least 6 characters</p>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.inputLabel}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className={styles.inputField}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value.trim())}
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>Sign Up</button>
            <p onClick={toggleForm} className={styles.toggleLink}>
              Already have an account? Login
            </p>
          </form>
        )}

        {message && (
          <div className={isError ? styles.errorMessage : styles.successMessage}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
