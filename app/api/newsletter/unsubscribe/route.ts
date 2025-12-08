import { NextResponse } from 'next/server';
import { removeSubscriber, isValidEmail } from '@/lib/newsletter';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Validate email presence
        if (!email) {
            return NextResponse.json(
                { error: '🙈 We need your email to let you go!' },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: '🤨 That doesn\'t look like a valid email.' },
                { status: 400 }
            );
        }
        // Remove subscriber
        const result = removeSubscriber(email);

        if (result.success) {
            return NextResponse.json(
                { message: '💔 Successfully unsubscribed. We\'ll miss you!' },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: '🤷‍♂️ Email not found. Already ghosted us?' },
                { status: 404 }
            );
        }

    } catch (error) {
        console.error('Newsletter unsubscribe error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
