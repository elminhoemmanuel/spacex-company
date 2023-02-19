import React from "react";
import { Info } from "../../../interfaces/dashboard";
import Avatar from "../../common/Avatar";
import InfoCard from "../../common/InfoCard";
import styles from "./companyCard.module.scss";

type Props = {
    data: Info | undefined;
}

const CompanyCard = ({ data }: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.headerCard}>
                <Avatar name={data?.name} />
                <h2>{data?.name || "Company Name"}</h2>
            </div>

            <InfoCard position="ceo" name={data?.ceo || "ceo name"} />
            <InfoCard position="cto" name={data?.cto || "cto name"} />
        </div>
    )
}

export default CompanyCard