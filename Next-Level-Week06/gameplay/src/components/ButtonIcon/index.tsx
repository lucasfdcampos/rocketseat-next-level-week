import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import DiscordImg from '../../assets/discord.png';

type Props = {
  title?: string;
};

export function ButtonIcon({ title }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
