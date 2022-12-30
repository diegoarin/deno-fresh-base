import { listPosts } from "../utils/posts.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "../types.d.ts";

export const handler: Handlers = {
  async GET(req: Request, context) {
    const posts = await listPosts();

    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;
  return (
    <>
      <main class="p-4">
        <h1 class="text-4xl font-bold">Novak's Blog</h1>
        {posts.map((post: Post) => (
          <article class="p-4">
            <h2 class="text-2xl font-bold">
              <a
                class="underline hover:text-blue-500"
                href={`/blog/${post.id}`}
              >
                {post.title}
              </a>
            </h2>
            <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
          </article>
        ))}
      </main>
    </>
  );
}
