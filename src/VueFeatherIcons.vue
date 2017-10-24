<template>
  <svg :class="`feather feather-${name}`"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    v-html="path">
  </svg>
</template>

<script>
import feather from 'feather-icons'
export default {
  data () {
    return {
      path: feather.icons[this.name]
    }
  },
  props: {
    name: {
      type: String
    },
    size: {
      type: String,
      default: '24'
    },
    strokeWidth: {
      type: String,
      default: '2'
    }
  }
}
</script>

<style>

</style>
