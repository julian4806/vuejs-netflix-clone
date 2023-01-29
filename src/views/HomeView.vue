<template>
  <header class="showcase">
    <div class="showcase-top">
      <img src="@/assets/netflix.svg" alt="" />
    </div>
    <div class="showcase-content">
      <h1>
        Unlimited films, TV<br />
        programmes and more.
      </h1>
      <p>Watch anywhere. Cancel at any time.</p>
      <a @click="$router.push('/trending')" class="btn"
        >start watching<i class="fas fa-chevron-right btn-icon"></i
      ></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss" scoped>
/* Global Styles */

img {
  width: 100%;
}

.showcase {
  width: 100%;
  position: fixed;
  height: 100vh;
  background: url("@/assets/background.jpg") no-repeat center center/cover;
  overflow: hidden;
}

.showcase::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: inset 120px 100px 250px #000000, inset -120px -100px 250px #000000;
}

.showcase-top {
  position: relative;
  z-index: 2;
  height: 90px;
}

.showcase-top img {
  width: 170px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 0;
}

.showcase-content {
  position: relative;
  z-index: 2;
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 9rem;
}

.showcase-content h1 {
  font-weight: 700;
  font-size: 5.2rem;
  line-height: 1.1;
  margin: 0 0 2rem;
}

.showcase-content p {
  color: #fff;
  font-weight: 400;
  font-size: 1.9rem;
  line-height: 1.25;
  margin: 0 0 2rem;
}

.btn {
  display: inline-block;
  background: #e50914;
  color: #fff;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  border-radius: 2px;
  font-size: 2rem;
  padding: 1.5rem 2.1rem;
  text-transform: uppercase;
  &:hover {
    opacity: 0.9;
  }
}
</style>
