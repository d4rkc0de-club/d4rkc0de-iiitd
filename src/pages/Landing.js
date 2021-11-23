import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="D4rkc0de website"
        subtitle="Lorem Ipsum"
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Lorem Ipsum"
        ctaLink="#"
      />
    </LandingLayout>
  );
}
