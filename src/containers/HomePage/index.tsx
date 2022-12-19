import React from 'react'
import Navbar from '../../components/navbar'
import { PageContainer } from './styles'
import TopSection from './TopSection'

const HomePage = () => {
  return (
    <PageContainer>
        <Navbar />
        <TopSection />
    </PageContainer>
  )
}

export default HomePage