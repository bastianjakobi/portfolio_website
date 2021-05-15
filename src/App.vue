<template>
  <div id="app">
    <header class="w-full min-h-screen bg-hero bg-top bg-cover" id="top">
      <div class="mx-auto">
        <nav class="flex justify-end items-center p-6 z-10">
          <span class="flex z-10">
            <a
              href="https://github.com/bastianjakobi"
              target="_blank"
              rel="noopener"
              class="rounded-full bg-gray-100 flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-gray-200 mr-4"
            >
              <ion-icon name="logo-github" size="large" class="text-customDarkBlue p-2"></ion-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/bastian-jakobi-ba6792186/"
              target="_blank"
              rel="noopener"
              class="rounded-full bg-gray-100 flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-gray-200"
            >
              <ion-icon
                name="logo-linkedin"
                size="large"
                class="text-customDarkBlue p-2"
              ></ion-icon>
            </a>
          </span>
        </nav>
        <div
          class=" bg-blue-100 md:bg-opacity-0 md:bg-gradient-to-r md:from-blue-50 md:via-blue-100 bg-opacity-80 min-h-screen w-full md:w-5/6 lg:w-3/4 xl:w-4/6 z-0 flex items-center absolute top-0"
        >
          <div class="pl-6 w-full md:pl-20 pr-3 md:pr-0">
            <h1 class="font-heading text-4xl sm:text-6xl xl:text-7xl text-customDarkBlue">
              Bastian Jakobi
            </h1>
            <p class="font-body text-xl mt-2 sm:text-2xl xl:text-3xl xl:pr-36">
              Javascript Entwickler mit zwei Jahren Erfahrung in den Bereichen Fullstack-Entwicklung
              und UI-Design.
            </p>
            <div class="mt-4 flex xl:mt-10">
              <a
                data-scroll
                href="#ueberMich"
                class="px-5 py-2 mr-4 rounded-md bg-customDarkBlue hover:bg-customDarkerBlue text-white text-sm lg:font-medium lg:text-lg font-body"
                >Über mich</a
              >
              <a
                data-scroll
                href="#projekte"
                class="px-5 py-2 rounded-md bg-customDarkBlue hover:bg-customDarkerBlue text-white text-sm lg:font-medium lg:text-lg font-body"
                >Projekte ansehen</a
              >
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section id="ueberMich" aria-label="Über mich" class="pt-8 pb-8 bg-blue-50">
        <div class="pl-6 md:pl-20 pr-6 md:pr-20">
          <div class="block md:flex mt-4">
            <div class="w-full md:w-3/5 font-body mb-4 mt-8 md:mb-0 md:mt-0">
              <h2 class="font-heading text-3xl sm:text-4xl text-customDarkBlue mb-4">Über mich</h2>
              <p>
                <span class="font-extrabold text-customDarkBlue text-lg"
                  >Ich bin Bastian Jakobi.</span
                ><br />
                Seit zwei Jahren studiere ich
                <a
                  href="https://www.thm.de/site/studium/unsere-studienangebote/social-media-systems-bachelor-bsc-mni-giessen.html"
                  target="_blank"
                  rel="noopener"
                  class="underline text-customDarkBlue"
                  >Social Media Systems</a
                >
                an der Technischen Hochschule Mittelhessen. Mein aktueller Studienschwerpunkt liegt
                in der Medieninformatik. Mein besonderes Interesse gilt den Bereichen Web- bzw.
                Appentwicklung und UI/UX-Design. Neben meinem Studium sammle ich im Rahmen diverser
                Projekte praktische Erfahrungen. Aktuell arbeite ich u.a. als Frontend-Entwickler in
                einem Startup.
              </p>
              <a
                href="https://bastianjakobi.com/documents/lebenslauf.pdf"
                target="_blank"
                rel="noopener"
                class="px-5 py-2 mr-4 rounded-md bg-customDarkBlue hover:bg-customDarkerBlue text-white text-sm lg:font-medium lg:text-lg font-body mt-4 mb-4 i inline-block"
                >Lebenslauf ansehen</a
              >
            </div>
            <div class="w-full md:w-2/5 flex justify-center mb-4 md:mb-0">
              <div class="rounded h-60 w-48 bg-portrait bg-top bg-cover shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Projekte" class="mt-8" id="projekte">
        <div class="pl-6 md:pl-20 pr-6 md:pr-20">
          <h2 class="font-heading text-3xl sm:text-4xl text-customDarkBlue">Projekte</h2>
          <div class="flex flex-col items-stretch mt-4 w-full">
            <div
              class=" w-11/12 md:w-7/12 flex mb-8"
              v-for="project in projects"
              v-bind:class="{ 'md:self-end': project.alignEnd == true }"
              :key="project.id"
            >
              <div class="rounded-lg h-auto w-full shadow-xl bg-blue-50 bg-opacity-80">
                <div class="p-6">
                  <h3 class="font-heading text-xl text-customDarkBlue mb-2">{{ project.name }}</h3>
                  <hr class="mb-2" />
                  <p class="font-body">
                    {{ project.description }}
                  </p>
                  <a
                    :href="project.projectUrl"
                    target="_blank"
                    rel="noopener"
                    class="px-5 py-2 mr-4 mt-4 w-full md:w-auto rounded-md text-center block md:inline-block bg-customDarkBlue hover:bg-customDarkerBlue text-white text-sm lg:font-medium lg:text-lg font-body"
                    >Projekt ansehen</a
                  >
                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener"
                    class="px-5 py-2 mt-4 rounded-md text-center block md:inline-block w-full md:w-auto bg-customDarkBlue hover:bg-customDarkerBlue text-white text-sm lg:font-medium lg:text-lg font-body"
                    >Code ansehen</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer id="footer" class="pb-8 mt-12 md:mt-0 bg-customDarkerBlue text-colors-white">
      <div class="pt-12 flex items-center justify-center">
        <div class="w-3/5 text-center flex flex-col">
          <h2 class="font-heading text-2xl">
            &copy; Bastian Jakobi {{ new Date().getFullYear() }}
          </h2>
          <span class="flex self-center mt-7">
            <a
              href="https://github.com/bastianjakobi"
              target="_blank"
              rel="noopener"
              class="rounded-full bg-gray-100 flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-gray-200 mr-4"
            >
              <ion-icon name="logo-github" size="large" class="text-customDarkBlue p-2"></ion-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/bastian-jakobi-ba6792186/"
              target="_blank"
              rel="noopener"
              class="rounded-full bg-gray-100 flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-gray-200 mr-4"
            >
              <ion-icon
                name="logo-linkedin"
                size="large"
                class="text-customDarkBlue p-2"
              ></ion-icon>
            </a>
            <a
              href="mailto:hello@bastianjakobi.com?subject=Neue%20Kontaktanfrage"
              target="_blank"
              rel="noopener"
              class="rounded-full bg-gray-100 flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-gray-200"
            >
              <ion-icon name="mail" size="large" class="text-customDarkBlue p-2"></ion-icon>
            </a>
          </span>
          <div class="mt-7 underline">
            <a
              href="https://bastianjakobi.com/documents/impressum.html"
              class="block"
              target="_blank"
              rel="noopener"
              >Impressum</a
            >
            <a
              href="https://bastianjakobi.com/documents/datenschutz.html"
              class="block"
              target="_blank"
              rel="noopener"
              >Datenschutzerklärung</a
            >
          </div>
        </div>
      </div>
    </footer>
    <transition name="fade">
      <a
        data-scroll
        href="#top"
        class="rounded-full bg-customDarkBlue flex items-center justify-center h-10 w-10 shadow-lg cursor-pointer hover:bg-customDarkerBlue fixed bottom-4 right-4"
        v-if="this.distance > 100"
      >
        <ion-icon name="chevron-up-outline" size="large" class="text-gray-50 p-2"></ion-icon>
      </a>
    </transition>
  </div>
</template>
<script>
  import * as SmoothScroll from "smooth-scroll";
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    easing: "easeInQuad",
  });

  export default {
    name: "App",
    components: {},
    data: () => {
      let distance;
      let projects = [
        {
          id: 1,
          name: "vRooms",
          description:
            "vRooms ist eine einfache Videochat App und basiert auf Vue.js, Vuetify und der Jitsi IFrame API.",
          projectUrl: "https://vrooms.netlify.app/",
          githubUrl: "https://github.com/bastianjakobi/vRooms",
          alignEnd: false,
        },
        {
          id: 2,
          name: "SimpleToDo (eines meiner ersten Projekte)",
          description:
            "SimpleToDo ist eine auf Javascript und jQuery basierende ToDo-App, die als PWA heruntergeladen werden kann.",
          projectUrl: "https://bastianjakobi-simpletodoapp.netlify.app/",
          githubUrl: "https://github.com/bastianjakobi/simpletodo",
          alignEnd: true,
        },
      ];
      return {
        projects,
        scroll,
        distance,
      };
    },
    mounted() {
      window.addEventListener("scroll", () => {
        this.distance = window.scrollY;
      });
    },
  };
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
