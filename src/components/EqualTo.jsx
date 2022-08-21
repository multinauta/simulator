import React from 'react'
import { TableCell, TableRow } from "@mui/material"

export const EqualTo = ({ piePercentageValue }) => {
    return (
        <>
            <TableRow>
                <TableCell>
                    Equivalente a:
                </TableCell>
                <TableCell>
                    {piePercentageValue}%
                </TableCell>
            </TableRow>
        </>
    )
}
