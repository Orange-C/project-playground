import { useEffect, useState } from "react";

import getImage from "../data/getImage";

export default function useImage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    getImage().then(res => {
        setLoading(false);
        console.log(res);
    })
}