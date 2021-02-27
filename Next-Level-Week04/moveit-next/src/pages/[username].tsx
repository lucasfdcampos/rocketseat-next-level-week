import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import SwitchReact from '../components/Switch';

import styles from '../styles/pages/Dashboard.module.css';
import React from 'react';
import Switch from '../components/Switch';

interface UserGithub {
  name: string;
  avatar_url: string;
}

interface ProfileData {
  user: UserGithub;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Dashboard(props: ProfileData) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <div className={styles.switch}>
          <Switch />
        </div>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile user={props.user} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const { username } = params;

  const { level, currentExperience, challengesCompleted } = req.cookies;

  const response = await fetch(`https://api.github.com/users/${username}`);

  const user = await response.json();

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
