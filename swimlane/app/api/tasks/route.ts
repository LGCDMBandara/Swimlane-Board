import { NextResponse } from 'next/server';
import tasks from '../../store/task.json';

export async function GET() {
    return NextResponse.json(tasks);
}