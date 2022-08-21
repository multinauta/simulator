import React from 'react'
import { FormLabel, Input, TableCell, TableRow } from "@mui/material"

export const Pie = ({ pieValue }) => {
    return (
        <>
            <TableRow>
                <TableCell>
                    <FormLabel>
                        Pie:
                    </FormLabel>
                </TableCell>
                <TableCell>
                    <Input
                        name="pieValue"
                        value={pieValue}
                    />
                </TableCell>
            </TableRow>
        </>
    )
}
