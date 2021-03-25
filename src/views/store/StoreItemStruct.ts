export enum ItemTypeEnum {
  SMW = "SimpleMeleeWeapon",
  SRW = "SimpleRangedWeapon",
  MMW = "MartialMeleeWeapon",
  MRW = "MartialRangedWeapon"
}

export const ItemTypeOptions = [{
  label: '武器',
  options: [{
    value: ItemTypeEnum.SMW,
    label: '简易近战武器'
  }, {
    value: ItemTypeEnum.SRW,
    label: '简易远程武器'
  }, {
    value: ItemTypeEnum.MMW,
    label: '军用近战武器'
  }, {
    value: ItemTypeEnum.MRW,
    label: '军用远程武器'
  }]
}, {
  label: '工具',
  options: [{
    value: 'BasicItems',
    label: '基础物品'
  }, {
    value: 'Ammunition',
    label: '弹药'
  }, {
    value: 'ArcaneFocus',
    label: '奥数法器'
  }, {
    value: 'DruidicFocus',
    label: '德鲁伊法器'
  }, {
    value: 'HolySymbol',
    label: '圣徽'
  }]
}];


export interface ItemInfo {
  name: string;
  ioc: string;
  describe: string;
  price: {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
  };
}

export interface ItemType {
  name: string;
  items: ItemInfo[];
}

export interface ShoppingCartItem {

  itemInfo: ItemInfo;
  number?: number;

}