// libs
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { AllCommodity } from './StoreData';
import { ItemInfo, ItemTypeOptions, ShoppingCartItem } from './StoreItemStruct';

@Component({})
export default class StoreView extends Vue {

  itemType = 'SimpleMeleeWeapon';
  storeCode = this.$route.params.id;
  itemTypeOptions = ItemTypeOptions;
  typeDataList = AllCommodity[this.itemType];

  countPrice = {
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 0,
    pp: 0
  }

  shoppingList = new Map<string, ItemInfo>();

  typeSwith() {
    this.typeDataList = AllCommodity[this.itemType];
  }

  buyGoods(currentValue: number, oldValue: number, item: ItemInfo) {

    const _this = this;
    this.shoppingList.set(item.name, item);

    // console.log(this.typeDataList);
    // console.log(currentValue, oldValue, item);


    // this.countPrice = {
    //   cp: this.countPrice.cp + item.price.cp,
    //   sp: this.countPrice.sp + item.price.sp,
    //   ep: this.countPrice.ep + item.price.ep,
    //   gp: this.countPrice.gp + item.price.gp,
    //   pp: this.countPrice.pp + item.price.pp
    // }
    this.priceCount();
  }

  priceCount() {
    let price = {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 0,
      pp: 0
    };
    this.shoppingList.forEach((value, key) => {
      price = {
        cp: price.cp + value.price.cp * value.number,
        sp: price.sp + value.price.sp * value.number,
        ep: price.ep + value.price.ep * value.number,
        gp: price.gp + value.price.gp * value.number,
        pp: price.pp + value.price.pp * value.number
      }
    });
    this.countPrice = price;
    console.log(this.price2text(price));
  }

  mounted() {

  }

  price2text(price: any) {
    let text = "";
    Object.keys(price).forEach((key, index) => {
      if (price[key] != 0) {
        text += price[key] + key;
      }
    })
    return text;
  }

}