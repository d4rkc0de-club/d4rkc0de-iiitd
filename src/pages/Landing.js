import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="root@d4rkc0de:~# \"
        subtitle="Lorem Ipsum"
        image="https://www.linkpicture.com/q/home_image.jpg"
        // ctaText="Lorem Ipsum"
        // ctaLink="#"
      />
    </LandingLayout>
  );
}
