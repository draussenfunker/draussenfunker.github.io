<template>
<div>
  <a :href="link">{{ caption }}</a>
</div>
</template>

<script>
export default {
  props: ['caption', 'link', 'image']
}
</script>

<style scoped>
  a {
    color: white;
    background-color: #2ecc71;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 12px 20px;
    font-size: 20px;
    line-height: 22px;
    font-weight: 500;
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 10px rgba(154,171,237,1);
  }
  a:hover {
    background-color: red;
  }
</style>