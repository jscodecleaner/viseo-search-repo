import React from 'react'
import { Image, TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { listActions } from '../../redux/listSlice'
import styles from './ListComponent.style'

const ListComponent = (props) => {
  const data = props.data
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(listActions.upateRepo({ repoData: data }))
    props.onClick()
  }
  return (
    <TouchableOpacity style={styles.ListContainer} onPress={handleClick}>
      <Image
        style={styles.OwnerImage}
        source={{ uri: data.owner.avatar_url }}
      />
      <Text style={styles.OwnerName}>{data.owner.login}</Text>
    </TouchableOpacity>
  )
}

export default ListComponent
