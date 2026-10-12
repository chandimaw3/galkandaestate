function renderInlineMarkdown(text) {
  if (!text || typeof text !== "string") return text;

  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[2] && match[3]) {
      let href = match[3].trim();
      if (href.startsWith("//")) href = `https:${href}`;
      parts.push(
        <a
          key={match.index}
          href={href}
          className={String.raw`underline [text-underline-offset:3px] [color:var(--ink)] hover:[color:var(--earth)]`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[2]}
        </a>
      );
    } else if (match[4]) {
      parts.push(
        <strong
          key={match.index}
          className={String.raw`font-semibold [color:var(--ink)]`}
        >
          {match[4]}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

function parseMarkdownStory(raw) {
  if (!raw || typeof raw !== "string") return [];

  const rawChunks = raw
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean);
  const blocks = [];

  for (const chunk of rawChunks) {
    const lines = chunk
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    let currentLines = [];

    for (const line of lines) {
      // Check for markdown image: ![alt](url)
      const imgMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        if (currentLines.length > 0) {
          blocks.push({ type: "p", text: currentLines.join(" ") });
          currentLines = [];
        }
        let url = imgMatch[2].trim();
        if (url.startsWith("//")) url = `https:${url}`;
        const alt = imgMatch[1].trim();
        const isGenericName =
          !alt ||
          /^(photo-[\w-]+|image-[\w-]+|[\w-]+\.(jpg|jpeg|png|webp|avif))$/i.test(
            alt
          );
        blocks.push({
          type: "image",
          url,
          alt,
          caption: isGenericName ? "" : alt,
        });
        continue;
      }

      // Check for headings: ## or ###
      if (line.startsWith("### ") || line.startsWith("## ")) {
        if (currentLines.length > 0) {
          blocks.push({ type: "p", text: currentLines.join(" ") });
          currentLines = [];
        }
        blocks.push({
          type: "h3",
          text: line.replace(/^#{2,3}\s+/, ""),
        });
        continue;
      }

      currentLines.push(line);
    }

    if (currentLines.length > 0) {
      blocks.push({ type: "p", text: currentLines.join(" ") });
    }
  }

  return blocks;
}

export default function ExploreStory({ data }) {
  if (!data) return null;

  // Build the content blocks (paragraphs, images, and subheadings)
  let blocks = [];
  if (Array.isArray(data.storyParagraphs) && data.storyParagraphs.length > 0) {
    blocks = data.storyParagraphs.map((item) => {
      if (typeof item === "object" && item.text) return item;
      const str = String(item).trim();
      const imgMatch = str.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (imgMatch) {
        let url = imgMatch[2].trim();
        if (url.startsWith("//")) url = `https:${url}`;
        return { type: "image", url, alt: imgMatch[1].trim() };
      }
      if (str.startsWith("### ") || str.startsWith("## ")) {
        return { type: "h3", text: str.replace(/^#{2,3}\s+/, "") };
      }
      return { type: "p", text: str };
    });
  } else if (
    (typeof data.storyContent === "string" && data.storyContent.trim()) ||
    (typeof data.body === "string" && data.body.trim())
  ) {
    blocks = parseMarkdownStory(data.storyContent || data.body);
  } else {
    // Backward-compatibility with section-by-section fields
    if (data.aboutParagraph1) {
      blocks.push({ type: "p", text: data.aboutParagraph1 });
    }
    if (data.section2Heading) {
      blocks.push({ type: "h3", text: data.section2Heading });
    }
    if (data.section2Paragraph) {
      blocks.push({ type: "p", text: data.section2Paragraph });
    }
  }

  if (
    blocks.length === 0 &&
    !data.aboutTitle &&
    !data.whyWeRecommend &&
    !data.galkandaTip
  ) {
    return null;
  }

  return (
    <section
      className={String.raw`sec sec--tight aarticle relative [padding-top:calc(var(--sec)_*_.6)] pr-0 [padding-bottom:calc(var(--sec)_*_.6)] pl-0`}
      aria-labelledby="about-h"
    >
      <div
        className={String.raw`container-wide aarticle__grid max-w-400 mt-0 [margin-right:auto] mb-0 [margin-left:auto] pt-0 [padding-right:var(--gutter)] pb-0 [padding-left:var(--gutter)] grid gap-9 min-[992px]:[grid-template-columns:minmax(0,7fr)_minmax(0,4fr)] min-[992px]:[column-gap:6vw]`}
      >
        <article className={String.raw`prose [max-width:40em]`}>
          <span
            className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [margin-bottom:22px] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)]`}
          >
            The Experience
          </span>
          {data.aboutTitle && (
            <h2
              className={String.raw`h-md [font-family:var(--f-sans)] font-normal [letter-spacing:-.045em] mt-0 mr-0 ml-0 text-inherit text-3xl lg:text-4xl xl:text-5xl [line-height:1.02] [margin-bottom:22px]`}
              id="about-h"
              data-fade=""
            >
              {data.aboutTitle}
            </h2>
          )}

          {blocks.map((block, idx) => {
            if (block.type === "h3") {
              return (
                <h3
                  key={idx}
                  className={String.raw`h-sm [font-family:var(--f-sans)] font-normal text-inherit text-2xl 2xl:text-3xl [letter-spacing:-.03em] [line-height:1.15] [margin-top:30px] mr-0 mb-3 ml-0`}
                  data-fade=""
                >
                  {block.text}
                </h3>
              );
            }

            if (block.type === "image") {
              return (
                <figure
                  key={idx}
                  className={String.raw`my-8 overflow-hidden [border-radius:var(--r-sm)] [background:var(--stone)]`}
                  data-fade=""
                >
                  <img
                    src={block.url}
                    alt={block.alt || data.aboutTitle || ""}
                    className={String.raw`w-full h-auto max-h-[520px] object-cover block [border-radius:var(--r-sm)]`}
                    loading="lazy"
                  />
                  {block.caption && (
                    <figcaption
                      className={String.raw`pt-2.5 pb-1 text-xs [color:var(--muted)] [letter-spacing:.03em] italic`}
                    >
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            return (
              <p
                key={idx}
                className={String.raw`text-base [line-height:1.75] mt-0 mr-0 [margin-bottom:18px] ml-0 [color:#2b2b25]`}
                data-fade=""
              >
                {renderInlineMarkdown(block.text)}
              </p>
            );
          })}
        </article>

        {(data.whyWeRecommend || data.galkandaTip) && (
          <aside
            className={String.raw`aarticle__aside min-[992px]:sticky min-[992px]:[top:calc(var(--nav-h)_+_40px)] min-[992px]:[align-self:start]`}
          >
            {data.whyWeRecommend && (
              <div
                className={String.raw`why [padding-top:22px] pr-0 [padding-bottom:22px] pl-0 [border-top:1px_solid_var(--line)]`}
                data-fade=""
              >
                <span
                  className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] [&::before]:[content:""] [&::before]:[width:18px] [&::before]:[height:1px] [&::before]:[background:currentColor] [&::before]:[opacity:.6] [.is-dark_&]:[color:rgba(244,241,234,.66)] [margin-bottom:10px]`}
                >
                  Why We Recommend It
                </span>
                <p
                  className={String.raw`mt-0 mr-0 mb-0 ml-0 text-base [line-height:1.6]`}
                >
                  {data.whyWeRecommend}
                </p>
              </div>
            )}

            {data.galkandaTip && (
              <div
                className={String.raw`gtip flex gap-4 items-start [padding-top:22px] pr-0 [padding-bottom:22px] pl-0 [border-top:1px_solid_var(--line)] [border-bottom:1px_solid_var(--line)]`}
                data-fade=""
              >
                <span
                  className={String.raw`gtip__mark w-10 h-10 flex-none rounded-full [background:var(--bg-warm)] grid place-items-center [color:var(--green)]`}
                  aria-hidden="true"
                >
                  <svg
                    className={String.raw`brand__mark flex-none [fill:none] [stroke:currentColor] [stroke-width:1.4] [stroke-linejoin:round] [stroke-linecap:round] [transition:transform_.6s_var(--ease)] w-5 [height:13px]`}
                    viewBox="0 0 28 18"
                  >
                    <path d="M1.5 16.5 9.6 4.2l4.6 6.6 3.4-4.4 8.9 10.1z"></path>
                    <path d="M7.4 7.6l2.2 1.6 1.9-1.4"></path>
                  </svg>
                </span>
                <div>
                  <span
                    className={String.raw`gtip__k block text-xs [letter-spacing:.2em] uppercase font-medium [color:var(--earth)] [margin-bottom:6px]`}
                  >
                    Galkanda Tip
                  </span>
                  <p
                    className={String.raw`mt-0 mr-0 mb-0 ml-0 [font-family:var(--f-serif)] italic text-xl [line-height:1.4]`}
                  >
                    {data.galkandaTip}
                  </p>
                </div>
              </div>
            )}
          </aside>
        )}
      </div>
    </section>
  );
}
