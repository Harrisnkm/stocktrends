import React from 'react'
import './AnalystProfileTable.scss'
import {Button} from 'carbon-components-react'
import {
    DataTable,
      TableContainer,
      Table,
      TableHead,
      TableRow,
      TableHeader,
      TableBody,
      TableCell,
      TableToolbar,
      TableToolbarAction,
      TableToolbarContent,
      TableToolbarSearch,
      TableToolbarMenu,
} from 'carbon-components-react'

function AnalystProfileTable(props){

const headers = [
  {
    header: 'Name',
    key: 'name',
  },
  {
    header: 'Protocol',
    key: 'protocol',
  },
  {
    header: 'Port',
    key: 'port',
  },
  {
    header: 'Rule',
    key: 'rule',
  },
  {
    header: 'Attached Groups',
    key: 'attached_groups',
  },
  {
    header: 'Status',
    key: 'status',
  },
];

const rows = [
  {
    attached_groups: 'Kevins VM Groups',
    id: 'a',
    name: 'Load Balancer 3',
    port: 3000,
    protocol: 'HTTP',
    rule: 'Round robin',
    status: 'Disabled',
  },
  {
    attached_groups: 'Maureens VM Groups',
    id: 'b',
    name: 'Load Balancer 1',
    port: 443,
    protocol: 'HTTP',
    rule: 'Round robin',
    status: 'Starting',
  },
  {
    attached_groups: 'Andrews VM Groups',
    id: 'c',
    name: 'Load Balancer 2',
    port: 80,
    protocol: 'HTTP',
    rule: 'DNS delegation',
    status: 'Active',
  },
  {
    attached_groups: 'Marcs VM Groups',
    id: 'd',
    name: 'Load Balancer 6',
    port: 3000,
    protocol: 'HTTP',
    rule: 'Round robin',
    status: 'Disabled',
  },
  {
    attached_groups: 'Mels VM Groups',
    id: 'e',
    name: 'Load Balancer 4',
    port: 443,
    protocol: 'HTTP',
    rule: 'Round robin',
    status: 'Starting',
  },
  {
    attached_groups: 'Ronjas VM Groups',
    id: 'f',
    name: 'Load Balancer 5',
    port: 80,
    protocol: 'HTTP',
    rule: 'DNS delegation',
    status: 'Active',
  },
];


    return (
        <DataTable rows={rows} headers={headers}>
    {({
      rows,
      headers,
      getHeaderProps,
      getRowProps,
      getTableProps,
      getToolbarProps,
      onInputChange,
      getTableContainerProps,
    }) => (
      <TableContainer
        title="DataTable"
        description="With toolbar"
        {...getTableContainerProps()}>
        <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
          <TableToolbarContent>
            <TableToolbarSearch onChange={onInputChange} />
            <TableToolbarMenu light>
              <TableToolbarAction onClick={() => alert('action 1')}>
                Action 1
              </TableToolbarAction>
              <TableToolbarAction onClick={() => alert('action 2')}>
                Action 2
              </TableToolbarAction>
              <TableToolbarAction onClick={() => alert('action 3')}>
                Action 3
              </TableToolbarAction>
            </TableToolbarMenu>
            <Button onClick={() => alert('Primary Button')}>Get Summary</Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader key={header.key} {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} {...getRowProps({ row })}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
    )
}

export default AnalystProfileTable