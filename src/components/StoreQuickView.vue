<template>
  <el-container>
    <el-main>
      <el-card class="card-style">
        <el-row>
          <el-col :span="10">
            <el-avatar
              fit="fit"
              shape="square"
              :size="100"
              :src="url"
            ></el-avatar>
          </el-col>
          <el-col :span="14">
            <div style="font-weight: 500; font-size: 20px">{{ name }}</div>
            <div style="font-weight: 30; font-size: 15px">
              {{ describe }}
            </div>
          </el-col>
        </el-row>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>
.card-style {
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class StoreQuickView extends Vue {
  @Prop() private url!: string;
  @Prop() private name!: string;
  @Prop() private describe!: string;
}
</script>

