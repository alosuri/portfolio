<script lang="ts">
  export default {
  
  data() {
    return {
      command: "",
      output: [] as String[],
    }
  },

  methods: {
    handleScroll(event:string) {
      console.log(event)
    },

    cmd(text:string) {
      if (text.toLowerCase() == "aboutme") {
        this.output.push("Connecting to server...", "Connection successful!", "Updating database...", "Database update successful!", "Retrieving data...", "Data successfully retrieved!", );
        console.log(this.output)
      
        setTimeout(() => {
          window.scrollTo({top: (this.$refs.aboutme as any).offsetTop, behavior: "smooth"}); 
       
          setTimeout(() => {
            this.output = [];
            this.command = ""; 
          }, 300);
       }, 350);
        
      }


      else if (text.toLowerCase() == "portfolio") {
        this.output.push("Connecting to server...", "Connection successful!", "Updating database...", "Database update successful!", "Retrieving data...", "Data successfully retrieved!", );
        console.log(this.output)
      
        setTimeout(() => {
          window.scrollTo({top: (this.$refs.portfolio as any).offsetTop, behavior: "smooth"}); 
       
          setTimeout(() => {
            this.output = [];
            this.command = ""; 
          }, 300);
       }, 350);

        
      }

      else if (text.toLowerCase() == "technologies") {
        this.output.push("Connecting to server...", "Connection successful!", "Updating database...", "Database update successful!", "Retrieving data...", "Data successfully retrieved!", );
        console.log(this.output)
      
        setTimeout(() => {
          window.scrollTo({top: (this.$refs.technologies as any).offsetTop, behavior: "smooth"}); 
       
          setTimeout(() => {
            this.output = [];
            this.command = ""; 
          }, 300);
       }, 350);
      } 

    }
  },
  
}
</script>

<template>
  <!-- <div v-if="">

  </div> -->

  <div class="h-screen w-screen absolute z-0">
    <div class="w-[590px] h-[400px] bg-red-400 rounded-full absolute top-1/2 left-1/2 blur-[450px]"></div>
    <div class="w-[290px] h-[150px] bg-purple-200 rounded-full absolute top-1/4 left-3/5 blur-[250px]"></div>
    <div class="w-[290px] h-[150px] bg-pink-500 rounded-full absolute top-[120%] left-3/5 blur-[250px]"></div>
    <div class="w-[290px] h-[150px] bg-blue-400 rounded-full absolute top-[210%] right-0 blur-[250px]"></div>
    <div class="w-[490px] h-[150px] bg-purple-400 rounded-full absolute top-[260%] right-3/5 blur-[250px]"></div>
  </div>
  <div class="h-auto min-h-screen w-auto bg-gray-950 flex flex-col items-center justify-center gap-10 z-10">
    <div class="flex flex-col items-center justify-center gap-5">
      <h1 class="text-4xl sm:text-5xl text-emerald-50 font-bold">Hello, I'm Rafał!</h1>
      <h2 class="text-2xl font-thin text-emerald-50">Front-end Developer</h2>
    </div>

    <div class="w-4/5 md:w-3/5 h-96 flex flex-col z-10 rounded-lg border-[2px] bg-slate-800 bg-opacity-50 border-slate-700 font-jetbrains">
      <div class="h-full w-full flex flex-col rounded-b-lg ">
      <div class="h-10 py-5 flex rounded-t-lg">
        <div class="flex flex-row items-center gap-3 px-5">
          <div class="h-3 w-3 bg-red-500 rounded-full"></div>
          <div class="h-3 w-3 bg-yellow-500 rounded-full"></div>
          <div class="h-3 w-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
        <label class="flex flex-row items-center justify-between h-16 w-full px-3 bg-slate-800 bg-opacity-50">
          <div class="flex flex-row items-center">
            <p class="text-white"> $ </p>
            <input autofocus type="text" ref="command-input" v-model="command" @keyup.enter="cmd(command)" class="w-8/12 bg-transparent text-white outline-none p-3"/>
          </div>
          <p class="text-slate-400" v-if="command != ''">Press enter!</p>        
        </label>
 
        <ul ref="output-ref" class="w-full h-full overflow-y-auto">
          <li class="text-slate-400 p-3" v-if="output.length == 0">
            Available commands: 
            <span class="text-green-300">aboutme, </span>
            <span class="text-green-300">technologies, </span>
            <span class="text-green-300">portfolio, </span>
            <span class="text-green-300">contact, </span>
            <span class="text-green-300">snake.</span>

          </li>
          <template v-else v-for="text in output">
            <li>
              <p class="text-white px-3 py-2">{{text}}</p>
            </li>
          </template>
        </ul>

      </div>
    </div>

    <div class="flex flex-col items-center justify-between text-white gap-2">
    <p class="text-slate-400">Enter command in terminal or scroll down!</p>
    </div>

  </div>

  <div ref="aboutme" class="h-auto w-auto min-h-screen bg-gray-950 flex flex-col sm:flex-row items-center justify-around z-10">
    <img src="./assets/pfp.png" class="w-64 sm:w-80 rounded-xl z-10" alt="Image"> 

    <div class="sm:w-2/5 w-full h-1/2 text-xl flex flex-col text-center z-10 rounded-lg bg-opacity-50 font-poppins gap-2">
      <h1 class="text-white text-4xl sm:text-5xl">About me</h1>
      <p class="text-slate-300 p-10 sm:p-4 sm:text-lg text-base text-justify">Hi, nice to meet you. You probably already know that, but my name is Rafał. I'm <span class="text-lime-300">front-end</span> and <span class="text-purple-400">UI/UX</span> developer. But of course programming is not everything, I love reading books. Choosing my favorite book would be really hard task, but I had fun while reading "<span class="text-pink-400">Bunny</span>" by Mona Awad.</p> 
    </div>
  </div>
 
  <div ref="technologies" class="h-auto w-auto min-h-screen bg-gray-950 flex flex-col justify-center items-center z-10 gap-10">
    <h1 class="text-white text-5xl font-semibold opacity-70">Technologies</h1>
    <p class="text-slate-300 text-xl sm:text-2xl text-center p-5">I'm constantly learning new languages and frameworks. These are technologies I love to work with:</p>
    <div class="grid grid-cols-2 sm:grid-cols-5 gap-10">
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/768px-HTML5_Badge.svg.png" alt="HTML Logo">
        <p class="text-slate-200 font-semibold">HMTL</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png" alt="CSS Logo">
        <p class="text-slate-200 font-semibold">CSS</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png?20120221235433" alt="JS Logo">
        <p class="text-slate-200 font-semibold">JavaScript</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/172px-Python-logo-notext.svg.png?20220821155029" alt="Python Logo">
        <p class="text-slate-200 font-semibold">Python</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png" alt="CSharp Logo">
        <p class="text-slate-200 font-semibold">C#</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/640px-Vue.png" alt="Vue Logo">
        <p class="text-slate-200 font-semibold">Vue.js</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207" alt="React Logo Logo">
        <p class="text-slate-200 font-semibold">React Native</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Qt_logo_neon_2022.svg/640px-Qt_logo_neon_2022.svg.png" alt="Qt Logo">
        <p class="text-slate-200 font-semibold">PyQt</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/640px-Figma-logo.svg.png" alt="Figma Logo">
        <p class="text-slate-200 font-semibold">Figma</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/768px-Adobe_Photoshop_CC_icon.svg.png?20200616073617" alt="Photoshop Logo">
        <p class="text-slate-200 font-semibold">Photoshop</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/640px-Adobe_Illustrator_CC_icon.svg.png" alt="Illustrator Logo">
        <p class="text-slate-200 font-semibold">Illustrator</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Neovim-mark-flat.svg/640px-Neovim-mark-flat.svg.png" alt="Neovim Logo">
        <p class="text-slate-200 font-semibold">NeoVim</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.stickpng.com%2Fimages%2F5847f981cef1014c0b5e48be.png&f=1&nofb=1&ipt=e7ac3e2224966cf6c358de92bff253367e21a334784df168e7ab4a92fbdc905e&ipo=images" alt="Git Logo">
        <p class="text-slate-200 font-semibold">Git</p>
      </div>
      <div class="w-36 h-24 bg-slate-800 bg-opacity-50 rounded-lg flex flex-col items-center justify-center">
        <img class="h-10" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png?20200723100028" alt="Neovim Logo">
        <p class="text-slate-200 font-semibold">Firebase</p>
      </div>
    </div>
  </div>

  <div ref="portfolio" class="h-auto w-auto min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-10 z-10">
    <h1 class="text-white text-5xl font-semibold opacity-70">PROJECTS</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 w-[90%] z-10 gap-5">      
      <div class="sm:w-96 w-[80%] flex flex-col h-fit place-self-center bg-slate-800 bg-opacity-50 rounded-lg text-center p-5 gap-5">
        <img src="./assets/chat-screen.png" alt="" class="w-96 place-self-center rounded-md">
        <h1 class="text-slate-300 text-xl font-medium font-poppins">Chat Website</h1>
        <p class="text-lg text-slate-400">A real-time chat application, developed using Vue.js framework and Firestore as database.</p>
        <div class="flex gap-10 items-center justify-center">
          <button class="bg-slate-700 text-slate-300 px-5 py-1 rounded-lg">Link</button>
          <button class="bg-slate-700 text-slate-300 px-5 py-1 rounded-lg">Github</button>
        </div>
      </div>
      <div class="sm:w-96 w-[80%] flex flex-col h-fit place-self-center bg-slate-800 bg-opacity-50 rounded-lg text-center p-5 gap-5">
        <img src="./assets/weather-screen.png" alt="" class="w-96 place-self-center rounded-md">
        <h1 class="text-slate-300 text-xl font-medium font-poppins">Weather Website</h1>
        <p class="text-lg text-slate-400">Website for weather forecasting developed utilizing Vue.js framework and the Open Meteo API.</p>
        <div class="flex gap-10 items-center justify-center">
          <button class="bg-slate-700 text-slate-300 px-5 py-1 rounded-lg">Link</button>
          <button class="bg-slate-700 text-slate-300 px-5 py-1 rounded-lg">Github</button>
        </div>
      </div>
      <div class="sm:w-96 w-[80%] flex flex-col h-fit place-self-center bg-slate-800 bg-opacity-50 rounded-lg text-center p-5 gap-5">
        <img src="./assets/random-screen.png" alt="" class="w-96 place-self-center rounded-md">
        <h1 class="text-slate-300 text-xl font-medium font-poppins">Random Gesture App</h1>
        <p class="text-lg text-slate-400">Desktop application for displaying drawing references, developed using the Python and the PyQt5 framework.</p>
        <div class="flex gap-10 items-center justify-center">
          <button class="bg-slate-700 text-slate-300 px-5 py-1 rounded-lg">Link</button>
          <button class="bg-slate-700 text-slate-300 px-5 py-1 rounded-lg">Github</button>
        </div>
      </div>
    </div>
  </div>

  <div ref="contact" class="h-auto w-auto min-h-screen bg-gray-950 flex flex-col items-center justify-center z-10">
    <h1 class="text-white text-5xl font-semibold opacity-70">Contact</h1>
    <p class="text-slate-300 text-xl sm:text-2xl text-center p-5">If you are interested in my work or have any inquiries, please do not hesitate to contact me.</p>
  
    <button class="text-2xl text-slate-300 bg-slate-800 bg-opacity-50 border-[2px] border-slate-400 px-5 py-2 rounded-lg">Contact me!</button>
  </div>

  </template>

