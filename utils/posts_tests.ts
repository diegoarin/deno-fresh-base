import { loadPost } from "./posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";

Deno.test("loadPost() returns null if the post does not exist", async () => {
  const post = await loadPost("non-existent");
  assertEquals(post, null);
});

Deno.test("loadPost() returns a Post if the post does exist", async () => {
  const post = await loadPost("hello-world");
  assertEquals(post?.id, "hello-world");
  assertEquals(post?.title, "First post");
  assertEquals(post?.date, new Date("2022-12-18"));
  assertEquals(post?.excerpt, "This is my first post");
});
