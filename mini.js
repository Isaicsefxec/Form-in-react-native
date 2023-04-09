import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const MiniScreenText = ({ text, maxLength }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  if (!showFull && text.length > maxLength) {
    const truncatedText = text.substring(0, maxLength);
    return (
      <TouchableOpacity onPress={toggleShowFull}>
        <Text>{truncatedText}... Click to show full</Text>
      </TouchableOpacity>
    );
  }

  return <Text>{text}</Text>;
};

export default MiniScreenText;
