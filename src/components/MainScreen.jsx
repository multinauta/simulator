import { FormLabel, Input, MenuItem, Select, Slider, TableCell, TableRow } from "@mui/material"
import { useState } from "react"
import { EqualTo } from "./EqualTo";
import { Pie } from "./Pie";
import { VehiclePrice } from "./VehiclePrice";



export const MainScreen = () => {

    const [pieValue, setPieValue] = useState(0);
    const [piePercentageValue, setPiePercentageValue] = useState(0);
    const [priceValue, setPriceValue] = useState('');

    const onSlideChange = ({ target }) => {
        setPiePercentageValue(target.value)
        setPieValue(priceValue * target.value / 100)
    }

    return (
        <>
            <div className="MainContainer">
                <VehiclePrice
                    setPieValue={setPieValue}
                    priceValue={priceValue}
                    setPriceValue={setPriceValue}
                />
                <Pie
                    pieValue={pieValue}
                />
                <Slider
                    name="pieSlider"
                    onChange={onSlideChange}
                />
                <EqualTo
                    piePercentageValue={piePercentageValue}
                />
                <TableRow>
                    <TableCell>
                        monto líquido del crédito:
                    </TableCell>
                    <TableCell>
                        $2000000
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        N° Cuotas:
                    </TableCell>
                    <TableCell>
                        <Select 
                        defaultValue={12}
                        Label="Cuotas"
                        >
                            <MenuItem value="12">12</MenuItem>
                            <MenuItem value="24">24</MenuItem>
                            <MenuItem value="36">36</MenuItem>
                            <MenuItem value="48">48</MenuItem>
                        </Select>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Cuota Mensual:
                    </TableCell>
                    <TableCell>
                        $56.432
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Cuota Diaria
                    </TableCell>
                    <TableCell>
                        $2.801
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Tasa de interés mensual:
                    </TableCell>
                    <TableCell>
                        2.56%
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Costo Total del crédito: $5.6776.655
                    </TableCell>
                    <TableCell>
                        CAE: 23.56%
                    </TableCell>
                </TableRow>
            </div>
        </>
    )
}
