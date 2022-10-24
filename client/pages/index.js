import Link from 'next/link'
import dynamic from 'next/dynamic'
import client from "../lib/with-apollo"
import { ApolloProvider} from '@apollo/client'

const Details = dynamic(() => import('../components/details'), {
  loading: () => <p>Loading...</p>,
})

const Page = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        Welcome,
        <br /><br />
        <Link href="/about"><a>About</a></Link>
        <br /><br />
        <Link href="/user"><a>User Details</a></Link>
       
      </div>
    </ApolloProvider>
  )
}



export default Page
