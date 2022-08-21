import { FormLabel, Input, Slider, TableCell, TableRow } from "@mui/material"
import { useState } from "react"
import { Pie } from "./Pie";
import { VehiclePrice } from "./VehiclePrice";



export const MainScreen = () => {

    const [pieValue, setPieValue] = useState(0);
    const [piePercentageValue, setPiePercentageValue] = useState(0);
    const [priceValue, setPriceValue] = useState('');

    const handlePieValue = ({ target }) => {

    }

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
                <TableRow>
                    <TableCell>
                        Equivalente a:
                    </TableCell>
                    <TableCell>
                        {piePercentageValue}%
                    </TableCell>
                </TableRow>
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
                        48
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
