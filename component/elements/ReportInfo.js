import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'react-native-collapsible-tab-view'
import Machine from '../machine'

const ReportInfo = () => {
  return (
    <View>
      {/* react-native-collapsible-tab-view library */}
      <Tabs.Container>
        <Tabs.Tab name="予約">
          <Tabs.ScrollView>
          </Tabs.ScrollView>
        </Tabs.Tab>
        <Tabs.Tab name="FW">
          <View style={styles.container}></View>
        </Tabs.Tab>
        <Tabs.Tab name="OAF">
          <Tabs.ScrollView><View><Text>Tes</Text></View></Tabs.ScrollView>
        </Tabs.Tab>

      </Tabs.Container>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red'
    },
});



export default ReportInfo