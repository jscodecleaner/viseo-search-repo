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

const ListScreen = ({ navigation }) => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const lists = useSelector((state) => state.list.lists)
  const onSearch$ = new Subject()
  const subscription = onSearch$
    .pipe(
      map((value) => value.trim()),
      filter((value) => value.length > 2),
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe((text) => {
      fetchData(text)
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
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${search.trim()}`
      )

      if (!response.ok) {
        throw new Error('Could not fetch repo data!')
      }

      const data = await response.json()

      dispatch(
        listActions.replaceLists({
          lists: data.items || [],
        })
      )
    } catch (error) {
      console.log('Fetch Data Error: ', error)
    }

    return data
  }

  const handleClickRepo = (data) => {
    navigation.navigate('DetailsScreen', { repoData: data })
  }

  return (
    <SafeAreaView style={styles.Container}>
      <CustomInput
        value={search}
        placeholder="Search repository..."
        onChange={(text) => setSearch(text)}
      />
      <ScrollView style={styles.ListContainer}>
        {lists ? (
          lists.map((repo, index) => (
            <ListComponent key={index} data={repo} onClick={handleClickRepo} />
          ))
        ) : (
          <Text style={styles.NoData}>Data not found.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ListScreen
