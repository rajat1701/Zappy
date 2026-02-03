// src/utils/auth.js

// Save token & user after login
export function saveAuth(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

// Get token
export function getToken() {
  return localStorage.getItem("token");
}

// Get user info
export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Check if logged in
export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

// Logout user
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
