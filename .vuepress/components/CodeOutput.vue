<!-- .vuepress/components/CodeOutput.vue -->
<template>
    <div class="code-output">
        <div class="input">
            <slot name="input"></slot>
        </div>
        <div class="output">
            <slot name="output"></slot>
        </div>
    </div>
</template>

<style scoped>
.code-output {
    display: flex;
    gap: 16px;
}

.input,
.output {
    flex: 1;
}
</style>