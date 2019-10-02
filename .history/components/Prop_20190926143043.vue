<template functional>
    <div class="prop">
        <span class="prop-name">{{ props.name }}</span>
        <span class="prop-type">{{ props.type }}</span>
        <slot></slot>
    </div>
</template>