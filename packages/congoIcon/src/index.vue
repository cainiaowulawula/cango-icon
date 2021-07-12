<template>
  <div class="cango">
    <template v-if="type == 'unicode'">
      <span class="cango-iconnfont" v-html="name"></span>
      <slot></slot>
    </template>
    <template v-else-if="type == 'symbol'">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconTag"></use>
      </svg>
      <slot></slot>
    </template>
    <template v-else>
      <span class="cango-icon" :class="iconTag"></span>
      <slot></slot>
    </template>
  </div>
</template>

<script>
  import "../../static/iconfont/iconfont.js";
  export default {
    name: "cango-icon",
    props: {
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: "fontClass",
      },
    },
    computed: {
      iconTag() {
        return `cango-icon-${this.name}`;
      },
    },
  };
</script>

<style scoped>
  @import url("../../static/iconfont/iconfont.css");
  .cango {
    display: inline-block;
  }
  .icon {
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .cango-icon {
    font-size: 100%;
  }
</style>
