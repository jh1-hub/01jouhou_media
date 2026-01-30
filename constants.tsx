
import { InfoSource, InfoTypeLabel } from './types';

// Centralized configuration for information sources used in the comparative exercise.
export const INFO_SOURCES: Record<string, InfoSource> = {
  A: {
    id: 'A',
    title: '校長先生の話',
    date: '7月21日',
    source: '校長先生から直接聞いた話',
    category: InfoTypeLabel.PRIMARY,
    description: '音声での情報',
    icon: 'mic'
  },
  B: {
    id: 'B',
    title: 'PTA広報誌',
    date: '7月26日',
    source: 'PTA広報誌（紙面）',
    category: InfoTypeLabel.SECONDARY,
    description: '印刷物での情報',
    icon: 'newspaper'
  },
  C: {
    id: 'C',
    title: 'SNSの投稿',
    date: '8月3日',
    source: 'SNS（個人のつぶやき）',
    category: InfoTypeLabel.TERTIARY,
    description: 'インターネット上の情報',
    icon: 'message-square'
  }
};

export const PRINCIPAL_MESSAGE = "来年度の修学旅行についてですが、今、新しい行き先を検討しています。みなさんの希望も聞きたいので、後日アンケートを取ります。詳しい行き先は、アンケートの結果も見ながら決めていきます。";
export const NEWSLETTER_CONTENT = "来年度からは修学旅行の行き先を変更し、候補を隣県にも含める予定です。生徒へのアンケートを実施し、その結果をもとに決定します。";
export const TWEET_CONTENT = "修学旅行が隣の県になるらしい。マジ？ #修学旅行";
