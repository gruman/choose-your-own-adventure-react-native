import { StyleSheet } from "react-native";

const bg = '#222';
const color = '#fff';
const font = 'Helvetica';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: bg
  },
  footer: {
    justifyContent: 'flex-end',
    flex: 1
  },
  logo: {
    fontFamily: "Lato_700Bold",
    fontSize: 32,
    color: color,
    marginBottom: 10
  },
  logoHolder: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: color
  },
  sub: {
    color: color,
    fontSize: 18,
    fontFamily: "Lato_400Regular_Italic"
  },
  title: {
    fontFamily: "Lato_700Bold",
    fontSize: 24,
    color: color,
    marginBottom: 20
  },
  text: {
    fontFamily: font,
    fontSize: 18,
    lineHeight: 24,
    color: color,
    marginBottom: 20
  },
  list: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: color
  },
  listText: {
    fontFamily: font,
    fontSize: 24,
    lineHeight: 24,
    color: color,
    marginBottom: 10
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color,
    padding: 10,
    fontSize: 18,
    fontFamily: font,
    color: color
  }
});

export default styles;