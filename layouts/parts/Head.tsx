import React from 'react'
import NextHead from 'next/head'
import { webConfig } from 'config/web'

const Head = () => {
	return (
		<NextHead>
			<title>{webConfig.name}</title>
			<meta key='title' content={webConfig.name} property='og:title' />
			<meta content={webConfig.description} property='og:description' />
			<meta content={webConfig.description} name='description' />
			<meta key='viewport' content='viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
			<link href='/favicon.ico' rel='icon' />
		</NextHead>
	)
}

export default Head
