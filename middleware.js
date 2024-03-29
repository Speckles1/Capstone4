import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/account',
    '/categories',
    '/Chatbot',
    '/chatpage',
    '/ar',
    '/products',
    '/search',
    '/api/products',
    '/api/settings',
    '/api/address',
    '/api/wishlist',
    '/api/orders',
    '/api/reviews',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
