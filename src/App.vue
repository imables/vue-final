<template>
  <div id="app">
    <div v-if="isLoading">Loading Content</div>
    <div v-else>
      <Navbar />
      <div class="container">
        <router-view />
      </div>
      <Banner />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"
import EventBus from "@/EventBus"

export default {
  data: () => ({
    isLoading: true,
  }),
  mounted() {
    EventBus.$on("i18n-initialised", () => (this.isLoading = true))

    EventBus.$on("i18n-loaded", () => (this.isLoading = false))
  },
  components: { Navbar, Banner }
}
</script>

<style>
</style>
