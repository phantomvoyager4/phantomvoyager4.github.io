import { useEffect } from "react";

const SEO = ({
  title = "Kashiami",
  description = "Official website of Kashiami - Artist, Music Producer, and Creative. Explore my latest music, projects, and artistic journey.",
  image = "/favicon.ico",
  url = window.location.href,
  type = "website",
  author = "Kashiami",
  keywords = "Kashiami, music, artist, producer, creative, songs, albums",
}) => {
  useEffect(() => {
    document.title = title === "Kashiami" ? title : `${title} | Kashiami`;

    const setMetaTag = (name, content, property = false) => {
      const attribute = property ? "property" : "name";
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", author);
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");
    setMetaTag("robots", "index, follow");

    // Set canonical tag
    let canonicalTag = document.querySelector("link[rel='canonical']");
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = url;

    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", image, true);
    setMetaTag("og:url", url, true);
    setMetaTag("og:type", type, true);
    setMetaTag("og:site_name", "Kashiami", true);

    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

    setMetaTag("music:musician", "Kashiami", true);
    setMetaTag("application-name", "Kashiami");
    setMetaTag("theme-color", "#212121");

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      name: "Kashiami",
      alternateName: "Kashiami",
      description: description,
      url: url,
      image: image,
      sameAs: [
        "https://linktr.ee/kashiami",
        "https://music.youtube.com/channel/UC-Cs85x5T2AQ5db0cKAMWuA",
        "https://music.apple.com/us/artist/kashiami/1777722735",
        "https://open.spotify.com/artist/7yFxrWhhvzk9OQz2aTIhul",
      ],
      genre: "Music",
      "@id": url,
    };

    let structuredDataScript = document.querySelector("#structured-data");
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.id = "structured-data";
      structuredDataScript.type = "application/ld+json";
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

    return () => {};
  }, [title, description, image, url, type, author, keywords]);

  return null;
};

export const HomePageSEO = (props) => (
  <SEO
    title="Home"
    description="Welcome to Kashiami's official website. Discover my latest music, upcoming projects, and artistic journey. Stream my songs on all major platforms."
    keywords="Kashiami, home, music, artist, latest songs, new releases"
    {...props}
  />
);

export const AboutPageSEO = (props) => (
  <SEO
    title="About Me"
    description="Learn more about Kashiami - my musical journey, influences, creative process, and the story behind the music. Get to know the artist behind the sound."
    keywords="Kashiami, about, biography, artist story, music journey, creative process"
    url="https://kashiami.com/about"
    {...props}
  />
);

export const ContactPageSEO = (props) => (
  <SEO
    title="Contact"
    description="Get in touch with Kashiami for collaborations, bookings, inquiries, or just to say hello. Fill out the contact form and I'll get back to you soon."
    keywords="Kashiami, contact, collaboration, booking, inquiry, get in touch"
    url="https://kashiami.com/contact"
    {...props}
  />
);

export const StatsPageSEO = (props) => (
  <SEO
    title="Stats"
    description="Check out Kashiami's streaming statistics, music metrics, and performance across all major platforms including Spotify, Apple Music, and YouTube."
    keywords="Kashiami, stats, statistics, streaming, metrics, music charts"
    url="https://kashiami.com/stats"
    {...props}
  />
);

export const useSEO = () => {
  const updateSEO = (seoProps) => {
    const event = new CustomEvent("seo-update", { detail: seoProps });
    window.dispatchEvent(event);
  };

  return { updateSEO };
};

export default SEO;
