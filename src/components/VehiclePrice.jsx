import { FormLabel, Input, TableCell, TableRow } from "@mui/material"
import { useState } from "react"

export const VehiclePrice = ({ setPieValue, setPriceValue, priceValue }) => {


    const handlePriceValue = ({ target }) => {
        setPriceValue(target.value)
        setPieValue(priceValue * target.value / 100)
    }
    return (
        <>
            <TableRow>
                <TableCell>
                    <FormLabel>
                        Precio del vehículo:
                    </FormLabel>
                </TableCell>
                <TableCell>
                    <Input
                        type="number"
                        placeholder="ingrese valor total"
                        name="priceValue"
                        onChange={handlePriceValue}
                    />
                </TableCell>
            </TableRow>
        </>
    )
}
