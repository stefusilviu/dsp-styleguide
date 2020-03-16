<template functional>
  <el-card class="color-card" shadow="hover">
    <div
      class="color-swatch"
      :class="{ invert: props.invert === 'true' }"
      :style="{background: props.color}"
    >
      <strong>{{ props.name }}</strong>
      <span>{{ props.color }}</span>
    </div>
  </el-card>
</template>