
// Shared types for the application to ensure consistent information handling.

/**
 * Labels for the different levels of information sources according to information literacy standards.
 */
export enum InfoTypeLabel {
  PRIMARY = '一次情報',
  SECONDARY = '二次情報',
  TERTIARY = '三次情報',
}

/**
 * Interface representing a source of information.
 */
export interface InfoSource {
  id: string;
  title: string;
  date: string;
  source: string;
  category: InfoTypeLabel | string;
  description: string;
  icon: 'mic' | 'newspaper' | 'message-square';
  // content is the main text content of the information source
  content?: string;
  // replies are specific to social media posts (InfoSource id: A)
  replies?: Array<{
    user: string;
    id: string;
    text: string;
  }>;
}
