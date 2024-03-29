import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: "Austin's Blog",
    description: "Site description",
    site: 'https://blog.steveee.me',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>zh-cn</language>`,
  });
}
