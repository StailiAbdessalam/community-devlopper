import { request, gql } from 'graphql-request'

const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
export const getPosts = async () => {
    const query = gql`
       query MyQuery {
            postsConnection {
                edges {
                node {
                    author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                    }
                    createdAt
                    slug
                    title
                    exercpt
                    featuredImages {
                    url
                    }
                    categories {
                    slug
                    name
                    }
                }
                }
            }
            }
    `;
    const results = await request(graphqlAPI, query);
    return results.postsConnection.edges;
}