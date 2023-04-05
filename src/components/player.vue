<template>
    <div class="w-full flex items-center">
        <div class="w-full px-4 py-0.5 bg-slate-100">
            <span :class="{ 'opacity-50': index > 3}">
                {{ model.athlete?.displayName }}
            </span>
        </div>
        <div class="w-[54px] py-0.5 flex justify-center items-center bg-green-700 text-white">
            <span :class="{ 'opacity-50': index > 3}">
                {{ model.score?.displayValue }}
            </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    model: {
        type: Object,
        default: () => ({}),
    },
    index: {
        type: String,
        default: null
    }
});
</script>

<style lang="scss" scoped>

</style>