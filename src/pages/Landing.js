import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import Events from "../components/events";

import About from "../components/about";
import Contact from "../components/contact";
import Join from "../components/join";
import Members from "../components/members";

export default function Landing() {
    return (
        <>
            <LandingLayout>
                <Hero
                    title="root@d4rkc0de:~#"
                    subtitle="A Single Vulnerability is all it takes"
                    image="https://www.linkpicture.com/q/home_image.jpg"
                />
                <About />
                <Events />
                <Members />
                <Join />
                <Contact />
            </LandingLayout>
            
        </>
    );
}
