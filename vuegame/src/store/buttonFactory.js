import RightMoveButton from "../components/functionButton/RightMoveButton.vue";
import SquareButton from "../components/functionButton/SquareButton.vue";
import PpositeButton from "../components/functionButton/PpositeButton.vue";
import ReverseButton from "../components/functionButton/ReverseButton.vue";
import SumButton from "../components/functionButton/SumButton.vue";
import CubeButton from "../components/functionButton/CubeButton.vue";
import ShiftLeftButton from "../components/functionButton/ShiftLeftButton.vue";
import ShiftRightButton from "../components/functionButton/ShiftRightButton.vue";
import MirrorButton from "../components/functionButton/MirrorButton.vue";
import StoreButton from "../components/functionButton/StoreButton.vue";
import Inv10Button from "../components/functionButton/Inv10Button.vue";


import InsertButton from "../components/functionButton/InsertButton.vue";
import ReplaceButton from "../components/functionButton/ReplaceButton.vue";
import EachButton from "../components/functionButton/EachButton.vue";
import ElementaryArithmetic from "../components/functionButton/ElementaryArithmetic.vue"
import { markRaw } from "vue";
export const buttonFactory = (index, ...args) => {
  //需要加上markRaw()
  switch (index) {
    case "<<": {
      return { tag: markRaw(RightMoveButton) };
    }
    case "x²": {
      return { tag: markRaw(SquareButton) };
    }
    case "+/-": {
      return { tag: markRaw(PpositeButton) };
    }
    case "Reverse": {
      return { tag: markRaw(ReverseButton) };
    }
    case "SUM": {
      return { tag: markRaw(SumButton) };
    }
    case "x³": {
      return { tag: markRaw(CubeButton) };
    }
    case "Shift>": {
      return { tag: markRaw(ShiftLeftButton) };
    }
    case "Shift<": {
      return { tag: markRaw(ShiftRightButton) };
    }
    case "Mirror": {
      return { tag: markRaw(MirrorButton) };
    }
    case "Store": {
      return { tag: markRaw(StoreButton) };
    }
    case "Inv10": {
      return { tag: markRaw(Inv10Button) };
    }
    case "insert": {
      return { tag: markRaw(InsertButton), num1: args[0] };
    }
    case "replace": {
      return { tag: markRaw(ReplaceButton), num1: args[0], num2: args[1] };
    }
    case "each": {
      return { tag: markRaw(EachButton), operation: args[0], num1: args[1] };
    }
    case "elementaryArithmetic": {
      return { tag: markRaw(ElementaryArithmetic), operation: args[0], num1: args[1] }
    }
  }
}