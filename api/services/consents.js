const defaultRequest = {
  scope: [
    {
      domain: process.env.CLIENT_ID,
      area: 'baseData',
      description: 'Personal information.',
      permissions: ['read', 'write'],
      purpose: 'In order for us to give you better service',
      lawfulBasis: 'CONSENT'
    },
    {
      domain: process.env.CLIENT_ID,
      area: 'experience',
      types: ['READ', 'WRITE'],
      purpose: 'In order to share your location data',
      description: 'Telia position data',
      lawfulBasis: 'CONSENT'
    },
  ]
}

const addExpiry = now => obj => durationInSeconds => Object.assign({}, obj, { expiry: Math.round(now() / 1000 + durationInSeconds) })

module.exports = {
  createDefaultRequest: addExpiry(Date.now)(defaultRequest),
  domain: process.env.CLIENT_ID,
  addExpiry // Exposed for testing purposes
}

// Kept here for future reference

/* Lawful bases:
'CONSENT',
'CONTRACT',
'LEGAL_OBLIGATION',
'VITAL_INTERESTS',
'PUBLIC_TASK',
'LEGITIMATE_INTERESTS'
*/
