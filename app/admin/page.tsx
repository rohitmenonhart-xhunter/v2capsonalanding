import clientPromise from '@/lib/mongodb';
import { Shield } from 'lucide-react';
import { cookies } from 'next/headers';
import { LoginForm } from './LoginForm';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
    const cookieStore = cookies();
    const isAuthenticated = cookieStore.get('admin_auth')?.value === 'true';

    if (!isAuthenticated) {
        return <LoginForm />;
    }

    const client = await clientPromise;
    const db = client.db('capsona');

    // Fetch users, sorted by newest first
    const users = await db.collection('waitlist').find({}).sort({ createdAt: -1 }).toArray();

    return (
        <div className="min-h-screen bg-black text-white p-8 sm:p-12 font-sans selection:bg-white selection:text-black">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                            <Shield className="w-6 h-6 text-white/80" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">System Admin</h1>
                            <p className="text-white/50 text-sm">Waitlist Roster</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-light">{users.length}</div>
                        <div className="text-xs tracking-widest text-white/40 uppercase">Total Entries</div>
                    </div>
                </header>

                <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md relative">
                    {/* Subtle glow effect behind table */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-xs tracking-widest text-white/40 uppercase bg-white/[0.02]">
                                    <th className="px-6 py-4 font-medium">Email Address</th>
                                    <th className="px-6 py-4 font-medium text-right">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {users.length === 0 ? (
                                    <tr>
                                        <td colSpan={2} className="px-6 py-12 text-center text-white/50 font-light">
                                            No waitlist entries found.
                                        </td>
                                    </tr>
                                ) : (
                                    users.map((user) => (
                                        <tr key={user._id.toString()} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="px-6 py-4 font-light text-white/90">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 font-light text-white/50 text-right text-sm">
                                                {new Date(user.createdAt).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
