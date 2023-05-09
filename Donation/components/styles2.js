import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const getBackgroundColor = (item) => {
  let color;
  
  if (item === "Blood") {
      color = 'darkred';
  } else if (item === "Money") {
      color = 'yellow';
  } else if (item === "Clothes") {
      color = 'green';
  }
  return color;
};

const styles = StyleSheet.create({

  orgbtnContainer:{
    marginLeft: 50,
    marginTop: 20,
    width: 80,
    height: 80,
    borderRadius: SIZES.large / 1.25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: 'black',
  },

  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large / 1.25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 24,
    borderColor: 'black',
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),

  container: {
    width: "100%",
  },

  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userName: {
    textAlign: 'center',
    fontFamily: FONT.regular,
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginTop: 10,
    marginBottom: 10,
    color: 'black'
  },

  normal: {
    textAlign: 'left',
    fontFamily: FONT.regular,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginBottom: 10,
  },

  normal2: {
    textAlign: 'left',
    fontFamily: FONT.regular,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginBottom: 10,
    marginleft: 20,
  },

  welcomeMessage: {
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 20,
    marginBottom: 10,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeDonationType, item) => ({
    marginLeft: 57,
    marginTop: 20,
    backgroundColor: getBackgroundColor(item),
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: SIZES.medium,
    borderWidth: 2,
    borderColor: activeDonationType === item ? 'green' : 'black',
  }),
  tabText: (activeDonationType, item) => ({
    fontFamily: FONT.large,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    alignSelf: "center",
    padding: 10,
    fontWeight: 'bold',
    //color: activeDonationType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;
