import React, { useContext } from 'react';
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";


const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <row className='d-flex'>
            {device.brands.map(brand =>
                <Card
                    className="p-3"
                    key={brand.id}
                    style={{cursor: 'pointer'}}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>  
            )}
        </row>
     );
});

export default BrandBar;