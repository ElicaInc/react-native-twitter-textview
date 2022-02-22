import * as React from "react";
import { View, Text, TextInput } from "react-native";
import TwitterTextView from "react-native-twitter-textview";

export default function App() {
  const [note, setNote] = React.useState('');
  return (
    <View
      style={StyleSheet.absoluteFill}
    >
        <TextInput
          onChangeText={(text) => setNote(text)}
          //value={note}
          multiline
          placeholder="Take a note with hashtags..."
          spellCheck={false}
          autoCorrect={false}
        >
          <TwitterTextView // 
            style={styles.twitterTextView}
            hashtagStyle={styles.hashtagStyle}
            extractMentions={true}
            mentionStyle={styles.mentionStyle}
            extractLinks={true}
            linkStyle={styles.linkStyle}
            extractEmails={true}
            emailStyle={styles.emailStyle}
          >
            {note}
          </TwitterTextView>
        </TextInput>
    </View>
  );
}
