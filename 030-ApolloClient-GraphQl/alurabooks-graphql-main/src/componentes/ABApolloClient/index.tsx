import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:9000/graphql"
});

interface Props{
    children: ReactNode
}

const ABApolloClient = ({children}: Props) => {
    return (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
    )
};

export default ABApolloClient;