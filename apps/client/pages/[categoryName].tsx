import { useRouter } from 'next/router'
import { FC } from 'react'
import { gql } from '../_graphql_'
import { useQuery } from '@apollo/client'
import Link from 'next/link'

const CATEGORY_JOKE = gql(/* GraphQL */`
query CategoryJoke($category: String!) {
  getRandomFromCategory(category: $category) {
    categories
    created_at
    icon_url
    id
    updated_at
    url
    value
  }
}
`)

interface Props {}

const CategoryPage: FC<Props> = (props) => {

  const {query} = useRouter()
  const categoryName = query.categoryName as string
  const {data, loading, error, refetch} = useQuery(CATEGORY_JOKE,{variables: {
    category: categoryName
  }})

  if (loading){
    return <div>loading</div>
  }

  if (error){
    return <div>
      <div>An error occurred</div>
      <div>{error.message}</div>
    </div>
  }

  if (!data?.getRandomFromCategory){
    return <div>
      <div>No joke found yet</div>
    </div>
  }

  const joke = data.getRandomFromCategory

  return (
    <div>
      <Link href='/'>Back</Link>
      <div>{categoryName}</div>
      <div>{joke.value}</div>
      <div>{joke.url}</div>
      <div>{joke.icon_url}</div>
      <button onClick={() => refetch()}>Reload</button>
      </div>
  )

}

export default CategoryPage