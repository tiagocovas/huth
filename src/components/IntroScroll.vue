<template>
    <div class="intro-box">
        <a>
        <span></span>
        </a>
        where are the Cuckoos at?
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.intro-box {
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 70vh 0;
}

.intro-box a span::after {
  position: absolute;
  top: 80vh;
  left: 50%;
  content: '';
  width: 16px;
  height: 16px;
  margin: -12px 0 0 -8px;
  border-left: 1px solid #000;
  border-bottom: 1px solid #000;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
}


</style>