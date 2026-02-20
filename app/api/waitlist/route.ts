import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return NextResponse.json(
                { message: 'Invalid email address' },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db('capsona');
        const collection = db.collection('waitlist');

        // Check if email already exists
        const existingEntry = await collection.findOne({ email });

        if (existingEntry) {
            return NextResponse.json(
                { message: 'Email is already on the waitlist' },
                { status: 409 }
            );
        }

        // Insert new entry
        await collection.insertOne({
            email,
            createdAt: new Date(),
        });

        return NextResponse.json(
            { message: 'Sequence accepted. Added to waitlist.' },
            { status: 201 }
        );
    } catch (error) {
        console.error('Waitlist API Error:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
