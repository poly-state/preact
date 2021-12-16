import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { useStore, useStoreSelector } from './index';

export const createStoreHooks = <T extends StateConstraint>(store: ReturnStoreType<T>) => {
	return [() => useStore(store), (key: keyof T) => useStoreSelector(store, key)];
};
