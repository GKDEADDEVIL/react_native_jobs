import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import {checkImageURL} from '../../../../utils'

const PopularJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate} >
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          source={{uri: checkImageURL(job.employer_logo) ? job.employer_logo : 'https://images.ctfassets.net/pdf29us7flmy/6CUCq15966GPkPR9gJbPSP/2fd7431ed38ec4fb8ca16365868e7c8e/Virtual_Interview_8.png?w=720&q=100&fm=jpg'}}
          resize='contain'
          style = {styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard;