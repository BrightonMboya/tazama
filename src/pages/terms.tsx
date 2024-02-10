
import markdownToHtml from "~/lib/markdown-to-html";
import { getPostBySlug } from "~/lib/markddownConfig";
import markdownStyles from "~/styles/markdownStyles.module.css"

const PostBody = ({ content }: any) => {
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default function Page({ post }: any) {
  return (
    <>
      <div className="mx-auto  max-w-7xl px-4 pt-20 text-lg text-[#757371] md:px-8">
        <article>
          <PostBody content={post.content} />
        </article>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const post = getPostBySlug("terms", [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
