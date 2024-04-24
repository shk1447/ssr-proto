import { registViewFlow } from "x-view-model";

export type GlobalState = {
  count: number;
};

export type GlobalAction = {
  increase: (amount: number) => void;
  decrease: (amount: number) => void;
};

export type GlobalContext = GlobalState & GlobalAction;

export type GlobalFlow = {};

export class GlobalReference {
  constructor() {
    console.log("tt");
  }
}

const GlobalViewModel = registViewFlow<
  GlobalContext,
  GlobalFlow,
  GlobalReference
>(
  {
    count: 0,
    increase: function (amount: number): void {
      this.count++;
    },
    decrease: function (amount: number): void {
      this.count--;
    },
  },
  {},
  { deep: true, name: "GlobalViewModel" },
  new GlobalReference()
);

export default GlobalViewModel;
