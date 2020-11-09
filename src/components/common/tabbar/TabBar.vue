<template>
<div id="tab-bar">
  <slot>

  </slot>
</div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar{
/* 伸缩盒子，一行显示*/
  display: flex;
  background-color: #f6f6f6;

/*固定定位 位置调到最下*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

/*盒子阴影*/
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);

}

</style>
