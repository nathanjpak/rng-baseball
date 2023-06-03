open ReactNative

@react.component
let app = () => {
  <SafeAreaView>
    <StatusBar />
    <ScrollView contentInsetAdjustmentBehavior=#automatic >
      <Text>{"Baseball" -> React.string}</Text>
    </ScrollView>
  </SafeAreaView>
}