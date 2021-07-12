<template>
  <div class="cango">
    <template v-if="type == 'unicode'">
      <span :class="tag" class="cango-icon" v-html="name"></span>
      <slot></slot>
    </template>
    <template v-else-if="type == 'symbol'">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="symbolTag"></use>
      </svg>
      <slot></slot>
    </template>
    <template v-else>
      <span :class="[tag, iconTag]" class="cango-icon"></span>
      <slot></slot>
    </template>
  </div>
</template>

<script>
  import "../../static/iconfont/iconfont.js";
  import {TAG, PREFIX} from '../../config.js'
  export default {
    name: "cango-icon",
    data() {
      return {
        tag: TAG
      }
    },
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
        return `${PREFIX}${this.name}`;
      },
      symbolTag() {
        return `#${PREFIX}${this.name}`;
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
