import React from 'react'
import { View, Image, Text, Linking } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './RepoDetailsComponent.style'

/* Import Custom Components */
import CustomButton from '../CustomButton/CustomButton'

/* Import Icons */
import repoIcon from './../../assets/images/icon_repo.png'
import starIcon from './../../assets/images/icon_star.png'
import forkIcon from './../../assets/images/icon_fork.png'
import watchIcon from './../../assets/images/icon_watch.png'

const RepoDetailsComponent = () => {
  const data = useSelector((state) => state.list.repoData)

  const handleGotoRepo = () => {
    Linking.openURL(data.html_url)
  }

  return (
    <View style={styles.DetailsContainer}>
      <View style={styles.LogoContainer}>
        <Image
          style={styles.OwnerImage}
          source={{ uri: data.owner.avatar_url }}
        />
        <Text style={styles.OwnerName}>{data.owner.login}</Text>
      </View>
      <View style={styles.RepoContainer}>
        <View style={styles.RepoDetails}>
          <Image style={styles.DetailIcon} source={repoIcon} />
          <Text style={styles.DetailName}>{data.name}</Text>
        </View>
        <View style={styles.RepoDetails}>
          <Image style={styles.DetailIcon} source={starIcon} />
          <Text style={styles.DetailName}>{data.stargazers_count}</Text>
        </View>
        <View style={styles.RepoDetails}>
          <Image style={styles.DetailIcon} source={forkIcon} />
          <Text style={styles.DetailName}>{data.forks_count}</Text>
        </View>
        <View style={styles.RepoDetails}>
          <Image style={styles.DetailIcon} source={watchIcon} />
          <Text style={styles.DetailName}>{data.watchers_count}</Text>
        </View>
      </View>
      <View style={styles.ButtonContainer}>
        <CustomButton name="Go to repo" onClick={handleGotoRepo} />
      </View>
    </View>
  )
}

export default RepoDetailsComponent
