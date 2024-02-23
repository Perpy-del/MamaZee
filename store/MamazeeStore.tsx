import { createStore, action, Action, createTypedHooks } from 'easy-peasy';

interface MamazeeStoreModel {
    userEmail: string;
    setUserEmail: Action<MamazeeStoreModel, string>;
    userName: string;
    setUserName: Action<MamazeeStoreModel, string>;
}

export const MamazeeStore = createStore<MamazeeStoreModel>({
    userEmail: '',
    setUserEmail: action((state, payload) => {
        state.userEmail = payload;
    }),
    userName: '',
    setUserName: action((state, payload) => {
        state.userName = payload;
    })
})

const typedHooks = createTypedHooks<MamazeeStoreModel>();

export const useMamazeeStoreState = typedHooks.useStoreState;
export const useMamazeeStoreActions = typedHooks.useStoreActions;
export const useMamazeeStoreDispatch = typedHooks.useStoreDispatch;