import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'
import React from 'react'

const RootPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center' >
      <Button className='cursor-pointer rounded-full' variant='secondary' color='' >
        <Loader2Icon className="animate-spin" /> loading
      </Button>
    </div>
  )
}

export default RootPage