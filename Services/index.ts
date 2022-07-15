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



export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
         posts(orderBy: createdAt_ASC, last: 3) {
          title
          featuredImages {
             url
          createdAt
          }
          slug
  }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};


export const getSimilarPosts = async (categories: any, slug: any) => {
  const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
          last: 3
        ) {
          title
          featuredImages {
            url
          }
          createdAt
          slug
        }
      }
    `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};



export const getCategories = async () => {
  const query = gql`
  query GetCategories{
    categories{
      name
      slug
    }  
}`
  const result = await request(graphqlAPI, query);
  return result.categories;


}





export const getPostDetails = async (slug: any) => {
  const query = gql`
 query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
    title
    exercpt
    featuredImages {
      url
    }
    author {
      name
      bio
      photo {
        url
      }
      createdAt
    }
    content {
      raw
    }
    slug
    categories {
      name
      slug
    }
  }
}
`;
  const result = await request(graphqlAPI, query, {slug});


  return result.post;
};


export const submitComment = async (obj:any) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj), 
  });

  return result.json();
};


export const getComments = async (slug:any) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
 
  return result.comments;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImages {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};