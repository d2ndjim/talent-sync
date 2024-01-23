import { create } from "zustand";

interface useAccordion {
  isItem1Open: boolean;
  isItem2Open: boolean;
  isItem3Open: boolean;
  isItem4Open: boolean;
  isItem5Open: boolean;
  item1Open: boolean;
  item2Open: boolean;
  item3Open: boolean;
  item4Open: boolean;
  item5Open: boolean;
  onItem1Open: () => void;
  onItem2Open: () => void;
  onItem3Open: () => void;
  onItem4Open: () => void;
  onItem5Open: () => void;
}

export const useAccordion = create<useAccordion>((set) => ({
  item1Open: false,
  item2Open: false,
  item3Open: false,
  item4Open: false,
  item5Open: false,
  isItem1Open: false,
  isItem2Open: false,
  isItem3Open: false,
  isItem4Open: false,
  isItem5Open: false,
  onItem1Open: () =>
    set((state) => ({
      isItem1Open: state.item1Open ? false : true,
      item1Open: state.item1Open ? false : true,
      item2Open: state.item1Open && false,
      item3Open: state.item1Open && false,
      item4Open: state.item1Open && false,
      item5Open: state.item1Open && false,
    })),
  onItem2Open: () =>
    set((state) => ({
      isItem2Open: state.item2Open ? false : true,
      item1Open: state.item2Open && false,
      item2Open: state.item2Open ? false : true,
      item3Open: state.item2Open && false,
      item4Open: state.item2Open && false,
      item5Open: state.item2Open && false,
    })),
  onItem3Open: () =>
    set((state) => ({
      isItem3Open: state.item3Open ? false : true,
      item1Open: state.item3Open && false,
      item2Open: state.item3Open && false,
      item3Open: state.item3Open ? false : true,
      item4Open: state.item3Open && false,
      item5Open: state.item3Open && false,
    })),
  onItem4Open: () =>
    set((state) => ({
      isItem4Open: state.item4Open ? false : true,
      item1Open: state.item4Open && false,
      item2Open: state.item4Open && false,
      item3Open: state.item4Open && false,
      item4Open: state.item4Open ? false : true,
      item5Open: state.item4Open && false,
    })),
  onItem5Open: () =>
    set((state) => ({
      isItem5Open: state.item5Open ? false : true,
      item1Open: state.item5Open && false,
      item2Open: state.item5Open && false,
      item3Open: state.item5Open && false,
      item4Open: state.item5Open && false,
      item5Open: state.item5Open ? false : true,
    })),
}));
