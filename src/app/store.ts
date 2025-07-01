import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineReducers, combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { createBrowserHistory } from "history"
import { createReduxHistoryContext } from "redux-first-history"

export const rootReducer = combineSlices()

export type RootState = ReturnType<typeof rootReducer>

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
})
export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([routerMiddleware]),
  reducer: combineReducers({
    router: routerReducer,
  }),
})

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>
setupListeners(store.dispatch)
export const history = createReduxHistory(store)
