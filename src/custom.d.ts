declare module "*.svg" {
  const content: any;
  export default content;
}

interface FeedResponse {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items: FeedImage[];
}
interface FeedImage {
  title: string;
  link: string;
  media: { m: string };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}
