import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const [like, setLike] = useState(false);
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="my-2 px-2 py-1 border(gray-100 2) hover:bg-gray-200"
      onClick={() => setLike((value) => !value)}
    >
      {like ? "🖤 Ya no me gusta" : "❤️ Me gusta"}
    </button>
  );
}
