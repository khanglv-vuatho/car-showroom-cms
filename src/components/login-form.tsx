'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function LoginForm() {
  const handleLoginWithGoogle = () => {
    console.log('Login with Google')
  }

  return (
    <Card className='w-full max-w-sm shadow-lg'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-center text-2xl font-bold'>Login</CardTitle>
        <CardDescription className='text-center'>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <Button variant='outline' className='relative w-full' onClick={handleLoginWithGoogle}>
          <svg className='mr-2 h-4 w-4' aria-hidden='true' focusable='false' data-prefix='fab' data-icon='google' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488 512'>
            <path
              fill='currentColor'
              d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
            ></path>
          </svg>
          Login with Google
        </Button>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
          </div>
        </div>
        <div className='space-y-2'>
          <Button className='w-full'>Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  )
}
