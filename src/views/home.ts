// libs
import Axios from 'axios';
import Vue from "vue";
import { Component, Prop, Watch } from 'vue-property-decorator';
import StoreQuickView from '@/components/StoreQuickView.vue';
import moment from 'moment';
import axios from 'axios';
import { Storeinfo } from '@/entity/Store';
import VueRouter from 'vue-router';

@Component({
  components: {
    StoreQuickView
  }
})
export default class Home extends Vue {

  storeCode = '';
  showQuickView = false;
  storeData: Storeinfo = {
    name: 'Store Name',
    describe: '在CSS 中,我们使用 font-family 属性规定文本的字体。 font-family 属性应包含多个字体名称作为“后备”系统,以确保浏览器/操作系统之间的最大兼容性。请以您需要...'
  };
  imageUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

  routeProps = {
    storeCode: this.storeCode
  }


  searchStore() {
    if (this.storeCode !== '') {
      this.showQuickView = true;
    }
  }

  selectStore() {
    this.$router.push({ name: 'Store', params: { id: this.storeCode } })
    console.log("select store");
  }

}