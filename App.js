
import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/Components/Title';
import Form from './SRC/Components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
     <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
