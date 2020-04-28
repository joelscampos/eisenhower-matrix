<template>
  <div>
    <div class="d-flex bg-light">
      <form class="form-inline  w-100">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" :id="id">
          <label :for="id" class="custom-control-label">{{ title }}</label>
        </div>
      </form>
      <button type="button" class="btn btn-secondary btn-sm ml-2 float-right" @click="$emit('remove')">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'quadrant'
  ],
  data() {
    return {
      id: 0,
    };
  },
  
}
</script>

<style>

</style>