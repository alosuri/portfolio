<script setup lang="ts">
import Snake from './components/Snake.vue';
import TechnologyIcon from './components/TechnologyIcon.vue';
import TechnologyIconSmall from './components/TechnologyIconSmall.vue';
import { ref } from 'vue';

let command = "";
let output_data = ["Connecting to server...", "Connection successful!", "Updating database...", "Database update successful!", "Retrieving data...", "Data successfully retrieved!"];
let output : any = ref([]);
let home = ref<HTMLDivElement>();
let aboutme = ref<HTMLDivElement>();
let technologies = ref<HTMLDivElement>();
let works = ref<HTMLDivElement>();
let navmenu = ref();
let snake = ref();
const snakeRef = ref();

function show_navmenu() {
  if (navmenu.value) {
    navmenu.value = false;
    document.documentElement.style.overflow = 'auto';
  }

  else {
    navmenu.value = true;
    document.documentElement.style.overflow = 'hidden';
  }
}

function goToSection(text: string) {
  document.documentElement.style.overflow = 'auto';
  navmenu.value = false;


  if (text.toLowerCase() == "home") {
    window.scrollTo({ top: home.value?.offsetTop, behavior: "smooth" });
  }

  else if (text.toLowerCase() == "aboutme") {
    window.scrollTo({ top: aboutme.value?.offsetTop, behavior: "smooth" });
  }

  else if (text.toLowerCase() == "technologies") {
    window.scrollTo({ top: technologies.value?.offsetTop, behavior: "smooth" });
  }

  else if (text.toLowerCase() == "works") {
    window.scrollTo({ top: works.value?.offsetTop, behavior: "smooth" });
  }
}

function cmd(text: string) {
  (<HTMLInputElement>document.getElementById('commandInput')).value = "";
  output.value = [];
  window.scrollTo({ top: home.value?.offsetTop, behavior: "smooth" });

  if (text.toLowerCase() == "aboutme") {
    command = "";
    for (let i = 0; i < output_data.length; i++) {
      setTimeout(() => {
        output.value?.push(output_data[i]);
      }, i * 100)
    }
    setTimeout(() => {
      goToSection("aboutme")

      setTimeout(() => {
        output.value = [];
      }, 800);
    }, 800);
  }

  else if (text.toLowerCase() == "technologies") {
    command = "";
    for (let i = 0; i < output_data.length; i++) {
      setTimeout(() => {
        output.value!.push(output_data[i]);
      }, i * 100)
    }
    setTimeout(() => {
      goToSection("technologies");

      setTimeout(() => {
        output.value = [];
      }, 800);
    }, 800);
  }

  else if (text.toLowerCase() == "works") {
    command = "";
    for (let i = 0; i < output_data.length; i++) {
      setTimeout(() => {
        output.value?.push(output_data[i]);
      }, i * 100)
    }
    setTimeout(() => {
      goToSection("works")

      setTimeout(() => {
        output.value = [];
      }, 800);
    }, 800);
  }

  else if (text.toLowerCase() == "snake") {
    command = "";
    for (let i = 0; i < output_data.length; i++) {
      setTimeout(() => {
        output.value?.push(output_data[i]);
      }, i * 100)
    }
    setTimeout(() => {
      goToSection("home")

      setTimeout(() => {
        output.value = [];
        snake.value = true;
        console.log(Snake);
        document.documentElement.style.overflow = 'hidden';

      }, 800);
    }, 800);
    
  }

  else {
    command = "";
    output.value?.push("Command not found!");
  }
}

function quitSnake() {
  snakeRef.value?.quit;
  snake.value = false;
  document.documentElement.style.overflow = 'auto';
}

</script>

<template>
  <nav v-motion-slide-visible-once-bottom
    class="w-screen z-50 h-20 lg:h-14 bg-[#12151a] fixed xl: bg-opacity-70 border-b-[1px] border-[#424242] border-opacity-40 flex items-center justify-around font-poppins backdrop-blur-3xl">
    <p class="text-white text-xl font-light"><b class="font-semibold">RAFAŁ</b>SUCHORSKI</p>
    <div class="lg:hidden">
      <button v-on:click="show_navmenu()" class="flex items-center text-blue-600 p-3">
        <svg class="block h-4 w-4 fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>
    <div class="text-gray-300 gap-10 hidden lg:flex">
      <a @click="goToSection('home')" class="cursor-pointer">Home</a>
      <a @click="goToSection('aboutme')" class="cursor-pointer">About me</a>
      <a @click="goToSection('technologies')" class="cursor-pointer">Technologies</a>
      <a @click="goToSection('works')" class="cursor-pointer">Works</a>
    </div>
  </nav>

  <div v-if="navmenu" v-motion :initial="{ x: 100 }" :enter="{ x: 0 }"
    class="fixed lg:hidden h-[calc(100vh-5rem)] w-screen flex flex-col items-center justify-center top-20 z-40">
    <div
      class="h-[25vh] w-full bg-black bg-opacity-60 backdrop-blur-3xl flex items-center justify-center mt-30 flex-row gap-10 py-5">
      <img class="h-[16vh] rounded-lg" src="./assets/pfp.png" alt="">
      <div>
        <p class="text-white font-poppins font-normal text-xl mb-2">Rafał Suchorski</p>
        <a href="https://github.com/alosuri" class="text-gray-400 font-poppins font-normal text-xl">alosuri</a>
      </div>
    </div>
    <div
      class="h-full w-full bg-black bg-opacity-40 backdrop-blur-3xl border-t-[1px] border-[#424242] border-opacity-40 font-poppins font-normal text-2xl text-white flex flex-col gap-10 pt-5 items-center text-center">
      <a @click="goToSection('home')" class="cursor-pointer">Home</a>
      <a @click="goToSection('aboutme')" class="cursor-pointer">About me</a>
      <a @click="goToSection('technologies')" class="cursor-pointer">Technologies</a>
      <a @click="goToSection('works')" class="cursor-pointer">Works</a>
    </div>
  </div>

  <div ref="home" class="page bg-[#101010] bg-img flex flex-col items-center font-jetbrains justify-center">
      <h1 v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :delay="200"
        class="text-white text-2xl max-w-[80vw] text-center md:text-3xl font-poppins font-semibold z-10 font-shadow">Hi, I'm Rafał! Front-end & UI/UX developer.</h1>

    <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :delay="200"
      :duration="1200"
      class="bg-[#12151a] w-[90%] h-[60%] lg:w-[65%] rounded-lg bg-opacity-80 border-[1px] border-[#424242] border-opacity-40 p-5 z-10 backdrop-blur-md mt-10">
      <div v-if="!snake" class="flex flex-col gap-5">
        <div class="flex flex-row gap-5">
          <p class="text-white">></p>
          <input placeholder="Enter command here..." autofocus type="text" id="commandInput" v-model="command"
            @keyup.enter="cmd(command)" class="bg-transparent outline-none text-white w-full" />
        </div>
        <p class="bg-transparent outline-none text-white w-full">Available command: <span
            class="text-green-300">aboutme, technologies, works, snake.</span></p>
        <ul v-for="item in output">
          <li v-motion-slide-visible-once-left class="text-gray-400 pl-5">{{ item }}</li>
        </ul>
      </div>
      <div v-if="snake" class="flex flex-col items-center justify-center gap-5">
        <Snake ref="snakeRef"></Snake>
        <div class="flex flex-row items-center justify-between gap-5 bg-[#12151A] border-[1px] border-[#424242] border-opacity-40 lg:w-96 w-72 p-2 font-poppins">
            <button class="bg-[#6B4E5E] h-8 rounded-md px-5 font-normal text-[#d199b8]" @click="snakeRef?.restart()">Reset</button>
            <p class="text-white">Score: {{ snakeRef?.score }}</p>
            <button class="bg-[#462E3B] h-8 rounded-md px-5 font-normal text-[#c985aa]" @click="quitSnake()">Quit</button>
          </div>
        <p class="flex flex-wrap text-center text-gray-500 font-poppins">Scrolling is blocked while playing. Quit to return to the page.</p>
      </div>
    </div>
  </div>

  <div ref="aboutme" class="page bg-[#12151A] flex flex-col items-center justify-center font-poppins gap-10">
    <img v-motion-slide-visible-once-left src="./assets/pfp.png" alt="Profile picture" class="lg:w-80 w-48 rounded-lg">
    <div class="flex flex-col gap-2 font-bold">
      <h1 v-motion-slide-visible-once-bottom class="text-white lg:text-6xl text-4xl font-medium font-poppins">About me
      </h1>
    </div>
    <p v-motion-slide-visible-once-bottom class="lg:w-1/2 w-[80vw] text-gray-400 text-center lg:text-xl text-md">Hey
      there, I'm Rafał, a passionate front-end and UI/UX developer. My journey into this exciting realm began way back
      in elementary school. I can surely say that programming is my hobby. But hey, life's not all about coding, right?
      When I'm not immersed in lines of code, you'll often find me reading books. Choosing a favorite one is no easy
      task, but I had a lot of fun while reading “Bunny” by Mona Awad.</p>
    <a href="https://github.com/alosuri"
      class="bg-[#1f2124] text-white text-xl px-10 py-3 rounded-lg flex flex-row gap-3"
      v-motion-slide-visible-once-left>
      <img src="./assets/github-mark-white.png" alt="" class="w-8">
      <p>Github</p>
    </a>
  </div>

  <div ref="technologies"
    class="min-h-screen h-fit bg-[#1f2124] flex flex-col gap-10 items-center justify-center text-center py-10">
    <h1 v-motion-slide-visible-once-bottom class="text-white lg:text-6xl text-4xl font-medium font-poppins">Technologies
    </h1>
    <p v-motion-slide-visible-once-bottom class="text-white lg:text-2xl text-xl font-extralight font-poppins w-[80vw]">
      I'm constantly learning new
      languages and frameworks. These are technologies I love to work with:</p>

    <div  class="flex flex-col gap-5">
      <div class="flex lg:w-[70vw] w-[90vw] flex-wrap items-center justify-center rounded-xl gap-5">
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
          name="JavaScript"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png"
          name="TypeScript"></TechnologyIcon>
        <TechnologyIcon image="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" name="HTML"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/640px-CSS3_logo.svg.png"
          name="CSS"></TechnologyIcon>
        <TechnologyIcon image="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png"
          name="Python"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"
          name="C#"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          name="Vue.js"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          name="React"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/2560px-Qt_logo_2016.svg.png"
          name="PyQt"></TechnologyIcon>
        <TechnologyIcon image="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png"
          name="Firebase"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042"
          name="Tailwind"></TechnologyIcon>
        <TechnologyIcon image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" name="Git">
        </TechnologyIcon>
        <TechnologyIcon image="https://cdn.pixabay.com/photo/2021/02/03/12/35/photoshop-5977809_960_720.png"
          name="Photoshop"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png"
          name="Illustrator"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
          name="Figma"></TechnologyIcon>
        <TechnologyIcon
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neovim-mark.svg/1200px-Neovim-mark.svg.png"
          name="Neovim"></TechnologyIcon>
      </div>
    </div>

  </div>

  <div ref="works" class="page bg-grid flex flex-col items-center justify-center font-poppins gap-10">
    <div class="flex flex-col gap-10 font-bold items-center">
      <p v-motion :visible-once="{ scale: 1, opacity: 0.5, y: 0, }" :initial="{ scale: 0, opacity: 0, y: 100, }"
        :delay="200" :duration="1200" class="lg:text-8xl text-6xl font-outline-2 opacity-20">WORKS</p>
      <p v-motion :visible-once="{ scale: 1.2, opacity: 1, y: 0, }" :initial="{ scale: 0, opacity: 0, y: 100, }"
        :delay="200" :duration="1200" class="lg:text-9xl text-7xl text-white">WORKS</p>
      <p v-motion :visible-once="{ scale: 1, opacity: 0.5, y: 0, }" :initial="{ scale: 0, opacity: 0, y: 100, }"
        :delay="200" :duration="1200" class="lg:text-8xl text-6xl font-outline-2 opacity-20">WORKS</p>
    </div>
  </div>

  <div class="h-fit bg-sc flex flex-col items-center justify-center font-poppins py-10 pt-32 overflow-hidden">
    <div v-motion :visible-once="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: 100, }" :delay="200" :duration="1200"
      class="flex xl:max-w-[50vw] flex-col h-[50%] w-[80%]">
      <img src="./assets/chat-screen.png" alt="" class="rounded-t-xl">
      <div
        class="w-full h-full bg-[#1f2124] bg-opacity-70 flex items-center justify-center flex-col rounded-b-xl py-10">
        <h1 class="text-white font-normal text-3xl text-center">Chat Website</h1>
        <p class="text-gray-400 m-10 text-justify">Real-time chat website, built with Vue.js framework and Firestore
          (Authentication, Cloud Firestore, Storage). Connect with multiple people worldwide simultaneously, featuring
          real-time typing. Explore group chats for collaborative conversations.</p>
        <div class="flex flex-wrap gap-2 items-center justify-center w-[90%] overflow-hidden">
          <TechnologyIconSmall
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            name="JavaScript"></TechnologyIconSmall>
          <TechnologyIconSmall
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            name="Vue.js"></TechnologyIconSmall>
          <TechnologyIconSmall image="https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png"
            name="Firebase"></TechnologyIconSmall>
          <TechnologyIconSmall image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" name="Git">
          </TechnologyIconSmall>
          <TechnologyIconSmall
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
            name="Figma"></TechnologyIconSmall>
        </div>
      </div>
    </div>
  </div>

  <div class="h-fit bg-sc flex flex-col items-center justify-center font-poppins py-10 overflow-hidden">
    <div v-motion :visible-once="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: 100, }" :delay="200" :duration="1200"
      class="flex xl:max-w-[50vw] flex-col h-[50%] w-[80%]">
      <img src="./assets/weather-screen.png" alt="" class="rounded-t-xl">
      <div
        class="w-full h-full bg-[#1f2124] bg-opacity-70 flex items-center justify-center flex-col rounded-b-xl py-10">
        <h1 class="text-white font-normal text-3xl text-center">Weather Website</h1>
        <p class="text-gray-400 m-10 text-justify">Discover precise weather forecasts with our Vue.js-based website,
          utilizing the Open Meteo API for accuracy. Stay informed with real-time updates and reliable predictions.</p>
        <div class="flex flex-wrap gap-2 items-center justify-center w-[90%] overflow-hidden">
          <TechnologyIconSmall
            image="https://community-openhab-org.s3.dualstack.eu-central-1.amazonaws.com/original/3X/d/e/de6bed8f06b3e5a0ab03bb5d4369402988ec3d52.png"
            name="OpenMeteo"></TechnologyIconSmall>
          <TechnologyIconSmall
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            name="JavaScript"></TechnologyIconSmall>
          <TechnologyIconSmall image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" name="Git">
          </TechnologyIconSmall>
          <TechnologyIconSmall
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
            name="Figma"></TechnologyIconSmall>
        </div>
      </div>
    </div>
  </div>

  <div class="h-fit bg-sc flex flex-col items-center justify-end font-poppins overflow-hidden">
    <div v-motion :visible-once="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: 100, }" :delay="200" :duration="1200"
      class="flex xl:max-w-[50vw] flex-col h-[50%] w-[80%] pb-32 pt-10">
      <img src="./assets/random-screen.png" alt="" class="rounded-t-xl">
      <div
        class="w-full h-full bg-[#1f2124] bg-opacity-70 flex items-center justify-center flex-col rounded-b-xl py-10">
        <h1 class="text-white font-normal text-3xl text-center">Random Gesture App <span
            class="text-gray-400">(WIP)</span></h1>
        <p class="text-gray-400 m-10 text-justify">Python-based desktop app, powered by PyQt5, designed for displaying
          drawing references with ease. Included features: choosing random image from folder, operations on image
          (zooming, rotating, moving, making image monochrome, drawing gridlines), drawing with timer. </p>
        <div class="flex flex-wrap gap-2 items-center justify-center w-[90%] overflow-hidden">
          <TechnologyIconSmall image="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png"
            name="Python"></TechnologyIconSmall>
          <TechnologyIconSmall
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Qt_logo_2016.svg/2560px-Qt_logo_2016.svg.png"
            name="PyQt"></TechnologyIconSmall>
          <TechnologyIconSmall image="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" name="Git">
          </TechnologyIconSmall>
        </div>
      </div>
    </div>

    <div
      class="w-screen b-0 h-20 lg:h-14 bg-[#12151a] bg-opacity-70 border-t-[1px] border-[#424242] border-opacity-40 flex flex-wrap items-center justify-around font-poppins backdrop-blur-3xl">
      <p class="text-white lg:text-md text-sm  font-normal">Designed & Built by Rafał Suchorski © 2024</p>
    </div>
  </div>

</template>

<style scoped>
.bg {
  background-color: #101010;
}

.bg-sc {
  background-color: #12151A;
}

.bg-img {
  background-image: url("./assets/bg1.jpg");
  object-fit: cover;
}

.bg-grid {
  background-image:
    linear-gradient(to right, #333 1px, transparent 1px),
    linear-gradient(to bottom, #333 1px, transparent 1px);
  background-size: 100px 100px;
  background-position: center center;
  background-color: #12151A;
}

.font-outline-2 {
  -webkit-text-stroke: 2px white;
}

.font-shadow {
  text-shadow: 2px 2px #222;
}
</style>
