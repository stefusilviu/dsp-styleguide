<template functional>
    <div class="prop">
        <span class="prop-name">{{ props.name }}</span>
        <span class="prop-type">{{ props.type }}</span>
        <span class="prop-values">
            <slot></slot>
        </span>
    </div>
</template>