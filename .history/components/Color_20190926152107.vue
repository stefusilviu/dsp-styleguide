<template functional>
    <el-card class="color-card" shadow="hover">
        <div class="color-swatch" :style="{background: props.color}">
          <strong>{{ props.name }}</strong><br>
          <span>{{ props.color }}</span>
        </div>
    </el-card>
</template>