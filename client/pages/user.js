import Link from 'next/link'
import Details from '../components/details'
import { ApolloProvider } from '@apollo/client'
import client from "../lib/with-apollo"

export const User = () => (
    <ApolloProvider client={client}>
        <div>
            Details Page
            <br /><br />
            <Details />
        </div>
    </ApolloProvider>
)

export default User
