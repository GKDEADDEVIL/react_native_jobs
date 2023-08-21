import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import {useCallback, useState } from 'react'

import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from './../../components';
import { COLORS, icons, SIZES } from '../../constants'
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();

    const {data, isLoading, error, refetch} = useFetch('job-details', {job_id: params.id})
    const [refreshing, setRefreshing] = useState(false)
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen 
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerShadowVisible: false,
                headerbackVisible: true,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.left}
                        dimension="60%"
                        handlePress={() => router.back()}
                    />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.share}
                        dimension="60%"
                    />
                ),
                headerTitle: ""
            }}
        >



        </Stack.Screen>
    </SafeAreaView>
  )
}

export default JobDetails;