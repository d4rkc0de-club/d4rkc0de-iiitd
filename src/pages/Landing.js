import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import Events from "../components/events";

import About from "../components/about";
import Contact from "../components/contact";
import Join from "../components/join";

export default function Landing() {
  return (
    <>
        <LandingLayout>
            <Hero
            title="root@d4rkc0de:~# \"
            subtitle="Lorem Ipsum"
            image="https://www.linkpicture.com/q/home_image.jpg"
            />
            <About />
            <Events />
            <Join />
            <Contact/>
        </LandingLayout>
    </>
  );
}
