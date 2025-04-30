<script setup lang="ts">
import Snake from './components/Snake.vue'
import { ref, onMounted, onUnmounted } from 'vue'

let command = ''
let output_data = [
  'Connecting to server...',
  'Connection successful!',
  'Updating database...',
  'Database update successful!',
  'Retrieving data...',
  'Data successfully retrieved!'
]
let output: any = ref([])
let home = ref<HTMLDivElement>()
let aboutme = ref<HTMLDivElement>()
let technologies = ref<HTMLDivElement>()
let projects = ref<HTMLDivElement>()
let navmenu = ref()
let snake = ref()
let section = ref("home")
const snakeRef = ref()

function show_navmenu() {
  if (navmenu.value) {
    navmenu.value = false
    document.documentElement.style.overflow = 'auto'
  } else {
    navmenu.value = true
    document.documentElement.style.overflow = 'hidden'
  }
}

function goToSection(text: string) {
  document.documentElement.style.overflow = 'auto'
  navmenu.value = false

  if (text.toLowerCase() == 'home') {
    window.scrollTo({ top: home.value?.offsetTop, behavior: 'smooth' })
    section.value = "home"
  } else if (text.toLowerCase() == 'aboutme') {
    window.scrollTo({ top: aboutme.value?.offsetTop, behavior: 'smooth' })
    section.value = "aboutme"
  } else if (text.toLowerCase() == 'technologies') {
    window.scrollTo({ top: technologies.value?.offsetTop, behavior: 'smooth' })
    section.value = "technologies"
  } else if (text.toLowerCase() == 'projects') {
    window.scrollTo({ top: projects.value?.offsetTop, behavior: 'smooth' })
    section.value = "projects"
  }
}

function cmd(text: string) {
  ; (<HTMLInputElement>document.getElementById('commandInput')).value = ''
  output.value = []
  window.scrollTo({ top: home.value?.offsetTop, behavior: 'smooth' })

  if (text.toLowerCase() == 'aboutme') {
    command = ''
    for (let i = 0; i < output_data.length; i++) {
      setTimeout(() => {
        output.value?.push(output_data[i])
      }, i * 100)
    }
    setTimeout(() => {
      goToSection('aboutme')

      setTimeout(() => {
        output.value = []
      }, 800)
    }, 800)
  } else if (text.toLowerCase() == 'technologies') {
    command = ''
    for (let i = 0; i < output_data.length; i++) {
      setTimeout(() => {
        output.value!.push(output_data[i])
      }, i * 100)
    }
    setTimeout(() => {
      goToSection('technologies')

      setTimeout(() => {
        output.value = []
      }, 800)
    }, 800)
  } else if (text.toLowerCase() == 'projects') {
    command = ''
    for (let i = 0; i < output_data.length; i++) {
      setTimeout(() => {
        output.value?.push(output_data[i])
      }, i * 100)
    }
    setTimeout(() => {
      goToSection('projects')

      setTimeout(() => {
        output.value = []
      }, 800)
    }, 800)
  } else if (text.toLowerCase() == 'snake') {
    command = ''
    for (let i = 0; i < output_data.length; i++) {
      setTimeout(() => {
        output.value?.push(output_data[i])
      }, i * 100)
    }
    setTimeout(() => {
      goToSection('home')

      setTimeout(() => {
        output.value = []
        snake.value = true
        console.log(Snake)
        document.documentElement.style.overflow = 'hidden'
      }, 800)
    }, 800)
  } else {
    command = ''
    output.value?.push('Command not found!')
  }
}

function quitSnake() {
  snakeRef.value?.quit
  snake.value = false
  document.documentElement.style.overflow = 'auto'
}

function onScroll() {
  const scrollPos = window.scrollY + 100

  const sectionOffsets = [
    { name: 'home', offset: home.value?.offsetTop ?? 0 },
    { name: 'aboutme', offset: aboutme.value?.offsetTop ?? 0 },
    { name: 'technologies', offset: technologies.value?.offsetTop ?? 0 },
    { name: 'projects', offset: projects.value?.offsetTop ?? 0 },
  ]

  for (let i = sectionOffsets.length - 1; i >= 0; i--) {
    if (scrollPos >= sectionOffsets[i].offset) {
      section.value = sectionOffsets[i].name
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
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
      <a @click="goToSection('home')"
        :class="['cursor-pointer', section === 'home' ? 'font-bold' : 'font-normal']">Home</a>
      <a @click="goToSection('aboutme')"
        :class="['cursor-pointer', section === 'aboutme' ? 'font-bold' : 'font-normal']">About me</a>
      <a @click="goToSection('technologies')"
        :class="['cursor-pointer', section === 'technologies' ? 'font-bold' : 'font-normal']">Technologies</a>
      <a @click="goToSection('projects')"
        :class="['cursor-pointer', section === 'projects' ? 'font-bold' : 'font-normal']">Projects</a>
    </div>
  </nav>

  <div v-if="navmenu" v-motion :initial="{ x: 100 }" :enter="{ x: 0 }"
    class="fixed inset-0 top-14 z-40 flex flex-col items-center justify-between lg:hidden">


    <div
      class="relative w-full h-full bg-black bg-opacity-70 backdrop-blur-xl flex flex-col items-center justify-center py-6 border-t border-gray-700 space-y-4 z-50">
      <a @click="goToSection('home')"
        :class="['text-2xl transition-colors text-white hover:text-gray-300', section === 'home' ? 'font-bold' : 'font-medium']">Home</a>
      <a @click="goToSection('aboutme')"
        :class="['text-2xl transition-colors text-white hover:text-gray-300', section === 'aboutme' ? 'font-bold' : 'font-medium']">About
        Me</a>
      <a @click="goToSection('technologies')"
        :class="['text-2xl transition-colors text-white hover:text-gray-300', section === 'technologies' ? 'font-bold' : 'font-medium']">Technologies</a>
      <a @click="goToSection('projects')"
        :class="['text-2xl transition-colors text-white hover:text-gray-300', section === 'projects' ? 'font-bold' : 'font-medium']">Projects</a>
    </div>
  </div>

  <div ref="home"
    class="bg-[#101010] h-[100vh] min-h-[40rem] pt-24 w-scren bg-img flex flex-col items-center font-jetbrains justify-center">
    <template v-if="!snake">
      <h1 v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :delay="200"
        class="text-white text-2xl max-w-[80vw] text-center md:text-3xl font-poppins font-semibold z-10 font-shadow">
        Hi, I'm Rafał! Front-end developer.
      </h1>

      <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }" :delay="200"
        :duration="1200"
        class="bg-[#12151a] w-[90%] md:h-[65%] h-[30rem] lg:max-w-[65%] overflow-auto rounded-lg bg-opacity-80 border-[1px] border-[#424242] border-opacity-40 p-5 z-10 backdrop-blur-md mt-10">
        <div class="flex flex-col gap-5">
          <div class="flex flex-row gap-5">
            <p class="text-white">></p>
            <input placeholder="Enter command here..." autofocus type="text" id="commandInput" v-model="command"
              @keyup.enter="cmd(command)" class="bg-transparent outline-none text-white w-full" />
          </div>
          <p class="bg-transparent outline-none text-white w-full">
            Available command:
            <span class="text-green-300">aboutme, technologies, projects, snake.</span>
          </p>
          <ul v-for="item in output">
            <li v-motion-slide-visible-once-left class="text-gray-400 pl-5">{{ item }}</li>
          </ul>
        </div>
      </div>

      <p class="text-white font-poppins pt-10 text-center text-wrap p-5" v-motion :initial="{ y: 100 }"
        :enter="{ y: 0 }">
        Enter command to terminal or scroll down!
      </p>
    </template>

    <div v-if="snake" class="flex flex-col items-center justify-center h-full">
      <div class="flex flex-col justify-center items-center w-full gap-5">
        <Snake ref="snakeRef"></Snake>
        <div
          class="flex flex-row items-center justify-between gap-5 bg-[#12151A] border-[1px] border-[#424242] border-opacity-40 lg:w-96 md:w-72 w-64 p-2 font-poppins">
          <button class="bg-[#6B4E5E] h-8 rounded-md md:px-5 px-3 font-normal text-[#d199b8]"
            @click="snakeRef?.restart()">
            Reset
          </button>
          <p class="text-white">Score: {{ snakeRef?.score }}</p>
          <button class="bg-[#462E3B] h-8 rounded-md md:px-5 px-3 font-normal text-[#c985aa]" @click="quitSnake()">
            Quit
          </button>
        </div>
        <p class="flex flex-wrap text-center text-white font-poppins px-3">
          Scrolling is blocked while playing. Quit to return to the page.
        </p>
      </div>
    </div>
  </div>

  <div ref="aboutme"
    class="bg-[#12151A] w-screen min-h-screen flex lg:flex-row flex-col items-center justify-center font-poppins px-6 py-16 lg:py-0">
    <!-- Profile Image -->
    <img v-motion-slide-visible-once-left src="./assets/pfp.png" alt="Profile picture"
      class="lg:w-80 md:w-52 w-40 rounded-lg mb-8 lg:mb-0 lg:mr-16" />

    <!-- Text Content -->
    <div class="flex flex-col lg:items-start gap-6 max-w-xl text-justify items-center">
      <h1 v-motion-slide-visible-once-bottom class="text-white lg:text-6xl text-4xl font-medium">
        About me
      </h1>

      <p v-motion-slide-visible-once-bottom class="text-gray-400 text-md lg:text-xl">
        Hey there, I'm Rafał — a front-end developer with a deep passion for technology that started back in
        elementary school. Along with building websites and user interfaces, I also enjoy experimenting with Arduino to
        create interactive hardware projects. In my spare time, I enjoy reading or going for bike rides.
      </p>

      <div class="flex flex-row gap-4">
        <a href="https://github.com/alosuri"
          class="bg-[#1f2124] text-white lg:px-8 px-4 lg:text-xl text-md py-3 rounded-lg flex flex-row gap-3 items-center"
          v-motion-slide-visible-once-left>
          <img src="./assets/github-mark-white.png" alt="" class="w-7" />
          <p>Github</p>
        </a>
        <a href="https://linkedin.com/in/rafał-suchorski-02b509353"
          class="bg-[#1f2124] text-white lg:px-8 px-4 lg:text-xl text-md py-3 rounded-lg flex flex-row gap-3 items-center"
          v-motion-slide-visible-once-left>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png" alt="" class="w-7" />
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  </div>

  <div ref="technologies"
    class="bg-[#1f2124] text-white py-16 px-4 md:px-12 font-poppins min-h-screen h-fit bg-[#1f2124] flex flex-col items-center justify-center text-center">
    <h2 class="text-4xl md:text-5xl font-medium text-center mb-6">Technologies</h2>
    <p v-motion-slide-visible-once-bottom
      class="text-white lg:text-2xl text-xl font-extralight font-poppins w-[80vw] pb-10">
      I'm constantly learning new languages and frameworks. These are technologies I love to work
      with:
    </p>

    <div class="flex flex-wrap gap-10 max-w-6xl mx-auto justify-center">
      <!-- Frontend -->
      <div v-motion-slide-visible-once-bottom
        class="bg-[#12151A] rounded-2xl p-8 border border-white/5 shadow-inner bg-gradient-to-b transition-transform hover:scale-[1.02] hover:shadow-lg hover:ring-1 ring-1 ring-white/10 hover:ring-blue-400/30">
        <h3 class="text-2xl font-semibold mb-4">🖥️ Frontend</h3>
        <div class="flex max-w-72 flex-wrap gap-3 justify-center">
          <span class="tech-pill">React</span>
          <span class="tech-pill">Vue</span>
          <span class="tech-pill">JavaScript</span>
          <span class="tech-pill">TypeScript</span>
          <span class="tech-pill">HTML</span>
          <span class="tech-pill">CSS</span>
          <span class="tech-pill">Tailwind</span>
          <span class="tech-pill">ChakraUI</span>

        </div>
      </div>

      <!-- Backend -->
      <div v-motion-slide-visible-once-bottom
        class="bg-[#12151A] rounded-2xl p-8 border border-white/5 shadow-inner bg-gradient-to-b transition-transform hover:scale-[1.02] hover:shadow-lg hover:ring-1 ring-1 ring-white/10 hover:ring-pink-400/30">
        <h3 class="text-2xl font-semibold mb-4">🧠 Backend</h3>
        <div class="flex max-w-72 flex-wrap gap-3 justify-center">
          <span class="tech-pill">Python</span>
          <span class="tech-pill">GoLang</span>
          <span class="tech-pill">C#</span>
          <span class="tech-pill">Firebase</span>
          <span class="tech-pill">Supabase</span>
        </div>
      </div>

      <!-- Tools -->
      <div v-motion-slide-visible-once-bottom
        class="bg-[#12151A] rounded-2xl p-8 border border-white/5 shadow-inner bg-gradient-to-b transition-transform hover:scale-[1.02] hover:shadow-lg hover:ring-1 ring-1 ring-white/10 hover:ring-red-400/30">
        <h3 class="text-2xl font-semibold mb-4">🧰 Tools</h3>
        <div class="flex max-w-72 flex-wrap gap-3 justify-center">
          <span class="tech-pill">Git</span>
          <span class="tech-pill">Linux</span>
          <span class="tech-pill">NixOS</span>
          <span class="tech-pill">Helix Editor</span>
        </div>
      </div>

      <!-- Design -->
      <div v-motion-slide-visible-once-bottom
        class="bg-[#12151A] rounded-2xl p-8 border border-white/5 shadow-inner bg-gradient-to-b transition-transform hover:scale-[1.02] hover:shadow-lg hover:ring-1 ring-1 ring-white/10 hover:ring-amber-400/30">
        <h3 class="text-2xl font-semibold mb-4">🎨 Design</h3>
        <div class="flex max-w-72 flex-wrap gap-3 justify-center">
          <span class="tech-pill">Figma</span>
          <span class="tech-pill">Photoshop</span>
          <span class="tech-pill">Illustrator</span>
        </div>
      </div>

      <!-- Other -->
      <div v-motion-slide-visible-once-bottom
        class="bg-[#12151A] rounded-2xl p-8 border border-white/5 shadow-inner bg-gradient-to-b transition-transform hover:scale-[1.02] hover:shadow-lg hover:ring-1 ring-1 ring-white/10 hover:ring-gray-400/30">
        <h3 class="text-2xl font-semibold mb-4">⚙️ Other</h3>
        <div class="flex max-w-72 flex-wrap gap-3 justify-center">
          <span class="tech-pill">PyQt</span>
          <span class="tech-pill">OpenGL</span>
          <span class="tech-pill">Ollama</span>
          <span class="tech-pill">ComfyUI</span>
        </div>
      </div>
    </div>
  </div>

  <div ref="projects" class="page bg-grid flex flex-col items-center justify-center font-poppins gap-10">
    <div class="flex flex-col gap-10 font-bold items-center">
      <p v-motion :visible-once="{ scale: 1, opacity: 0.5, y: 0 }" :initial="{ scale: 0, opacity: 0, y: 100 }"
        :delay="200" :duration="1200"
        class="lg:text-8xl md:text-6xl text-5xl lg:font-outline-2 font-outline-1 opacity-20">
        PROJECTS
      </p>
      <p v-motion :visible-once="{ scale: 1.2, opacity: 1, y: 0 }" :initial="{ scale: 0, opacity: 0, y: 100 }"
        :delay="200" :duration="1200" class="lg:text-9xl md:text-7xl text-5xl text-white">
        PROJECTS
      </p>
      <p v-motion :visible-once="{ scale: 1, opacity: 0.5, y: 0 }" :initial="{ scale: 0, opacity: 0, y: 100 }"
        :delay="200" :duration="1200"
        class="lg:text-8xl md:text-6xl text-5xl lg:font-outline-2 font-outline-1 opacity-20">
        PROJECTS
      </p>
    </div>
  </div>

  <div class="h-auto bg-sc flex flex-col items-center justify-center font-poppins py-10 pt-28 overflow-hidden">
    <div v-motion :visible-once="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: 100 }" :delay="200" :duration="1200"
      class="flex flex-col w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[1000px]">

      <img src="./assets/chat-screen.png" alt="Chat Website" class="rounded-t-xl shadow-md" />

      <div class="w-full bg-[#1f2124] bg-opacity-80 flex flex-col items-center justify-center rounded-b-xl py-8 p-6">
        <div class="flex flex-col md:flex-row justify-between items-center w-full gap-4 lg:mb-4 mb-0">
          <h1 class="text-white font-semibold text-2xl md:text-3xl text-center">Chat Website</h1>
          <div class="flex gap-4">
            <a class="bg-[#12151a] px-4 py-2 rounded-md flex flex-row items-center justify-center gap-3 border-[1px] border-[#424242] transition-all hover:bg-[#2d353d]"
              href="https://alosuri.github.io/chatter/" target="_blank" rel="noopener noreferrer">
              <p class="text-white">Website</p>
            </a>
            <a class="bg-[#12151a] px-4 py-2 rounded-md flex flex-row items-center justify-center gap-3 border-[1px] border-[#424242] transition-all hover:bg-[#2d353d]"
              href="https://github.com/alosuri/chatter" target="_blank" rel="noopener noreferrer">
              <p class="text-white">GitHub</p>
            </a>
          </div>
        </div>

        <p class="text-gray-300 text-sm md:text-base mt-4 mb-8 text-justify">
          Real-time chat website, built with React framework and Firestore (Authentication, Cloud Firestore, Storage).
          Connect with multiple people worldwide simultaneously, featuring real-time typing. You can try it on this
          <a href="https://alosuri.github.io/chatter" class="text-blue-400 underline hover:text-blue-500">website</a> or
          check it out on
          <a href="https://github.com/alosuri/chatter" class="text-[#2dba4e] underline hover:text-[#4be163]">GitHub</a>.
        </p>

        <div class="flex flex-wrap gap-4 justify-center items-center w-full">
          <span class="tech-pill">React</span>
          <span class="tech-pill">TypeScript</span>
          <span class="tech-pill">Firebase</span>
          <span class="tech-pill">Tailwind</span>
          <span class="tech-pill">Git</span>
          <span class="tech-pill">Figma</span>
        </div>
      </div>
    </div>
  </div>

  <div class="h-auto bg-sc flex flex-col items-center justify-center font-poppins py-10 pt-28 overflow-hidden">
    <div v-motion :visible-once="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: 100 }" :delay="200" :duration="1200"
      class="flex flex-col w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[1000px]">

      <img src="./assets/weather-screen.png" alt="Chat Website" class="rounded-t-xl shadow-md" />

      <div class="w-full bg-[#1f2124] bg-opacity-80 flex flex-col items-center justify-center rounded-b-xl py-8 p-6">
        <div class="flex flex-col md:flex-row justify-between items-center w-full gap-4 lg:mb-4 mb-0">
          <h1 class="text-white font-semibold text-2xl md:text-3xl text-center">Weather Website</h1>
          <div class="flex gap-4">
            <a class="bg-[#12151a] px-4 py-2 rounded-md flex flex-row items-center justify-center gap-3 border-[1px] border-[#424242] transition-all hover:bg-[#2d353d]"
              href="https://alosuri.github.io/weather-website/" target="_blank" rel="noopener noreferrer">
              <p class="text-white">Website</p>
            </a>
            <a class="bg-[#12151a] px-4 py-2 rounded-md flex flex-row items-center justify-center gap-3 border-[1px] border-[#424242] transition-all hover:bg-[#2d353d]"
              href="https://github.com/alosuri/weather-website" target="_blank" rel="noopener noreferrer">
              <p class="text-white">GitHub</p>
            </a>
          </div>
        </div>

        <p class="text-gray-300 text-sm md:text-base mt-4 mb-8 text-justify">
          Discover the weather forecasts on my Vue.js website, powered by the Open Meteo API for
          accurate info. Get real-time updates and reliable predictions! You can try it on this
          <a href="https://alosuri.github.io/weather-website/" class="text-blue-400 underline">website</a>
          or check it out on
          <a class="text-[#2dba4e] underline" href="https://github.com/alosuri/weather-website">GitHub</a>.
        </p>

        <div class="flex flex-wrap gap-4 justify-center items-center w-full">
          <span class="tech-pill">OpenMeteo</span>
          <span class="tech-pill">JavaScript</span>
          <span class="tech-pill">Git</span>
        </div>
      </div>
    </div>
  </div>

  <div class="h-auto bg-sc flex flex-col items-center justify-center font-poppins py-10 pt-28 overflow-hidden">
    <div v-motion :visible-once="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: 100 }" :delay="200" :duration="1200"
      class="flex flex-col w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[1000px]">

      <img src="./assets/random-screen.png" alt="Chat Website" class="rounded-t-xl shadow-md" />

      <div class="w-full bg-[#1f2124] bg-opacity-80 flex flex-col items-center justify-center rounded-b-xl py-8 p-6">
        <div class="flex flex-col md:flex-row justify-between items-center w-full gap-4 lg:mb-4 mb-0">
          <h1 class="text-white font-semibold text-2xl md:text-3xl text-center">
            Random Gesture App <span class="text-gray-400 font-normal">(WIP)</span>
          </h1>
          <div class="flex gap-4">
            <a class="bg-[#12151a] px-4 py-2 rounded-md flex flex-row items-center justify-center gap-3 border-[1px] border-[#424242] transition-all hover:bg-[#2d353d]"
              href="https://github.com/alosuri/RandomGestureApp" target="_blank" rel="noopener noreferrer">
              <p class="text-white">GitHub</p>
            </a>
          </div>
        </div>

        <p class="text-gray-300 text-sm md:text-base mt-4 mb-8 text-justify">

          Python-based desktop app, powered by PyQt5, designed for displaying drawing references
          with ease. Included features: choosing random image from folder, operations on image
          (zooming, rotating, moving, making image monochrome, drawing gridlines and drawing with
          timer). The application is available on
          <a href="https://github.com/alosuri/RandomGestureApp" class="text-[#2dba4e] underline">GitHub</a>.
        </p>

        <div class="flex flex-wrap gap-4 justify-center items-center w-full">
          <span class="tech-pill">Python</span>
          <span class="tech-pill">PyQt</span>
          <span class="tech-pill">Git</span>
        </div>
      </div>
    </div>
  </div>

  <div class="h-auto bg-sc flex flex-col items-center justify-center font-poppins py-10 pt-28 overflow-hidden">
    <div v-motion :visible-once="{ opacity: 1, y: 0 }" :initial="{ opacity: 0, y: 100 }" :delay="200" :duration="1200"
      class="flex flex-col w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-[1000px]">

      <img src="./assets/open-gl.png" alt="Chat Website" class="rounded-t-xl shadow-md" />

      <div class="w-full bg-[#1f2124] bg-opacity-80 flex flex-col items-center justify-center rounded-b-xl py-8 p-6">
        <div class="flex flex-col md:flex-row justify-between items-center w-full gap-4 lg:mb-4 mb-0">
          <h1 class="text-white font-semibold text-2xl md:text-3xl text-center">
            OpenGL engine <span class="text-gray-400 font-normal">(WIP)</span>
          </h1>
          <div class="flex gap-4">
            <a class="bg-[#12151a] px-4 py-2 rounded-md flex flex-row items-center justify-center gap-3 border-[1px] border-[#424242] transition-all hover:bg-[#2d353d]"
              href="https://github.com/alosuri/go-opengl-engine" target="_blank" rel="noopener noreferrer">
              <p class="text-white">GitHub</p>
            </a>
          </div>
        </div>

        <p class="text-gray-300 text-sm md:text-base mt-4 mb-8 text-justify">

          OpenGL engine written from scratch in GoLang. The engine currently supports procedural
          terrain generation and loading of 3D models in the .obj format. It provides a basic
          framework for 3D rendering and game development. You can find its source code on
          <a href="https://github.com/alosuri/go-opengl-engine" class="text-[#2dba4e] underline">GitHub</a>.
        </p>

        <div class="flex flex-wrap gap-4 justify-center items-center w-full">
          <span class="tech-pill">GoLang</span>
          <span class="tech-pill">OpenGL</span>
          <span class="tech-pill">Git</span>
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-screen b-0 h-20 lg:h-14 bg-[#12151a] border-t-[1px] border-[#424242] border-opacity-40 flex flex-wrap items-center justify-around font-poppins">
    <p class="text-white lg:text-md text-sm font-normal">
      Designed & Built by Rafał Suchorski © 2025
    </p>
  </div>
</template>

<style scoped>
.bg {
  background-color: #101010;
}

.bg-sc {
  background-color: #12151a;
}

.bg-img {
  background-image: url('./assets/bg1.jpg');
  object-fit: cover;
}

.bg-grid {
  background-image: linear-gradient(to right, #333 1px, transparent 1px),
    linear-gradient(to bottom, #333 1px, transparent 1px);
  background-size: 100px 100px;
  background-position: center center;
  background-color: #12151a;
}

.font-outline-2 {
  -webkit-text-stroke: 2px white;
}

.font-outline-1 {
  -webkit-text-stroke: 1px white;
}

.font-shadow {
  text-shadow: 2px 2px #222;
}

.tech-pill {
  @apply bg-[#2c2f36] text-sm text-gray-200 px-3 py-1 rounded-full font-medium transition hover:bg-[#3a3d44];
}

.navmenu-button {
  padding: 10px;
  width: 200px;
  border-radius: 10px;
  text-align: center;
  background: #1b1d21;
}
</style>
