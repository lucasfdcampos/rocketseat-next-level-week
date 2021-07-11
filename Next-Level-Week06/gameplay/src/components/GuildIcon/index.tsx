import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

type Props = {};

export function GuildIcon({}: Props) {
  const uri = '../assets/discord.png';

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
