import { ReturnStoreType, StateConstraint } from '@poly-state/poly-state';
import { useStoreSelector } from './useStoreSelector';

export const createSelector = <T extends StateConstraint>(store: ReturnStoreType<T>) => {
	return (key: keyof T) => {
		return useStoreSelector(store, key);
	};
};
