"use client"
import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

function OTP() {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(600);
    const router = useRouter();

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [timeLeft]);

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleResend = async () => {
        setTimeLeft(600);
        setOtp(["", "", "", "", "", ""]);
        try {
            const response: AxiosResponse = await axios.get("http://localhost:5000/auth/resendotp", { withCredentials: true });
            setSuccess('OTP Resent!');
        } catch (err) {
            console.error(err);
            setError("Error resending OTP. Please try again later.");
        }
    };

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!/^[0-9]?$/.test(value)) return;

        let newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement | null;
            nextInput?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement | null;
            prevInput?.focus();
        }
    };

    const handleSubmit = async () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length !== 6) {
            setError("Please enter all digits");
            return;
        }
        setLoading(true);
        setError("");

        try {
            const response: AxiosResponse = await axios.post("http://localhost:5000/auth/verifyotp", { otp: enteredOtp }, { withCredentials: true });
            if (response.status === 200) {
            router.push('/learner');
            } else {
                setError("Invalid OTP, please try again.");
            }
        } catch (err) {
            console.error(err);
            setError("Error verifying OTP. Please try again later.");
        }

        setLoading(false);
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='border-2 border-orange-500 bg-white rounded-lg py-16 px-8 shadow-lg'>
                <div className='flex flex-col justify-center items-center p-4'>
                    <div className='flex justify-center items-center drop-shadow-lg'>
                        <a href=''>
                            <img className='w-12 h-12 object-cover md:m-1 md:mx-4 md:w-20 md:h-20' src="/assets/images/logo.png" alt='logo' />
                        </a>
                        <a href=''>
                            <h2 className='text-orange-500 text-bold font-bold text-md md:text-xl'>E-Mentor</h2>
                        </a>
                    </div>
                    <h1 className='text-black font-bold text-2xl mb-2'>OTP Verification</h1>
                    <p className='text-sm text-gray-500 mb-4'>Enter the OTP sent to your email</p>

                    <div className='flex justify-center items-center my-6'>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type='text'
                                maxLength={1}
                                value={otp[index]}
                                onChange={(e) => handleChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className='w-12 h-12 text-center text-lg rounded-lg border-2 border-orange-500 focus:ring-2 ring-orange-700 mx-1'
                            />
                        ))}
                    </div>

                    {error && <p className='text-red-500 text-sm'>{error}</p>}
                    {success && <p className='text-green-500 text-sm'>{success}</p>}

                    <p className='text-sm text-gray-500'>OTP Expires In: <span className='text-red-500 font-bold'>{formatTime(timeLeft)}</span></p>
                    <p className='text-sm text-gray-500'>Didn't receive a code?</p>

                    <button
                        onClick={handleResend}
                        className='text-sm text-orange-500 hover:underline mt-2'
                    >
                        Resend Code
                    </button>

                    <button
                        onClick={handleSubmit}
                        disabled={loading || timeLeft === 0}
                        className='border-2 border-orange-500 rounded-lg text-orange-500 font-bold text-xl w-56 h-10 mt-4 hover:bg-orange-500 hover:text-white'
                    >
                        {loading ? "Verifying..." : "Verify"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OTP;
