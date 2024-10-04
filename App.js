import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {ERNHoleViewTimingFunction, RNHoleView} from 'react-native-hole-view';

const animationSettings = {
  timingFunction: ERNHoleViewTimingFunction.EASE_IN_OUT,
  duration: 200,
};

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const App = () => {
  const [animation, setAnimation] = useState({...animationSettings});

  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.lighter}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.lighter}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor: Colors.lighter}}>
          <Header />
          <View
            style={{
              backgroundColor: Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
      <RNHoleView
        style={styles.holeBackground}
        holes={[{x: 100, y: 400, height: 50, width: 200}]}
        animation={animation}
        onAnimationFinished={() => setAnimation(undefined)}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  holeBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000088',
  },
});
