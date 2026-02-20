'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Lock, Loader2 } from 'lucide-react';

export function LoginForm() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('password', password);

        const result = await login(formData);

        if (result?.error) {
            setError(result.error);
            setIsLoading(false);
        } else {
            // Successful login will reload the route, allowing Server Component to see the new cookie
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 font-sans selection:bg-white selection:text-black">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl mb-6">
                        <Lock className="w-8 h-8 text-white/80" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Restricted Access</h1>
                    <p className="text-white/50 text-sm">Please authenticate to view the waitlist.</p>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute -inset-1 bg-white/5 rounded-3xl blur-xl opacity-0 group-focus-within:opacity-100 transition duration-500 pointer-events-none" />

                    <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
                        <div>
                            <Input
                                type="password"
                                placeholder="Access key"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                                className="w-full bg-black/50 border-white/10 text-white placeholder:text-white/30 h-14 text-center tracking-widest font-mono rounded-xl focus-visible:ring-1 focus-visible:ring-white/30"
                                disabled={isLoading}
                                required
                            />
                            {error && (
                                <p className="text-red-400 text-sm text-center mt-3">{error}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-14 rounded-xl bg-white text-black hover:bg-white/90 transition-all duration-300 gap-2 font-medium"
                        >
                            {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <Shield className="w-4 h-4" />
                                    Authenticate
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
