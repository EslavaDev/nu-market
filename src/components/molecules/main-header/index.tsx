import React, { useEffect, useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
import { InputSearch } from '../../atoms/input-search';
import { stylesMainHeader } from './styles';
// import { getSearchValue } from '../../../store/catalog/selectors';
import { useDebounce } from '../../../hooks/use-debounce';
// import { changedSearchInput } from '../../../store/catalog/actions';

interface Props {
  handleSearch: (value?: string) => void;
}
export const MainHeader = ({ handleSearch }: Props) => {
  // const dispatch = useDispatch();
  const searchValue = '';
  // const searchValue = useSelector(getSearchValue || '');

  const debouncedValue = useDebounce(searchValue, 500);

  const handleChange = useCallback((_text) => {
    // dispatch(changedSearchInput(text));
  }, []);

  useEffect(() => handleSearch(debouncedValue as any), [
    debouncedValue,
    handleSearch,
  ]);
  return (
    <SafeAreaView>
      <View style={[stylesMainHeader.mainHeaderContainer]}>
        <View style={[stylesMainHeader.mainHeaderInputcontainer]}>
          <InputSearch onChange={handleChange} value={searchValue || ''} />
        </View>
      </View>
    </SafeAreaView>
  );
};
