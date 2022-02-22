import React from "react";
import PropTypes from "prop-types";
import { Linking, Platform, Text, StyleSheet, Alert, TouchableHighlight } from "react-native";
import unionBy from "lodash/unionBy";
const styles = StyleSheet.create({
  linkStyle: {
    color: "#2980b9"
  }
});

const PATTERN_HASHTAG = /(^|\s+)(#[a-z\d-_]+|[#＃][a-z\d-_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f]+)/gi;
const PATTERN_MENTION = /(^|\s)(@[a-z\d-_]+|[@＠][a-z\d-_\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u024f\u0253-\u0254\u0256-\u0257\u0300-\u036f\u1e00-\u1eff\u0400-\u04ff\u0500-\u0527\u2de0-\u2dff\ua640-\ua69f\u0591-\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05d0-\u05ea\u05f0-\u05f4\ufb12-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4f\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06de-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u0750-\u077f\u08a2-\u08ac\u08e4-\u08fe\ufb50-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\u200c-\u200c\u0e01-\u0e3a\u0e40-\u0e4e\u1100-\u11ff\u3130-\u3185\ua960-\ua97f\uac00-\ud7af\ud7b0-\ud7ff\uffa1-\uffdc\u30a1-\u30fa\u30fc-\u30fe\uff66-\uff9f\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u3041-\u3096\u3099-\u309e\u3400-\u4dbf\u4e00-\u9fff\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2f800-\u2fa1f]+)/gi;
const PATTERN_EMAIL = /(^|\s)([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
const PATTERN_URL = /(^|\s)(https?:\/\/(?:www\.|(?!www))[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3][-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3-]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]\.[^\s、。>)]{2,}|www\.[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3][-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3-]+[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]\.[^\s、。>)]{2,}|https?:\/\/(?:www\.|(?!www))[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+\.[^\s、。>)]{2,}|www\.[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+\.[^\s、。>)]{2,})/gi; // 日本語　/https?:\/\/[-_.!~*\'()a-zA-Z0-9;\/?:\@&=+\$,%#\u3000-\u30FE\u4E00-\u9FA0\uFF01-\uFFE3]+/gi;
const matchesWith = (str, pattern) => {
  let match = null;
  const arr = [];
  while ((match = pattern.exec(str)) != null) {
    arr.push([match, pattern]);
  }
  return arr;
};

const splitStringByMatches = (str, matches) => {
  const arr = [];
  let o = 0;

  matches.forEach(([match, pattern]) => {
    const { index } = { ...match };
    arr.push([str.slice(o, index), null]);
    arr.push([match[1], null]);
    arr.push([match[2], pattern]);
    o = index + match[0].length;
  });

  arr.push([str.slice(o, str.length), null]);
  return arr.filter(([s]) => s.length > 0);
};

const TwitterTextView = ({
  children = "",
  extractHashtags,
  onPressHashtag,
  hashtagStyle,
  extractMentions,
  onPressMention,
  mentionStyle,
  extractLinks,
  onPressLink,
  linkStyle,
  extractEmails,
  onPressEmail,
  emailStyle,
  ...extraProps
}) => {
  const str = (typeof children === "string" && children) || "";

  const patterns = [
    !!extractHashtags && PATTERN_HASHTAG,
    !!extractMentions && PATTERN_MENTION,
    !!extractEmails && PATTERN_EMAIL,
    !!extractLinks && PATTERN_URL
  ].filter(e => !!e);

  const matches = []
    .concat(...patterns.map(pattern => matchesWith(str, pattern)))
    .filter(e => !!e)
    .sort(([a], [b]) => ({ ...a }.index - { ...b }.index));

  const onPress = {
    [PATTERN_HASHTAG]: onPressHashtag,
    [PATTERN_MENTION]: onPressMention,
    [PATTERN_EMAIL]: onPressEmail,
    [PATTERN_URL]: onPressLink
  };
  const style = {
    [PATTERN_HASHTAG]: hashtagStyle,
    [PATTERN_MENTION]: mentionStyle,
    [PATTERN_EMAIL]: emailStyle,
    [PATTERN_URL]: linkStyle
  };

  return (
    <Text {...extraProps}>
      {splitStringByMatches(str, matches).map(([str, pattern], i) => {
        if (pattern){
          return (
            <Text
              key={i}
              style={style[pattern]}
              onPress={(e) => {
                const handle = onPress[pattern];
                if (handle) {
                  return handle(e, str);
                }
                return undefined;
              }}
              children={str}
            />
          );
        } else {
          return (
            <Text
              key={i}
              children={str}
            />
          );
        }
      })}
    </Text>
  );
};

const textStyleProps = PropTypes.oneOfType([
  PropTypes.shape({}),
  PropTypes.number
]);

TwitterTextView.propTypes = {
  children: PropTypes.string,
  extractHashtags: PropTypes.bool,
  onPressHashtag: PropTypes.func,
  hashtagStyle: textStyleProps,
  extractMentions: PropTypes.bool,
  onPressMention: PropTypes.func,
  mentionStyle: textStyleProps,
  extractLinks: PropTypes.bool,
  onPressLink: PropTypes.func,
  linkStyle: textStyleProps
};

TwitterTextView.defaultProps = {
  children: "",
  extractHashtags: true,
  onPressHashtag: (e, hashtag) => {
    const msg = `Hashtag: "${hashtag}"`;
    if (Platform.OS !== "web") {
      Alert.alert(msg);
    } else {
      console.log(msg);
    }
  },
  hashtagStyle: styles.linkStyle,
  extractMentions: true,
  onPressMention: (e, mention) => {
    const msg = `Mention: "${mention}"`;
    if (Platform.OS !== "web") {
      Alert.alert(msg);
    } else {
      console.log(msg);
    }
  },
  mentionStyle: styles.linkStyle,
  extractLinks: true,
  onPressLink: (e, url) =>
    Linking.canOpenURL(url).then(canOpen => !!canOpen && Linking.openURL(url)),
  linkStyle: styles.linkStyle,
  extractEmails: true,
  onPressEmail: (e, url) =>
    Linking.canOpenURL(`mailto:${url}`).then(
      canOpen => !!canOpen && Linking.openURL(`mailto:${url}`)
    ),
  emailStyle: styles.linkStyle
};

export default TwitterTextView;
