import { useEffect, useState } from 'react';

const useInventory = () => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('https://fec-inventory-api.herokuapp.com/inventory-info')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);
    return [inventory, setInventory];
}
export default useInventory;