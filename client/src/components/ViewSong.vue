<template>
  <div><h1>view song</h1></div>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
  data: () => ({ song: null }),

  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data;
  }
};
</script>

<style scoped></style>
