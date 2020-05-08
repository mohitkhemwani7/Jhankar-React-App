
import {
    FETCHDATA
  } from "../__actions";

export default function devices(state={selectedDeviceId: null, deviceList:{}}, action) {
    switch(action.type) {
        case FETCHDATA: {
          const deviceObject = state.deviceList || {}
          return Object.assign({}, state, action);
        }
        default:
          return state;
    }   
}