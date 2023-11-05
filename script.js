$(document).ready(function() {
    // This will hold the currently loaded characters.
    let currentCharacters = [];
    // Initial sort states: 0 for default, 1 for ascending, and -1 for descending.
    let sortStates = {
      firstName: 0,
      lastName: 0,
      age: 0,
      role: 0,
      house: 0,
      date: 0
    };
  
    // Function to load characters from the JSON file.
    function loadCharacters() {
      $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function(data) {
          currentCharacters = data;
          buildTable(currentCharacters);
        }
      });
    }
  
    // Function to build the table with character data.
    function buildTable(characters) {
      let tbody = $('tbody');
      tbody.empty(); // Clear the table body.
  
      // Populate the table with character data.
      $.each(characters, function(index, character) {
        let row = $('<tr></tr>');
        row.append($('<td></td>').text(character.firstName));
        row.append($('<td></td>').text(character.lastName));
        row.append($('<td></td>').text(character.age));
        row.append($('<td></td>').text(character.role));
        row.append($('<td></td>').text(character.house));
        row.append($('<td></td>').text(character.date));
        tbody.append(row);
      });
    }
  
    // Event binding for clicking on table headers.
    $('th a').on('click', function(e) {
      e.preventDefault();
      let sortKey = $(this).data('sort');
      let sortDirection = sortStates[sortKey];
  
      // Determine the sort direction.
      sortDirection = sortDirection === 1 ? -1 : (sortDirection === -1 ? 0 : 1);
      sortStates[sortKey] = sortDirection;
  
      // Update chevrons for all headers.
      updateChevrons(sortKey, sortDirection);
  
      // Sort the character data if not in default state.
      if (sortDirection !== 0) {
        currentCharacters = sortCharacters(currentCharacters, sortKey, sortDirection);
      } else {
        // If default state, reload original data.
        loadCharacters();
        return;
      }
  
      // Rebuild the table with the sorted data.
      buildTable(currentCharacters);
    });
  
    // Function to sort character data.
    function sortCharacters(characters, sortKey, direction) {
      return characters.slice().sort(function(a, b) {
        let valA = (sortKey === 'age' || sortKey === 'date') ? Number(new Date(a[sortKey])) : a[sortKey].toString().toUpperCase();
        let valB = (sortKey === 'age' || sortKey === 'date') ? Number(new Date(b[sortKey])) : b[sortKey].toString().toUpperCase();
  
        if (valA < valB) {
          return direction === 1 ? -1 : 1;
        }
        if (valA > valB) {
          return direction === 1 ? 1 : -1;
        }
        return 0;
      });
    }
  
    // Function to update the chevrons next to the table headers.
    function updateChevrons(sortedBy, direction) {
      $('th a').each(function() {
        let currentSort = $(this).data('sort');
        $(this).html(currentSort); // Reset to default text.
  
        // Add the chevron only if not in default state.
        if (currentSort === sortedBy && direction !== 0) {
          let chevron = direction === 1 ? ' &#x25B2;' : ' &#x25BC;';
          $(this).append(chevron);
        }
      });
    }
  
    // Load characters initially.
    loadCharacters();
  });
  