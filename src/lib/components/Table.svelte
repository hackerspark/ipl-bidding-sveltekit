<script>
  export let data = {};

  function sortColumn(columnID) {
    const targetColumn = data.columns.find((column) => column.id === columnID);
    if (targetColumn.sortable) {
      targetColumn.sortDirection =
        targetColumn.sortDirection === 'asc' ? 'desc' : 'asc';
      let sortModifier = targetColumn.sortDirection === 'asc' ? 1 : -1;
      data.rows = data.rows.sort((row1, row2) =>
        row1[columnID] < row2[columnID]
          ? -1 * sortModifier
          : row1[columnID] > row2[columnID]
          ? 1 * sortModifier
          : 0
      );
    }
  }
</script>

<table>
  <thead>
    {#each data.columns as column}
      <th on:click={() => sortColumn(column.id)}>
        <span>
          {#if column.sortDirection === 'asc'}
            &darr;
          {:else if column.sortDirection === 'desc'}
            &uarr;
          {/if}
        </span>
        {column.label}
      </th>
    {/each}
  </thead>
  <tbody>
    {#each data.rows as row (row.id)}
      <tr>
        {#each data.columns as column}
          <td>{row[column.id]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
