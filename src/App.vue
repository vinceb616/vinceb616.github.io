<template>
  <main class="container max-w-3xl px-4">
    <div class="w-full flex justify-center mb-10">
      <img alt="The masters" src="./assets/masters-logo.png" class="w-full max-w-[200px]" />
    </div>
    <leaderboard-table />
  </main>
</template>

<script setup>
import './assets/index.css';
import { useLeaderboardStore } from './stores/leaderboard';
import LeaderboardTable from './components/table.vue'

const leaderboard = useLeaderboardStore();

leaderboard.fetchLeaderboard();
</script>