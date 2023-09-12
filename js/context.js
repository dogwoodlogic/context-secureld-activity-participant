/*!
 * Copyright (c) 2023 Dogwood Logic, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': {
    '@protected': true,
    id: '@id',
    type: '@type',
    secureld: 'urn:secureld#',
    Activity: 'secureld:Activity',
    ActivityParticipantCredential: 'secureld:ActivityParticipantCredential',
    Individual: 'secureld:Individual',
    Instance: 'secureld:Instance',
    NonPersonEntity: 'secureld:NonPersonEntity',
    JCTDEvent: 'secureld:JctdEvent',
    OperationalDemo: 'secureld:OperationalDemo',
    RDTEDemo: 'secureld:RDTE_Demo',
    SoftwareApplication: 'secureld:SoftwareApplication',
    membership: {
      '@id': 'secureld:membership'
    },
    organization: {
      '@id': 'secureld:organization',
      '@type': '@id'
    },
    name: 'https://schema.org/name',
    description: 'https://schema.org/description',
    location: 'https://schema.org/location',
    startDate: 'https://schema.org/startDate',
    endDate: 'https://schema.org/endDate'
  }
};
