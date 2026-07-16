"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (isLogin) {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
        setIsLoading(false);
      } else {
        router.push("/");
        router.refresh();
      }
    } else {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name, password }),
        });

        if (res.ok) {
          const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });

          if (result?.error) {
            setError(result.error);
          } else {
            router.push("/");
            router.refresh();
          }
        } else {
          setError("Something went wrong");
        }
      } catch {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.logo}>
          <svg viewBox="0 0 24 24" width="48" height="48" fill="#ff0000"><path d="M21.58 6.5A2.8 2.8 0 0 0 19.6 4.54C17.86 4.07 12 4 12 4s-5.86.07-7.6.54a2.8 2.8 0 0 0-1.98 1.96C2.07 8.24 2 12 2 12s.07 3.76.42 5.5a2.8 2.8 0 0 0 1.98 1.96C6.14 19.93 12 20 12 20s5.86-.07 7.6-.54a2.8 2.8 0 0 0 1.98-1.96C21.93 15.76 22 12 22 12s-.07-3.76-.42-5.5z"/><path fill="#fff" d="M10 15.5v-7l6 3.5-6 3.5z"/></svg>
        </div>
        <h1 className={styles.title}>{isLogin ? "Sign in" : "Create an Account"}</h1>
        <p className={styles.subtitle}>to continue to YouTube Clone</p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {!isLogin && (
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={styles.input}
              />
            </div>
          )}
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.toggleButton}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create account" : "Sign in instead"}
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : isLogin ? "Sign in" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
