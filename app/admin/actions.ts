'use server';

import { cookies } from 'next/headers';

export async function login(formData: FormData) {
    const password = formData.get('password');

    if (password === 'ro...latha') {
        // Set a simple cookie to indicate the user is authenticated
        // In a real app, this should be a secure, signed JWT or session ID
        cookies().set('admin_auth', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24, // 24 hours
        });

        return { success: true };
    }

    return { success: false, error: 'Invalid password' };
}
