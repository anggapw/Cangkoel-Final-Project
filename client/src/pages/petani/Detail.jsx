import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import tw from "twin.macro";

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-1
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const Detail = ({ roundedHeaderButton = false }) => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-300">
        <div class="bg-dark-gray w-full min-h-screen ">
          <div class="w-full max-w-6xl mx-auto px-4 py-8 flex justify-between md:flex-no-wrap flex-wrap">
            <div class="md:w-1/3 w-full">
              <header>
                <img
                  src="https://i.ibb.co/fDB3tPT/Group-1.png"
                  alt="Profile"
                  class="ml-12"
                />
                <img
                  src="https://i.ibb.co/m8479nW/Web-Developer.png"
                  alt="Logo"
                  class="mt-4 max-w-sm w-full"
                />
              </header>
              <section class="mt-16">
                <h3 class="uppercase text-white font-medium text-3xl">
                  Career Objectives
                </h3>
                <div class="h-1 bg-green w-48 my-4"></div>
                <p class="text-white">
                  I am a motivated team player and aspiring web developer with
                  great design and branding knowledge. My ultimate goal is to
                  grow my knowledge of the industry and use my conversational
                  skills to help fast-paced startup design UI/UX charismas.
                </p>
              </section>

              <section class="mt-16">
                <h3 class="uppercase text-white font-medium text-3xl">
                  Specializations
                </h3>
                <div class="h-1 bg-green w-48 my-4"></div>
                <ul class="text-white list-disc list-inside">
                  <li>Front End Design (HTML, CSS, Figma, Sass)</li>
                  <li>
                    <a href="https://tailwindcss.com" class="hover:underline">
                      TailwindCSS (♥)
                    </a>
                  </li>
                  <li>
                    Javascript ES6/*7 (Data Modelling, Debugging, Async
                    Performance)
                  </li>
                  <li>Front End Development (Vue.js, React.js, Svelte)</li>
                  <li>User Interface/User Experience</li>
                  <li>Design Thinking & Problem Solving </li>
                  <li>
                    Can develop high-performant front-end interfaces which
                    interacts with backend API
                  </li>
                </ul>
              </section>

              <section class="mt-16">
                <h3 class="uppercase text-white font-medium text-3xl">
                  Contact Info:
                </h3>
                <div class="h-1 bg-green w-48 my-4"></div>
                <div class="text-white">
                  <a
                    href="https://linkedin.com/in/justaashir"
                    class="hover:underline flex items-center"
                  >
                    <ion-icon name="logo-linkedin" class="mr-2"></ion-icon>
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/justaashir"
                    class="hover:underline flex items-center mt-1"
                  >
                    <ion-icon name="logo-twitter" class="mr-2"></ion-icon>{" "}
                    Twitter
                  </a>
                  <a
                    href="mailto:hello@justaashir.com"
                    class="hover:underline flex items-center mt-1"
                  >
                    <ion-icon name="mail" class="mr-2"></ion-icon>{" "}
                    hello@justaashir.com
                  </a>
                  <a
                    href="https://justaashir.com"
                    class="hover:underline flex items-center mt-1"
                  >
                    <ion-icon name="globe" class="mr-2"></ion-icon>{" "}
                    www.justaashir.com
                  </a>
                </div>
              </section>
            </div>
            <div class="md:w-2/4 w-full">
              <section class="mt-16 md:mt-0">
                <h3 class="uppercase text-white font-medium text-3xl">
                  Work Summary
                </h3>

                <div class="h-1 bg-green w-48 my-4"></div>
                <PrimaryLink
                  css={roundedHeaderButton && tw`rounded-full`}
                  href="/order-date"
                >
                  Book Now
                </PrimaryLink>
                <div class="mt-8">
                  <h4 class="font-medium text-green text-2xl">
                    Junior Front-end engineer
                  </h4>
                  <h5 class="text-xl text-green">
                    <a href="https://renetal.com" class="hover:underline">
                      Renetal
                    </a>{" "}
                    | <i>2019 - JULY 2020</i>
                  </h5>
                  <ul class="text-white list-disc list-inside mt-4">
                    <li> Designed high-performant UI Components </li>
                    <li> Complete SaaS app redesign using VueJs </li>
                    <li>
                      {" "}
                      Worked with an amazing remote-team from SIngapore in an
                      agile environment.
                    </li>
                  </ul>
                </div>

                <div class="mt-8">
                  <h4 class="font-medium text-green text-2xl">
                    Founder &lt; CEO
                  </h4>
                  <h5 class="text-xl text-green">
                    <a href="https://justifyagency.com" class="hover:underline">
                      Justify Agency
                    </a>{" "}
                    | <i>2020 - Present</i>
                  </h5>
                  <ul class="text-white list-disc list-inside mt-4">
                    <li>
                      {" "}
                      Meeting with clients to discuss project requirements and
                      workflow. (Includes Startups & Products){" "}
                    </li>
                    <li> Working with distributed network of freelancers </li>
                    <li>
                      {" "}
                      Complete Branding & Design System (Email, Social Media,
                      Website, Print){" "}
                    </li>
                  </ul>
                </div>
              </section>
              <section class="mt-16">
                <h3 class="uppercase text-white font-medium text-3xl">
                  Freelance &amp; Other fun stuff
                </h3>
                <div class="h-1 bg-green w-48 my-4"></div>

                <div class="mt-8">
                  <h4 class="font-medium text-green text-2xl">
                    Shopify Freelance Associate
                  </h4>
                  <p class="text-white">
                    Proud member of the shopify community, and their partner
                    program. Setting up Shopify stores and making custom themes
                    from a long time.
                  </p>
                </div>

                <div class="mt-8">
                  <h4 class="font-medium text-green text-2xl">
                    <a href="https://dev.to/justaashir" class="hover:underline">
                      DEV Community
                    </a>{" "}
                    (Volunteer & Technical Writer)
                  </h4>
                  <ul class="text-white list-disc list-inside mt-4">
                    <li>
                      Have written about Vuejs, career advice and resources...
                    </li>
                    <li> Top 500 Author (Award)</li>
                    <li> 16,000+ Followers + 150K+ Views</li>
                    <li> 5 Badges</li>
                  </ul>
                </div>
              </section>
              <section class="mt-16">
                <h3 class="uppercase text-white font-medium text-3xl">
                  Passion Projects
                </h3>
                <div class="h-1 bg-green w-48 my-4"></div>

                <div class="mt-8">
                  <h4 class="font-medium text-green text-2xl">
                    <a
                      href="https://tailwindcssuikit.com"
                      class="hover:underline"
                    >
                      Tailwind CSS Ui Kit
                    </a>
                  </h4>
                  <p class="text-white mt-2">
                    Building this, in my free time. Making modern design systems
                    and kits possible with TailwindCSS
                  </p>
                </div>

                <div class="mt-8">
                  <h4 class="font-medium text-green text-2xl">
                    <a href="https://remoteworkjar.com" class="hover:underline">
                      RemoteWorkJar
                    </a>
                  </h4>
                  <p class="text-white mt-2">
                    Remote Job Board, where the main focus is to manually screen
                    every job posted and help candidates get high-quality
                    remote-only job postings.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
