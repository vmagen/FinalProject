import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logo: {
    width: 150,
    height: 80,
    margin: 20
  },
  scrollView: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:30,
    
  },
  rowEvents:{
    flexDirection: 'row',
    alignItems: 'center',
    padding:10
  },
  halfRow: {
    flex: 0.5,
    justifyContent: 'center'
  },
  h4Text: {
    textAlign: 'right',
    padding: 20,
    fontWeight:'bold'
  },
  event: {
    width: 140,
    height: 100,
    margin: 15
  },
  winery: {
    alignItems:'center',
    width: 60,
    height: 80,
    margin: 15,
    padding:20
  },
  wine: {
    alignItems:'center',
    width: 80,
    height: 140,
    margin: 15,
    padding:20
  }


});