<template>
    <div class="space-y-8">
        <div
            v-for="(team, index) in leaderboardStore.teams"
            :key="index"
            class="w-full"
        >
            <h2 class="flex justify-center text-xs font-medium border-t border-slate-400 px-4">{{ team.teamName }}</h2>

            <div class="border border-slate-400">
                <div
                    v-for="(item, index) in leaderboardStore.getPlayersList(team.players)"
                    :key="index"
                    class="w-full"
                >
                    <player :model="item" :index="index" />
                </div>

                <div class="w-full">
                    <total :model="team.players" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Player from './player.vue';
import Total from './total.vue';
import { useLeaderboardStore } from '../stores/leaderboard';

const leaderboardStore = useLeaderboardStore();

</script>