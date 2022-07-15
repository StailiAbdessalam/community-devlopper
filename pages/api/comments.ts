import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI: any = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;
/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function comments(req: any, res: any) {
    console.log(req)

    const graphQLClient = new GraphQLClient((graphqlAPI), {
        headers: {
            authorization: `Bearer ${graphcmsToken}`,
        },
    });

    
    const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) 
    }
  `;


    try {
        const result: any = await graphQLClient.request(query, {
            name: req.body.name,
            email: req.body.email,
            comment: req.body.comment,
            slug: req.body.slug,
        });
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send(error);
    }

}
