import { NextResponse } from 'next/server';
import { addSubscriber, isValidEmail } from '@/lib/newsletter';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Validate email presence
        if (!email) {
            return NextResponse.json(
                { error: '🙈 Oops! We need your email address.' },
                { status: 400 }
            );
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: '🤨 Hmm, that doesn\'t look like a valid email.' },
                { status: 400 }
            );
        }

        // Add subscriber
        const result = addSubscriber(email);

        if (result.success) {
            return NextResponse.json(
                { message: '🎉 You\'re in! Welcome to the cool kids club.' },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: '🤔 Looks like you\'re already part of the squad!' },
                { status: 409 }
            );
        }

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
