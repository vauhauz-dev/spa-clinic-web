import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const cookie = request.cookies.get('bearer')

    if (!cookie && !request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.endsWith('.png')) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else {
        const response = NextResponse.next()
    }
}
