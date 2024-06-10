<script setup lang="ts">
import { onMounted, ref } from "vue";

const canvasElement = ref<HTMLCanvasElement>();
const context = ref<CanvasRenderingContext2D>();
const game_width = 500;
const game_height = 500;
const element_s = 50;
let running = false;
let velocity_x = element_s;
let velocity_y = 0;
let food = { "x": 0, "y": 0 };
let snake: { x: number, y: number }[] = [
  { "x": 0, "y": 0 },
];
let score = ref(0);
let showButtons = ref(false);

let touchstartX = 0;
let touchendX = 0;
let startMenu = ref(true);

function start() {

  context.value = canvasElement.value?.getContext('2d') || undefined;
  context.value!.clearRect(0, 0, game_width, game_height);
  startMenu.value = false;
  running = true;
  randomizeFood();
  drawSnake();
};

setInterval(() => {
  if (running) {
    if (!context.value) {
      return;
    }

    if (snake.length >= (game_width / element_s) * (game_height / element_s)) {
      context.value!.font = "35px Poppins";
      let textString = "You won! Score: " + score.value;
      let textWidth = context.value.measureText(textString).width;
      context.value.fillStyle = "#fff";
      setTimeout(() => {
          context.value!.clearRect(0, 0, game_width, game_height);
        setTimeout(() => {
        context.value!.fillText(textString, (game_width / 2) - (textWidth / 2), game_height / 2);
        }, 100);
      }, 400);
      running = false;
    }

    window.addEventListener("keydown", changeDirection, false);

    for (let i = 0; i < snake.length; i++) {
      context.value.clearRect(snake[i].x, snake[i].y, element_s, element_s);
    }

    if (food.x == snake[snake.length - 1].x && food.y == snake[snake.length - 1].y) {
      snake.push({ "x": food.x, "y": food.y });
      score.value += 1;
      randomizeFood();
    };

    snake.push({ x: snake[snake.length - 1].x + velocity_x, y: snake[snake.length - 1].y + velocity_y });
    snake.shift();

    drawSnake();
    collision();
  }
}, 150)

function restart() {
  if (!context.value) {
    return;
  }

  score.value = 0;
  velocity_x = element_s;
  velocity_y = 0;
  snake = [{ "x": 0, "y": 0 }];

  context.value.clearRect(0, 0, game_width, game_height);
  randomizeFood();
  drawSnake();

  running = true;
}

function quit() {
  running = false;
}

function changeDirection(e: KeyboardEvent) {

  if ((e.key === "a" || e.key === "ArrowLeft") && velocity_x == 0) {
    velocity_x = -element_s;
    velocity_y = 0;
    showButtons.value = false;
  }
  else if ((e.key === "d" || e.key === "ArrowRight") && velocity_x == 0) {
    velocity_x = element_s;
    velocity_y = 0;
    showButtons.value = false;
  }
  else if ((e.key === "s" || e.key === "ArrowDown") && velocity_y == 0) {
    velocity_y = element_s;
    velocity_x = 0;
    showButtons.value = true;
  }
  else if ((e.key === "w" || e.key === "ArrowUp") && velocity_y == 0) {
    velocity_y = -element_s;
    velocity_x = 0;
    showButtons.value = true;
  }
  window.removeEventListener("keydown", changeDirection, false);
}

function onSwipe(direction: any) {
  if (direction === "left" && velocity_x == 0) {
    velocity_x = -element_s;
    velocity_y = 0;
  }
  else if (direction === "right" && velocity_x == 0) {
    velocity_x = element_s;
    velocity_y = 0;
  }
  else if (direction === "bottom" && velocity_y == 0) {
    velocity_y = element_s;
    velocity_x = 0;
  }
  else if (direction === "top" && velocity_y == 0) {
    velocity_y = -element_s;
    velocity_x = 0;
  }
}

function collision() {
  if (snake[snake.length - 1].x >= game_width || snake[snake.length - 1].x < 0 || snake[snake.length - 1].y >= game_height || snake[snake.length - 1].y < 0) {
      context.value!.font = "35px Poppins";
      let textString = "You lose! Score: " + score.value;
      let textWidth = context.value!.measureText(textString).width;
      context.value!.fillStyle = "#fff";
      setTimeout(() => {
          context.value!.clearRect(0, 0, game_width, game_height);
        setTimeout(() => {
        context.value!.fillText(textString, (game_width / 2) - (textWidth / 2), game_height / 2);
        }, 100);
      }, 400);
      running = false;
  }

  for (let i = 1; i < snake.length - 1; i++) {
    if (snake[i - 1].x == snake[snake.length - 1].x && snake[i - 1].y == snake[snake.length - 1].y) {
      context.value!.font = "35px Poppins";
      let textString = "You lose! Score: " + score.value;
      let textWidth = context.value!.measureText(textString).width;
      context.value!.fillStyle = "#fff";
      setTimeout(() => {
          context.value!.clearRect(0, 0, game_width, game_height);
        setTimeout(() => {
        context.value!.fillText(textString, (game_width / 2) - (textWidth / 2), game_height / 2);
        }, 100);
      }, 400);
      running = false;
    }
  }

}

function randomizeFood() {
  if (!context.value) {
    return;
  }

  food.x = Math.floor((Math.random() * game_width) / element_s) * element_s;
  food.y = Math.floor((Math.random() * game_height) / element_s) * element_s;

  while (snake.some((value) => value.x == food.x && value.y == food.y)) {
    food.x = Math.floor((Math.random() * game_width) / element_s) * element_s;
    food.y = Math.floor((Math.random() * game_height) / element_s) * element_s;
  }

  context.value.fillStyle = "#E1B988";
  context.value.fillRect(food.x, food.y, element_s, element_s)
}

function drawSnake() {
  if (!context.value) {
    return;
  }

  context.value.fillStyle = "#697B6D";
  for (let i = 0; i < snake.length; i++) {
    context.value.fillRect(snake[(snake.length - 1) - i].x, snake[(snake.length - 1) - i].y, element_s, element_s)
    context.value.fillStyle = "#233337";
  }
}

defineExpose({
  restart,
  quit,
  score
})

</script>

<template>
  <div class="flex w-full h-full flex-col items-center justify-center font-poppins">
    <div v-if="startMenu" class="absolute flex flex-col items-center justify-center gap-10">
      <p class="text-white text-4xl font-semibold">Snake</p>
      <div class="flex flex-col gap-5 items-center justify-center">
        <div class="flex flex-wrap flex-row items-center justify-center xl:gap-5 gap-2">
          <p class="text-white xl:text-xl text-md font-semibold">WASD</p>
          <p class="text-gray-400">or</p>
          <p class="text-white xl:text-xl text-md font-semibold">ARROWS</p>
          <p class="text-gray-400">or</p>
          <p class="text-white xl:text-xl text-md font-semibold">SWIPE</p>
        </div>
        <button @click="start()" class="bg-[#987988] text-[#382c32] px-5 py-2 rounded-lg font-semibold">START</button>
      </div>
    </div>
    <canvas v-touch:swipe="onSwipe" ref="canvasElement" id="canvasElement" :height="game_height" :width="game_width"
      class="lg:h-96 bg-[#12151A] lg:w-96 w-72 h-72 border-[1px] border-[#424242] border-opacity-40" />
  </div>
</template>

<style scoped></style>
