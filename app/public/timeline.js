$('#submitEntry').on('click', function(e) {
    e.preventDefault();
    console.log('journal entry click')
    var userData = {
        entry: $('#journalEntry').val()
    }
    console.log($('#journalEntry').val());
})