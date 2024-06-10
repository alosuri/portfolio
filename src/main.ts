import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue3TouchEvents, { type Vue3TouchEventsOptions } from "vue3-touch-events";
import Vue3Marquee from 'vue3-marquee'
import { MotionPlugin } from '@vueuse/motion';

createApp(App).use(MotionPlugin).use(Vue3Marquee).use<Vue3TouchEventsOptions>(Vue3TouchEvents, {
  disableClick: false
  // any other global options...
}).mount('#app')
