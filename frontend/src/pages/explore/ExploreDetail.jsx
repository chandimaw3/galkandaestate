import { useParams, Link } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { initExploreDetail } from "../../behaviors/ExploreDetail.js";
import { getExperienceDetail } from "../../services/contentful.js";

import ExploreIcons from "./components/ExploreIcons.jsx";
import ExploreHeader from "./components/ExploreHeader.jsx";
import ExploreHero from "./components/ExploreHero.jsx";
import ExploreGallery from "./components/ExploreGallery.jsx";
import ExploreGoodToKnow from "./components/ExploreGoodToKnow.jsx";
import ExploreStory from "./components/ExploreStory.jsx";
import ExploreRelated from "./components/ExploreRelated.jsx";
import ExploreMiniCTA from "./components/ExploreMiniCTA.jsx";
import ExploreFooter from "./components/ExploreFooter.jsx";
import ExploreLightbox from "./components/ExploreLightbox.jsx";

export default function ExploreDetail({ slug: propSlug, data: propData }) {
  const params = useParams();
  const currentSlug =
    propSlug || params.slug || propData?.slug || "temple-of-the-tooth";

  const [data, setData] = useState(propData || null);
  const [loading, setLoading] = useState(!propData);

  useEffect(() => {
    if (propData) {
      setData(propData);
      setLoading(false);
      return;
    }
    let isMounted = true;
    setLoading(true);
    getExperienceDetail(currentSlug).then((res) => {
      if (isMounted) {
        setData(res);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [currentSlug, propData]);

  useEffect(() => {
    if (!data?.title) return;
    document.title = `${data.title} | Explore Kandy — Galkanda Estate`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.lead) metaDesc.content = data.lead;

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: data.title,
        description: data.lead,
        image: data.mainImage?.url,
        url: window.location.href,
        isAccessibleForFree: false,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: window.location.origin + "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Explore",
            item: window.location.origin + "/explore",
          },
          { "@type": "ListItem", position: 3, name: data.title },
        ],
      },
    ]);
    document.head.appendChild(schema);
    return () => schema.remove();
  }, [data]);

  useLayoutEffect(() => {
    if (!data || loading) return;
    const cleanup = initExploreDetail();
    return () => {
      if (typeof cleanup === "function") cleanup();
    };
  }, [data, loading]);

  if (loading) {
    return (
      <div
        className={String.raw`loader fixed top-0 right-0 bottom-0 left-0 [z-index:600] [background:var(--bg)] grid place-items-center`}
        aria-hidden="true"
      >
        <div
          className={String.raw`loader__inner [width:min(260px,60vw)] text-center`}
        >
          <span
            className={String.raw`loader__word text-xs [letter-spacing:.32em] uppercase font-medium [margin-bottom:18px] block [color:var(--ink)]`}
          >
            Galkanda Estate
          </span>
          <div
            className={String.raw`loader__line [height:1px] [background:var(--line)] overflow-hidden`}
          >
            <i
              className={String.raw`block h-full [background:var(--ink)] animate-pulse origin-left`}
            ></i>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <>
        <ExploreIcons />
        <ExploreHeader />
        <main
          className={String.raw`min-h-[70vh] flex items-center justify-center [padding-top:calc(var(--nav-h)_+_60px)] pb-24`}
          id="main"
        >
          <div className="text-center max-w-lg px-6">
            <span
              className={String.raw`label inline-flex items-center [gap:10px] text-xs [letter-spacing:.16em] uppercase font-medium [color:var(--muted)] mb-4`}
            >
              Explore Kandy
            </span>
            <h1
              className={String.raw`h-sm [font-family:var(--f-sans)] font-normal text-2xl md:text-3xl mb-5`}
            >
              Experience Not Found
            </h1>
            <p
              className={String.raw`text-sm [color:var(--muted)] [line-height:1.6] mb-8`}
            >
              The experience you are looking for is currently unavailable or has
              not been published yet.
            </p>
            <Link
              to="/explore"
              className={String.raw`inline-flex items-center [gap:8px] text-xs [letter-spacing:.14em] uppercase py-3 px-6 rounded-full [background:var(--dark)] [color:#fff] no-underline [transition:transform_.3s_var(--ease)] hover:[transform:translateY(-2px)]`}
            >
              Back to Explore
            </Link>
          </div>
        </main>
        <ExploreFooter />
      </>
    );
  }

  return (
    <>
      <ExploreIcons />
      <ExploreHeader />
      <main className={String.raw`block`} id="main">
        <ExploreHero data={data} />
        <ExploreGallery data={data} />
        <ExploreGoodToKnow data={data} />
        <ExploreStory data={data} />
        <ExploreRelated relatedExperiences={data.relatedExperiences} />
        <ExploreMiniCTA />
      </main>
      <ExploreFooter />
      <ExploreLightbox />
    </>
  );
}
