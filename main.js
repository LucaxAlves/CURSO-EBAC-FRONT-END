$(document).ready(function() {
    // Captura o evento de submissão do formulário
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        
        // Captura o valor do input e cria o item de lista
        let taskText = $('#taskInput').val();
        let newTask = $('<li></li>').text(taskText);
        
        // Adiciona o item de lista na UL
        $('#taskList').append(newTask);
        
        // Limpa o campo de input
        $('#taskInput').val('');
    });
    
    // Evento para marcar a tarefa como concluída ao clicar
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
