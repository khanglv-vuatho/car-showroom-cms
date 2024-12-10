'use client'

import { AudioWaveform, Bot, Command, GalleryVerticalEnd, SquareTerminal } from 'lucide-react'

import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import Image from 'next/image'

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
  },
  teams: [
    {
      name: 'Kia Long An',
      logo: GalleryVerticalEnd,
      plan: 'Huy'
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup'
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free'
    }
  ],
  navMain: [
    {
      title: 'Car',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'All car',
          url: '#'
        },
        {
          title: 'Create car',
          url: '#'
        }
      ]
    },
    {
      title: 'Blogs',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'All blogs',
          url: '#'
        },
        {
          title: 'Create blog',
          url: '#'
        }
      ]
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <div className='flex items-center justify-center'>
          <div className='w-[80px]'>
            <Image src={'/sidebar/logo.png'} alt={'logo'} width={160} height={160} className='size-full object-cover' />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
