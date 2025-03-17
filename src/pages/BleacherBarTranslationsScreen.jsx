import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BleacherBarHeader from '../components/BleacherBarHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BleacherBarHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NHL', '03.04 19:00', 'Montreal Canadiens \n' + 'Toronto Maple Leafs')}
        {renderBroadcast('KHL', '06.04 21:30', 'CSKA Moscow \n' + 'SKA St. Petersburg')}
        {renderBroadcast('SHL', '09.04 18:00', 'Färjestad \n' + 'Frölunda')}
        {renderBroadcast('Liiga', '12.04 20:45', 'HIFK \n' + 'Tappara')}
        {renderBroadcast('DEL', '15.04 23:15', 'Eisbären Berlin \n' + 'Adler Mannheim')}
        {renderBroadcast('NLA', '18.04 17:30', 'ZSC Lions \n' + 'HC Lugano')}
        {renderBroadcast('Extraliga', '21.04 16:15', 'HC Pardubice \n' + 'HC Sparta Praha')}
        {renderBroadcast('EIHL', '24.04 19:45', 'Belfast Giants \n' + 'Cardiff Devils')}
        {renderBroadcast('IIHF', '27.04 22:00', 'Canada \n' + 'Sweden')}
        {renderBroadcast('CHL', '30.04 20:00', 'London Knights \n' + 'Windsor Spitfires')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 20,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.main,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
    textAlign: 'center',
  },
});
