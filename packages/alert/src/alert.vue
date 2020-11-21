<template>
  <div>
    <slot>{{ name }} </slot>
  </div>
</template>

<script>
export default {
  name: 'AxeAlert',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
}
</script>
