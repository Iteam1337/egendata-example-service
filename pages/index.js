import React from 'react'
import { Box, Typography, Button, theme } from '@smooth-ui/core-sc'

export default () => {
  return (
    <>
      <Box style={{ backgroundImage: 'url("/landing-page.jpg")', backgroundSize: 'cover', height: '100vh', width: '100vw', position: 'absolute', top: 0, zIndex: -10 }} />
      <Box
        display="flex"
        justifyContent="space-between"
      >
        <Box
          ml={100 + 'px'}
          mr={100 + 'px'} maxWidth={550}
          style={{ backgroundColor: 'white', boxShadow: '3px 3px 7px 7px rgba(0,0,0,0.1)', padding: 50 + 'px', marginTop: 50 + 'px', borderRadius: 2 + 'px' }}
        >
          <Typography variant="h1">
            Telia Customer Page
          </Typography>
          <p>Integrates with Egendata - you are in complete control</p>
          <ul style={{ listStyleType: 'circle' }}>
            <li>See and store your Telia-data</li>
            <li>Only for testing purposes</li>
          </ul>
          <Button variant="success" onClick={() => window.location.assign('/auth')} style={{ marginTop: 10 + 'px' }}>Login with Egendata</Button>
        </Box>
      </Box>
    </>
  )
}
