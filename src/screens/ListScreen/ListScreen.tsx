import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, ScrollView } from 'react-native'
import { Subject } from 'rxjs'
import { debounceTime, filter, distinctUntilChanged, map } from 'rxjs/operators'
import { useSelector, useDispatch } from 'react-redux'
import { listActions } from '../../redux/listSlice'
import styles from './ListScreen.style'

/* Import Custom Components */
import CustomInput from '../../components/CustomInput/CustomInput'
import ListComponent from '../../components/ListComponent/ListComponent'
import CustomLoading from '../../components/CustomLoading/CustomLoading'

export type Props = {
  navigation: any
}

const ListScreen: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()
  const lists = useSelector((state: any) => state.list.lists)
  const onSearch$ = new Subject()
  const subscription = onSearch$
    .pipe(
      map((value: any) => value.trim()),
      filter((value) => value.length > 2),
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(() => {
      fetchData()
    })

  useEffect(() => {
    dispatch(listActions.replaceLists([]))

    return () => {
      if (subscription) {
        subscription.unsubscribe()
      }
    }
  }, [])

  useEffect(() => {
    onSearch$.next(search)
  }, [search])

  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${search.trim()}`
    )

    if (!response.ok) {
      setLoading(false)
      throw new Error('Could not fetch repo data!')
    }

    const data = await response.json()

    dispatch(
      listActions.replaceLists({
        lists: data.items || [],
      })
    )
    setLoading(false)
    return data
  }

  const handleClickRepo = () => {
    navigation.navigate('DetailsScreen')
  }

  return (
    <SafeAreaView style={styles.Container}>
      <CustomInput
        value={search}
        security={false}
        placeholder="Search repository..."
        onChange={(text) => setSearch(text)}
      />
      <ScrollView style={styles.ListContainer}>
        {lists ? (
          lists.map((repo: any, index: number) => (
            <ListComponent key={index} data={repo} onClick={handleClickRepo} />
          ))
        ) : (
          <Text style={styles.NoData}>Data not found.</Text>
        )}
      </ScrollView>
      {loading && <CustomLoading />}
    </SafeAreaView>
  )
}

export default ListScreen
