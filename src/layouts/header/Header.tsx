'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

import { usePathname } from 'next/navigation'
import React from 'react'

export const useBreadcrumbs = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  // Return null if only "Home" ("/")
  if (pathSegments.length === 0) {
    return null
  }
  const breadcrumbs = pathSegments.map((segment, index) => {
    const url = '/' + pathSegments.slice(0, index + 1).join('/')
    const title = segment.charAt(0).toUpperCase() + segment.slice(1)
    return { title, url }
  })

  return [{ title: 'Home', url: '/' }, ...breadcrumbs]
}

const BreadcrumbCustom = () => {
  const breadcrumbs = useBreadcrumbs()

  if (!breadcrumbs) return null

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLastItem = index === breadcrumbs.length - 1
          return (
            <React.Fragment key={breadcrumb.url}>
              <BreadcrumbItem className='hidden md:block'>
                <BreadcrumbLink href={breadcrumb.url}>{breadcrumb.title}</BreadcrumbLink>
              </BreadcrumbItem>
              {!isLastItem && <BreadcrumbSeparator className='hidden md:block' />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

const Header = () => {
  return (
    <header className='flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
      <div className='flex items-center gap-2'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <BreadcrumbCustom />
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header
