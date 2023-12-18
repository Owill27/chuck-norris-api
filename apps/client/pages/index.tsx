import { useQuery } from '@apollo/client'
import { FC } from 'react'
import { gql } from '../_graphql_';
import NextLink from 'next/link'

const GET_CATEGORIES = gql(/* GraphQL */ `
  query Categories {
    getCategories
  }
`);

interface Props {

}

const IndexPage: FC<Props> = () => {
  const { loading, data: categories , error, } = useQuery(
    GET_CATEGORIES,
  );

  if (loading){
    return <div>loading</div>
  }

  if (error){
    return <div>
      <div>An error occurred</div>
      <div>{error.message}</div>
    </div>
  }

  if (!categories?.getCategories?.length){
    return <div>
      <div>No categories yet</div>
    </div>
  }

  return (
    <div>
      <div>Categories</div>
      {
        categories.getCategories.map(c => <div key={c}>
          <NextLink href={`/${c}`}>{c}</NextLink>
          </div>)
      }
    </div>
  )

}

export default IndexPage