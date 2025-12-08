import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const SUBSCRIBERS_FILE = path.join(DATA_DIR, 'subscribers.json');

export interface Subscriber {
    email: string;
    subscribedAt: string;
}

// Ensure data directory exists
function ensureDataDir() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
}

// Read subscribers from file
export function getSubscribers(): Subscriber[] {
    ensureDataDir();

    if (!fs.existsSync(SUBSCRIBERS_FILE)) {
        return [];
    }

    try {
        const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading subscribers file:', error);
        return [];
    }
}

// Add a new subscriber
export function addSubscriber(email: string): { success: boolean; message: string } {
    ensureDataDir();

    const subscribers = getSubscribers();

    // Check if email already exists
    const exists = subscribers.some(sub => sub.email.toLowerCase() === email.toLowerCase());

    if (exists) {
        return { success: false, message: 'Email already subscribed' };
    }

    // Add new subscriber
    subscribers.push({
        email: email.toLowerCase(),
        subscribedAt: new Date().toISOString(),
    });

    try {
        fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
        return { success: true, message: 'Successfully subscribed!' };
    } catch (error) {
        console.error('Error writing subscribers file:', error);
        return { success: false, message: 'Failed to subscribe. Please try again.' };
    }
}

// Remove a subscriber
export function removeSubscriber(email: string): { success: boolean; message: string } {
    ensureDataDir();

    const subscribers = getSubscribers();
    const initialLength = subscribers.length;

    // Filter out the subscriber
    const updatedSubscribers = subscribers.filter(
        sub => sub.email.toLowerCase() !== email.toLowerCase()
    );

    if (updatedSubscribers.length === initialLength) {
        return { success: false, message: 'Email not found in subscriber list' };
    }

    try {
        fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(updatedSubscribers, null, 2));
        return { success: true, message: 'Successfully unsubscribed!' };
    } catch (error) {
        console.error('Error writing subscribers file:', error);
        return { success: false, message: 'Failed to unsubscribe. Please try again.' };
    }
}

// Validate email format
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
