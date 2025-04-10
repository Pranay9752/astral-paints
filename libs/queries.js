// lib/queries.js
import client from './graphql-client';
const HOMEPAGE_QUERY = `
{
  pages(where: {name: "Homepage"}) {
    nodes {
      homepage {
        banners {
          bannersTitle
          bannerDescription
          bannerButton {
            title
            url
            target
          }
          bannerImage {
            node {
              sourceUrl
            }
          }
        }
        homeAboutTitle
        homeAboutSubtitle
        homeAboutDescription
        homeAboutButton {
          title
          url
          target
        }
        homeAboutVideoImage {
          node {
            sourceUrl
          }
        }
        homeAboutVideoUrl
        homeCategoryTitle
        homeCategorySubtitle
        homeServicesTitle
        homeServicesSubtitle
        homeColoursTitle
        homeColoursSubtitle
        homeColoursButton {
          title
          url
          target
        }
        homeJoinTitle
        homeJoinSubtitle
        homeJoinDescription
        homeJoinButton {
          title
          url
          target
        }
        homeJoinBackgroundImage {
          node {
            sourceUrl
          }
        }
        blogTitle
        blogSubtitle
        categories {
          link
          title
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
}`;

export async function getHomepageData() {
  const data = await client.request(HOMEPAGE_QUERY);
  return data.pages.nodes[0].homepage;
}
