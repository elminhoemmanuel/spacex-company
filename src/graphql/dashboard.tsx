import { gql } from "@apollo/client";

export const QUERY_COMPANY_DATA = gql`
    query GetCompanyData {
        company {
            ceo,
            cto,
            name

        }
    }
`;