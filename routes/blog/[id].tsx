import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "$gfm/mod.ts";
import { loadPost } from "../../utils/posts.ts";

export const handler: Handlers = {
  async GET(request, context) {
    const { id } = context.params;
    const post = await loadPost(id);

    return context.render({ post });
  },
};

export default function PagePost(props: PageProps) {
  const { post } = props?.data || {};

  return (
    <article class="p-6">
      <h1 class="text-2xl font-bold">{post?.title}</h1>
      <time>{Intl.DateTimeFormat("es").format(post?.date)}</time>
      <style>${CSS}</style>
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: post?.body }}
      />
    </article>
  );
}
