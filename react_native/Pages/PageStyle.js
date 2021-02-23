import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  iframe:{
    display:'none'
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
    alignSelf:'center'

  },
  rowEvents: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  halfRow: {
    flex: 0.5,
    justifyContent: 'center',
    margin:5
  },
  h4Text: {
    textAlign: 'right',
    padding: 20,
    fontWeight: 'bold'
  },
  event: {
    width: 140,
    height: 100,
    margin: 15
  },
  winery: {
    alignItems: 'center',
    width: 60,
    height: 80,
    margin: 15,
    padding: 20
  },
  wine: {
    alignItems: 'center',
    width: 80,
    height: 140,
    margin: 15,
    padding: 20
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
  },
  inButtonActive: {
    textAlign: 'center',
    color: '#691A1A',
    padding:10,
    fontWeight:'bold'
  },
  inButtonInActive: {
    textAlign: 'center',
    color: 'white',
    padding:10,
    fontWeight:'bold',
  },
  toggleBoxActive: {
    width: 172,
    height: 40,
    backgroundColor: '#691A1A',
    borderColor: '#691A1A',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopRightRadius:5,
    borderBottomRightRadius: 5
  },
  toggleBoxInActive:{
    width: 172,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#691A1A',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopLeftRadius:5,
    borderBottomLeftRadius: 5
  },
  button:{
    backgroundColor:'#691A1A',
    color:'white',
  },
  input:{
    width: 250,
    alignSelf: 'center',
    textAlign:'right'
  }
});