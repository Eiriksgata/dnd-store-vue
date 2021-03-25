import { ItemType, ItemTypeEnum, ItemTypeOptions } from "./StoreItemStruct";

export const AllCommodity: any = [];
AllCommodity[ItemTypeEnum.SMW] = [
  {
    name: "短棒 club",
    ioc: "",
    describe: '短棒 club  1 sp  1d4 钝击  2 磅  轻型',
    price: {
      cp: 0,
      sp: 1,
      ep: 0,
      gp: 0,
      pp: 0
    },
    number: 0
  }, {
    name: "匕首 dagger",
    ioc: "",
    describe: '匕首 dagger  2 gp  1d4 穿刺  1 磅  灵巧，轻型，投掷（射程 20/60）',
    price: {
      cp: 0,
      sp: 0,
      ep: 0,
      gp: 2,
      pp: 0
    },
    number: 0
  }, {
    name: "巨棒 greatclub",
    ioc: "",
    describe: '巨棒 greatclub  2 sp  1d8 钝击  10 磅  双手',
    price: {
      cp: 0,
      sp: 2,
      ep: 0,
      gp: 0,
      pp: 0
    },
    number: 0
  }

];
