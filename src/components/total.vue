<template>
    <div class="w-full flex items-center">
        <div class="w-full px-4 py-0.5 bg-slate-100 font-bold">Team Score</div>
        <div class="w-[54px] py-0.5 flex justify-center items-center bg-green-700 text-white">
            {{ totalScore }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useLeaderboardStore } from '../stores/leaderboard';

const leaderboardStore = useLeaderboardStore();

const props = defineProps({
    model: {
        type: Array,
        default: () => ([]),
    },
});

const totalScore = computed(() => {
    let score = leaderboardStore.getTeamScore(props.model);

    if (score === 0) {
        return 'E';
    } else {
        return score;
    }
});
</script>