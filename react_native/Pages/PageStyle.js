import { StyleSheet, Dimensions } from 'react-native'


const { height } = Dimensions.get("screen");
let eventHeight = height * 0.2;
let wineryHeight = height * 0.15;

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
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10

  },
  rowEvents: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  halfRow: {
    flex: 0.5,
    justifyContent: 'center',
    margin: 5
  },
  h4Text: {
    textAlign: 'right',
    padding: 10,
    fontWeight: 'bold'
  },
  event: {
    width: 140,
    height: eventHeight,
    margin: 15
  },
  winery: {
    alignItems: 'center',
    width: 100,
    height: wineryHeight,
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
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold'
  },
  inButtonActive: {
    color: '#691A1A',
  },
  inButtonInActive: {
    color: 'white',
  },
  toggleBox: {
    width: 172,
    height: 40,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  toggleBoxActive: {
    backgroundColor: '#691A1A',
    borderColor: '#691A1A',
  },
  toggleBoxInActive: {
    backgroundColor: 'white',
    borderColor: '#691A1A',
  },
  button: {
    backgroundColor: '#691A1A',
    color: 'white',
    padding: 10,
    margin: 15
  },
  input: {
    height: 40,
    borderColor: "#000000",
    marginBottom: 10
  },
  textInput: {
    marginTop: 10,
    color: '#691A1A',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  avatar: {
    borderWidth: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  avatarReg: {
    borderColor: '#691A1A',
  },
  avatarGold: {
    borderColor: '#FFD700',
  },
  wineryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  wineRate: {
    height:100,
    width:100,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: '#691A1A',
    color:'#691A1A',
    borderStyle: 'solid',
    marginLeft:40,
    fontSize:30,
    textAlign:'center',
    textAlignVertical:'center',
    paddingTop:25,
  }
});