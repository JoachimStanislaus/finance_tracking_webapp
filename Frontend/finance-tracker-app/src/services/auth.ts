import BACKEND_URL from '../../config'

export async function register(data: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    birthday: string;
  }) {
    const response = await fetch(`${BACKEND_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Registration failed');
    }
  
    return response.json();
  }

  export async function login(data: {
    email: string;
    password: string;
  }) {
    const response = await fetch(`${BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return response.json(); // Expected to contain token or user info
  }
  
  export async function resetPassword(email: string) {
    const response = await fetch(`${BACKEND_URL}/auth/reset-password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
  
    if (!response.ok) {
      throw new Error('Reset password failed');
    }
  
    return response.json();
  }
  
  export async function logout(token: string) {
    const response = await fetch(`${BACKEND_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('Logout failed');
    }
  
    return response.json();
  }