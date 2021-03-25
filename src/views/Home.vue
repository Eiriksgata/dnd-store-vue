<template>
  <div class="home">
    <el-container>
      <el-main>
        <el-card class="card-style">
          <el-button class="button-create" type="primary" size="medium">
            Create Store
          </el-button>

          <el-input
            v-model="storeCode"
            placeholder="Store code"
            size="medium"
            class="line-heigth-spacing"
            @keyup.enter.native="searchStore()"
          ></el-input>

          <div style="cursor: pointer" @click="selectStore()">
            <StoreQuickView
              v-show="showQuickView"
              :name="storeData.name"
              :describe="storeData.describe"
              :url="imageUrl"
            />
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>


<style scoped>
.home {
  background-color: #27ae60;
  margin: 0;
  height: 100%;
  width: 100%;
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

.button-create {
  width: 100%;
}
</style>

<script lang="ts">
import Home from "./home";

export default Home;
</script>