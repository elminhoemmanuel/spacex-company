import React, { useState } from "react";
import { benefits } from "../../../data";
import styles from "./benefits.module.scss";

const Benefits = () => {
    const [active, setActive] = useState(3)
    const getBenefitStyle = (id: number) => {
        return active === id ? styles.activeBenefit : styles.benefit
    }

    const handleBenefitClick = (val: number) => setActive(val)
    const handleShowCheck = (id: number): boolean => active === id

    return (
        <div>
            {
                benefits?.map((benefit) => (
                    <div
                        onClick={() => handleBenefitClick(benefit.id)}
                        key={benefit.id}
                        className={getBenefitStyle(benefit.id)}
                    >
                        <div><img src={benefit.img} alt="Benefit icon" /></div>
                        <div className={styles.textBox}>
                            <div>
                                <p className={styles.title}>{benefit.title}</p>
                                <p className={styles.description}>{benefit.description}</p>
                            </div>
                            <div style={{ visibility: `${handleShowCheck(benefit.id) ? "visible" : "hidden"}` }} >
                                <img src={benefit.checkedIcon} alt="check icon" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Benefits