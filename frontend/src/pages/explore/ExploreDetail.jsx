import { useParams } from "react-router-dom";
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

export default function ExploreDetail({ slug: propSlug, data: propData }) {
  const params = useParams();
  const currentSlug =
    propSlug || params.slug || propData?.slug || "temple-of-the-tooth";

  const [data, setData] = useState(() => {
    if (propData) return propData;
    return getExperienceDetail(currentSlug, { synchronousFallbackOnly: true });
  });

  useEffect(() => {
    if (propData) {
      setData(propData);
      return;
    }
    let isMounted = true;
    getExperienceDetail(currentSlug).then((res) => {
      if (isMounted && res) {
        setData(res);
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

  useLayoutEffect(initExploreDetail, [data]);

  if (!data) {
    return null;
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
    </>
  );
}
