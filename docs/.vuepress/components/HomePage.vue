<template>
  <div class="chome">
    <div class="bg">
      <img class="fm-boy" src="/images/fm-boy.png" />
    </div>
    <div class="content">
      <div>
        <div class="img"><img src="/images/logo.gif" /></div>
        <div class="btn"><button @click="start">开始阅读</button></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const start = () => {
  router.push(encodeURI("/guide/第1章_什么是JavaScript"));
};
</script>
<style lang="scss">
@media only screen and (max-width: 640px) {
  .fm-boy {
    width: 70%;
  }
}
@media only screen and (min-width: 640px) {
  .fm-boy {
    width: 50%;
  }
}

.chome {
  .bg {
    background: url("/images/fj.jpg") center center no-repeat;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    background-color: #b5b3b2;
    position: relative;
    filter: blur(4px);
    .fm-boy {
      position: absolute;
      bottom: 0;
      left: 10%;
      max-width: 640px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      text-align: center;
      opacity: 0.7;
      img {
        width: 80%;
      }
    }
    .btn {
      text-align: center;
      margin-top: 10px;
      button {
        border: none;
        border-radius: 2px;
        color: white;
        font-size: 1.2rem;
        padding: 10px 20px;
        background-color: var(--theme-color);
        cursor: pointer;
        margin: auto;
      }
    }
  }
}
</style>
