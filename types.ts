
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GroundingMetadata {
  groundingChunks?: Array<{
    web?: {
      uri: string;
      title: string;
    };
  }>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: Array<{ uri: string; title: string }>;
}
