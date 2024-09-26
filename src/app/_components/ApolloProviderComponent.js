'use client'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const ApolloProviderComponent = ({ children }) => {
    const client = new ApolloClient({
        uri: "http://backend-example.codebootcamp.co.kr/graphql",
        // 컴퓨터의 메모리에 백엔드에서 받아온 데이터 임시로 저장, 추후 더 깊게 알아보기
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderComponent;
