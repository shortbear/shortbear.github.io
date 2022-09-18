import React from 'react';
import Layout from './src/components/PageLayout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
