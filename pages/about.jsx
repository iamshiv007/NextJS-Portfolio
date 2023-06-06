import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import ThemeBtn from '@/components/ThemeBtn'
import React, { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <div>
                <Navbar>
                    <Intro />
                    <ThemeBtn />
                </Navbar>
            </div>
        </Fragment>
    )
}

export default About