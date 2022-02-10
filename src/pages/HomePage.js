import React from 'react'
import Navbar from '../components/Navbar'
import { PreNav } from '../components/PreNav'
import { FirstSection } from '../components/sections/FirstSection'
import { SecondSection } from '../components/sections/SecondSection'

const HomePage = () => {
    return (
        <div>
            <PreNav />
            <Navbar />
            <FirstSection />
            <SecondSection />
        </div>
    )
}

export default HomePage
