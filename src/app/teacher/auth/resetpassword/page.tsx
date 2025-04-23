"use client"
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const ResetPassword: React.FC = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
     const router = useRouter();

    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [validatingToken, setValidatingToken] = useState<boolean>(true);
    const [tokenValid, setTokenValid] = useState<boolean>(false);

    useEffect(() => {
        const validateToken = async () => {
        if (!token) {
            setError('Missing token.');
            setValidatingToken(false);
            return;
        }

        try {
            setValidatingToken(true);
            const response: AxiosResponse = await axios.get(
            `http://localhost:5000/auth/verifyresettoken?token=${token}`,
            { withCredentials: true }
            );
            setTokenValid(true);
        } catch (err) {
            console.error(err);
            setError('Invalid or expired token.');
            setTokenValid(false);
        } finally {
            setValidatingToken(false);
        }
        };

        validateToken();
    }, [token]);

    const handleReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        if (!password || !confirmPassword) {
        setError('Please fill out all fields.');
        return;
        }

        if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
        }

        setLoading(true);
        try {
        const response: AxiosResponse = await axios.post(
            'http://localhost:5000/auth/resetpassword',
            { token, password },
            { withCredentials: true }
        );
        setMessage('Your password has been reset successfully.');
        router.push('/teacher/auth/login');
        } catch (err) {
        console.error(err);
        setError('Reset failed. Please try again.');
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="bg-orange-50 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-orange-500 mb-2 text-center">Set New Password</h2>

            {validatingToken ? (
            <div className="text-center py-10">
                <div className="loader mx-auto border-4 border-orange-500 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
                <p className="text-sm text-gray-500 mt-2">Validating token...</p>
            </div>
            ) : !tokenValid ? (
            <p className="text-red-500 text-sm text-center">{error}</p>
            ) : (
            <>
                <p className="text-gray-500 text-sm mb-6 text-center">
                Enter your new password below to reset your account.
                </p>

                {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                {message && <p className="text-green-600 text-sm mb-4 text-center">{message}</p>}

                <form onSubmit={handleReset} className="space-y-4">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    New Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    placeholder="********"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500 text-sm"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                    </label>
                    <input
                    type="password"
                    id="confirmPassword"
                    placeholder="********"
                    value={confirmPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-orange-500 focus:ring-orange-500 text-sm"
                    required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition-colors disabled:opacity-50"
                >
                    {loading ? 'Resetting...' : 'Reset Password'}
                </button>
                </form>
            </>
            )}
        </div>
        </div>
    );
};

export default ResetPassword;
