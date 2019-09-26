<template functional>
    <div class="prop">
        <span class="prop-name"><pre>{{ props.name }}</pre></span>
        <span class="prop-type">{{ props.type }}</span>
        <span class="prop-values">
            <slot></slot>
        </span>
    </div>
</template>