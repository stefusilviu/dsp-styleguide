<template functional>
    <el-card class="color-card" shadow="hover">
        <div class="color-swatch" :style="{background: props.color}">
          {{ props.name }}
        </div>
    </el-card>
</template>