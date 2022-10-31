import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('bearer')

    if (!cookie) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else {
        const response = NextResponse.next()
    }
}
