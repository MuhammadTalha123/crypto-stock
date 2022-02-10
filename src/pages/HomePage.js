import React from 'react'
import Navbar from '../components/Navbar'
import { PreNav } from '../components/PreNav'
import { FirstSection } from '../components/sections/FirstSection'

const HomePage = () => {
    return (
        <div>
            <PreNav />
            <Navbar />
            <FirstSection />
        </div>
    )
}

export default HomePage
