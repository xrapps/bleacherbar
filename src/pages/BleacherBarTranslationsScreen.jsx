import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import BigGameHeader from '../components/BigGameHeader';
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
      <BigGameHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'NBA Playoffs',
          '01.05 21:00',
          'Golden State Warriors \n' + 'Denver Nuggets',
        )}
        {renderBroadcast(
          'EuroLeague',
          '03.05 19:30',
          'Real Madrid \n' + 'Fenerbahçe',
        )}
        {renderBroadcast(
          'ACB Liga',
          '05.05 18:00',
          'Barcelona \n' + 'Valencia',
        )}
        {renderBroadcast(
          'CBA Finals',
          '07.05 20:15',
          'Beijing Ducks \n' + 'Guangdong Tigers',
        )}
        {renderBroadcast('NCAA Final', '09.05 22:00', 'Duke \n' + 'Gonzaga')}
        {renderBroadcast(
          'PBA',
          '11.05 17:45',
          'San Miguel Beermen \n' + 'Magnolia Hotshots',
        )}
        {renderBroadcast(
          'Australian',
          '13.05 19:00',
          'Sydney Kings \n' + 'Perth Wildcats',
        )}
        {renderBroadcast(
          'WNBA',
          '15.05 20:30',
          'Las Vegas Aces \n' + 'Chicago Sky',
        )}
        {renderBroadcast(
          'ABA League',
          '17.05 18:30',
          'Partizan \n' + 'Crvena Zvezda',
        )}
        {renderBroadcast(
          'BSL Turkey',
          '19.05 16:15',
          'Anadolu Efes \n' + 'Galatasaray',
        )}
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
