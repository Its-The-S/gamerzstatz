import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";

export default function Compare() {
    const { titleId } = useParams();

    return (
        <>
            <div className="chart-container">
                <Chart titleId={titleId} />
            </div>
        </>
    );
}
