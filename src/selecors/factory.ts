import {RootState} from "../redux/rootStore";

const factorySelector = <TSelected>(selector:(state: RootState)=>TSelected) => selector

export default factorySelector