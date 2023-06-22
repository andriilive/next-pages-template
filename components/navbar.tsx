import { Button, Kbd, Link, Input, Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from '@nextui-org/react'

import { link as linkStyles } from '@nextui-org/theme'

import { webConfig } from 'config/web'
import NextLink from 'next/link'
import clsx from 'clsx'

import { ThemeSwitch } from 'components/theme-switch'
import { TwitterIcon, GithubIcon, DiscordIcon, HeartFilledIcon, SearchIcon } from 'components/icons'

import { Logo } from 'components/icons'

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label='Search'
			classNames={{
				inputWrapper: 'bg-default-100',
				input: 'text-sm',
			}}
			endContent={
				<Kbd className='hidden lg:inline-block' keys={['command']}>
					K
				</Kbd>
			}
			labelPlacement='outside'
			placeholder='Search...'
			startContent={<SearchIcon className='pointer-events-none flex-shrink-0 text-base text-default-400' />}
			type='search'
		/>
	)

	return (
		<NextUINavbar maxWidth='xl' position='sticky'>
			<NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
				<NavbarBrand className='max-w-fit gap-3'>
					<NextLink className='flex items-center justify-start gap-1' href='/'>
						<Logo />
						<p className='font-bold text-inherit'>ACME</p>
					</NextLink>
				</NavbarBrand>
				<div className='ml-2 hidden justify-start gap-4 lg:flex'>
					{webConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink className={clsx(linkStyles({ color: 'foreground' }), 'data-[active=true]:font-medium data-[active=true]:text-primary')} color='foreground' href={item.href}>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarContent className='flex w-full gap-3 sm:hidden' justify='end'>
				<Link isExternal href={webConfig.links.github}>
					<GithubIcon className='text-default-500' />
				</Link>
				<ThemeSwitch />
			</NavbarContent>

			<NavbarContent className='basis-1/5 sm:basis-full' justify='end'>
				<NavbarItem className='hidden gap-2 sm:flex'>
					<Link isExternal href={webConfig.links.twitter}>
						<TwitterIcon className='text-default-500' />
					</Link>
					<Link isExternal href={webConfig.links.discord}>
						<DiscordIcon className='text-default-500' />
					</Link>
					<Link isExternal href={webConfig.links.github}>
						<GithubIcon className='text-default-500' />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className='hidden sm:flex'>{searchInput}</NavbarItem>
				<NavbarItem className='hidden sm:flex'>
					<Button
						isExternal
						as={Link}
						className='bg-default-100 text-sm font-normal text-default-600'
						href={webConfig.links.sponsor}
						startIcon={<HeartFilledIcon className='text-danger' />}
						variant='flat'>
						Sponsor
					</Button>
				</NavbarItem>
				<NavbarMenuToggle className='sm:hidden' />
			</NavbarContent>
			<NavbarMenu>
				{searchInput}
				<div className='mx-4 mt-2 flex flex-col gap-2'>
					{webConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link color={index === 2 ? 'primary' : index === webConfig.navMenuItems.length - 1 ? 'danger' : 'foreground'} href='#' size='lg'>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	)
}
