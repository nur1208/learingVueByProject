<template>
  <v-layout>
    <v-flex class="xs12">
      <panel title="Songs">
        <v-btn
          slot="action"
          @click="navigateTo({ name: 'song-create' })"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab
        >
          <v-icon> add </v-icon>
        </v-btn>

        <div v-for="song in songs" class="song" :key="song.id">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{ song.title }}
              </div>
              <div class="song-artist">
                {{ song.artist }}
              </div>
              <div class="song-genre">
                {{ song.genre }}
              </div>

              <v-btn
                dark
                class="cyan"
                :to="{
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                }"
              >
                View
              </v-btn>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "./Panel.vue";
import SongsService from "../services/SongsService";
import { mdiPencil } from "@mdi/js";

export default {
  //   data() {
  //     return {
  //         icons: { mdiPencil }
  //     };
  //   },
  data: () => ({
    songs: null,
    icons: {
      mdiPencil
    }
  }),
  async mounted() {
    this.songs = (await SongsService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
