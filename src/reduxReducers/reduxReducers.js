import { createStore } from 'redux'
var defaultData = {
      focus: false,
      mousemOVE:false,
      hotData:[]
}
const aa = (state = defaultData, action) =>{
      try {
            let  NEwdata =  state
            switch (action.type) {
                  case "FOCUS":
                        return { ...state, focus: !state.focus }
                  case "BlUR":
                        return { ...state, focus: !state.focus }
                  case "HOTDATA":
                              NEwdata.hotData =action.hotData
                        return   NEwdata
                  case "MOUSEOVE":
                        NEwdata.mousemOVE = true
                        return   NEwdata    
                  case "MouseLeave11":
                         NEwdata.mousemOVE = false
                        console.log(NEwdata)
                        return   NEwdata          
                  default:
                        return state;
            }
      } catch (error) {
            alert(error)
      }
}
var store = createStore(aa)
export default store