<template>
  <div class="store-view">
    <el-container>
      <el-main>
        <el-card class="card-style">
          <el-select
            v-model="itemType"
            placeholder="请选择"
            :change="typeSwith()"
          >
            <el-option-group
              v-for="group in itemTypeOptions"
              :key="group.label"
              :label="group.label"
            >
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-option-group>
          </el-select>

          <div class="item-list">
            <div style="height: 300px; overflow: hidden">
              <div class="item" v-for="item in typeDataList" :key="item.name">
                <!-- <el-button
                  size="small"
                  style="float: right"
                  type="info"
                  @click="buyGoods(item)"
                  >+</el-button
                > -->

                <el-tooltip :content="item.describe" effect="light">
                  <span style="line-height: 35px">
                    {{ item.name }}
                  </span>
                </el-tooltip>

                <el-input-number
                  size="mini"
                  v-model="item.number"
                  style="float: right; width: 100px"
                  :min="0"
                  :max="100"
                  @change="
                    (currentValue, oldValue) => {
                      buyGoods(currentValue, oldValue, item);
                    }
                  " 
                ></el-input-number>
              </div>
            </div>
          </div>
        </el-card>

        <el-card class="card-style line-heigth-spacing">
          <!-- 统计：{{ countPrice }} -->
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import StoreView from "../store/storeView";
export default StoreView;
</script>

<style scoped>
.store-view {
  background-color: #00b894;
  margin: 0;
  height: 100%;
  width: 100%;
}

.item-list {
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin-top: 10px;
}

.item {
  margin: 8px;
  height: 35px;
}

.card-style {
  max-width: 400px;
  min-width: 200px;
  width: 100%;
  margin: 0 auto;
}

.line-heigth-spacing {
  margin-top: 10px;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>