import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import { COLORS} from "../../../constants";
import styles from "./nearbyjobs.style";
import useFetch from "./../../../hook/useFetch";
import NearbyJobCard from './../../common/cards/nearby/NearbyJobCard';

const NearbyJobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}> Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} /> // loader animation if it is loading
        ) : error ? (
          <Text>Something Went wrong</Text> //if error then display msg
        ) : (
          // <FlatList
          //   data={[1,2,3,4,5,6,7,8,9]}
          //   renderItem={({ item }) => (
          //     <PopularJobCard
          //       item = {item}
          //     />
          //   )}
          //   keyExtractor={item => item?.job_id}
          //   contentContainerStyle={{ columnGap: SIZES.medium }}
          //   horizontal
          // />
          data?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavgate={() => router.push(`/job-detail/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
