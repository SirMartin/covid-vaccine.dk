/* eslint-disable react/jsx-key */

import { useCallback, useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { toDigit } from './NumberDigits.jsx'
import { toPercentage } from './NumberPercentage.jsx'
import styles from 'styles/Table.module.css'
import { useLocale } from 'hooks/useLocale.js'
import { useTranslate } from 'hooks/useTranslate'

export default function Table ({ data, filter, setFilter, reportFound }) {
  const { locale } = useLocale
  const translate = useTranslate()

  const handleRowClick = useCallback(
    ({ original: { region } }) => () => {
      setFilter(region === filter ? 'Total' : region)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    [filter, setFilter]
  )

  const formatDigit = number => toDigit({ locale, number })
  const formatPercentage = number => toPercentage({ locale, number })

  const tableData = useMemo(
    () => reportFound !== undefined
      ? reportFound.map(row => {
          const {
            bothDosesApplied,
            percentageOverDelivered,
            percentagePopulationVaccinated,
            percentagePopulationBothDoses,
            ...rest
          } = row

          return {
            bothDosesApplied: !isNaN(bothDosesApplied) ? bothDosesApplied.toFixed(4) : 0,
            percentageOverDelivered: percentageOverDelivered !== null ? percentageOverDelivered.toFixed(4) : 0,
            percentagePopulationVaccinated: percentagePopulationVaccinated !== null ? percentagePopulationVaccinated.toFixed(4) : 0,
            percentagePopulationBothDoses: percentagePopulationBothDoses !== null ? percentagePopulationBothDoses.toFixed(4) : 0,
            ...rest
          }
        })
      : data.map(row => {
        const {
          bothDosesApplied,
          percentageOverDelivered,
          percentagePopulationVaccinated,
          percentagePopulationBothDoses,
          ...rest
        } = row

        return {
          bothDosesApplied: !isNaN(bothDosesApplied) ? bothDosesApplied.toFixed(4) : 0,
          percentageOverDelivered: percentageOverDelivered !== null ? percentageOverDelivered.toFixed(4) : 0,
          percentagePopulationVaccinated: percentagePopulationVaccinated !== null ? percentagePopulationVaccinated.toFixed(4) : 0,
          percentagePopulationBothDoses: percentagePopulationBothDoses !== null ? percentagePopulationBothDoses.toFixed(4) : 0,
          ...rest
        }
      }), [reportFound]
  )

  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'region',
        format: (region) => region
      },
      {
        Header: translate.home.deliveredDoses,
        accessor: 'deliveredDoses',
        format: formatDigit
      },
      {
        Header: translate.home.appliedDoses,
        accessor: 'appliedDoses',
        format: formatDigit
      },
      {
        Header: translate.home.sobreEntregadas,
        accessor: 'percentageOverDelivered',
        format: formatPercentage
      },
      {
        Header: translate.home.poblacionVacunada,
        accessor: 'percentagePopulationVaccinated',
        format: formatPercentage
      },
      {
        Header: translate.home.bothDosesApplied,
        accessor: 'bothDosesApplied',
        format: formatDigit
      },
      {
        Header: translate.home.poblacionTotalmenteVacunada,
        accessor: 'percentagePopulationBothDoses',
        format: formatPercentage
      }
    ],
    [translate]
  )

  let {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data: tableData }, useSortBy)

  // totales siempre en la ultima fila
  rows = [...rows.filter(row => row.id !== '5'), rows.find(row => row.id === '5')]

  return (
    <div className={styles.container}>
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                          ? ' ▼'
                          : ' ▲'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            const className = row.id === '5'
              ? styles.totales
              : row.original.region === filter
                ? styles.selected
                : ''

            return (
              <tr {...row.getRowProps()} className={className} onClick={handleRowClick(row)}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.column.format(cell.value)}
                    </td>
                  )
                })}
                <td className={styles.mobileData}>
                  {row.cells.map((cell, index) => {
                    return (
                      <span key={index}>
                        {index === 0 ? '' : `${headerGroups[0].headers[index].Header} - ${cell.column.format(cell.value)}`}
                      </span>
                    )
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
