import { ActiveNameList } from "@/lib/data";
import { ActiveId, ActiveState, InitialActiveState } from "@/lib/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: "p1",
    name: "P1 group",
  } as ActiveState,
} as InitialActiveState;

export const active = createSlice({
  name: "active",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<ActiveId>) => {
      const id = action.payload as string;
      return {
        value: {
          id: id as ActiveId,
          name: ActiveNameList[id] as string,
        },
      };
    },
  },
});

export const { setActive } = active.actions;
export default active.reducer;
