import React from "react";
import CompanyCard from "../CompanyCard";
import styles from "./dashboardLeft.module.scss";
import { useQuery } from '@apollo/client';
import { QUERY_COMPANY_DATA } from "../../../graphql/dashboard";
import { InfoData } from "../../../interfaces/dashboard";
import Loader from "../../common/Loader";

const DashboardLeft = () => {

    const { data, loading, error } = useQuery<InfoData>(QUERY_COMPANY_DATA)

    return (
        <div className={styles.container}>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div>
                        {error ? (
                            <p>Something went wrong , could not fetch the company's data. Please try again</p>
                        ) : (
                            <CompanyCard data={data?.company} />
                        )}
                    </div>
                )
            }
        </div>
    )
}

export default DashboardLeft